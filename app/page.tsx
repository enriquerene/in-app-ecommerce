"use client";

import React from "react";
import { SearchBar, CategoryList, ProductGrid } from "@/src/domains/catalog/components";
import { Header, BottomNavigation } from "@/src/ui/layout";
import { Logo } from "@/src/ui/base";
import { InstagramProfile } from "@/src/ui/composed";
import { MOCK_CATEGORIES } from "@/src/domains/catalog/constants";
import { useProducts } from "@/src/domains/catalog/hooks/useProducts";

export default function Home() {
  const { products, isLoading, error } = useProducts();

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950">
      <div className="flex min-h-screen flex-col bg-white dark:bg-black max-w-md mx-auto border-x border-zinc-200 dark:border-zinc-800 relative">
      {/* Top Bar */}
      <Header className="justify-between">
        <Logo />
        <InstagramProfile />
      </Header>

      <main className="flex-1 pb-20">
        {/* Search Bar */}
        <SearchBar />

        {/* Categories (Stories) */}
        <CategoryList categories={MOCK_CATEGORIES} />

        {/* Product Grid (Feed) */}
        {isLoading ? (
          <div className="flex justify-center p-8">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-zinc-900 dark:border-white"></div>
          </div>
        ) : error ? (
          <div className="p-4 text-center text-red-500">
            <p>Error loading products: {error}</p>
          </div>
        ) : (
          <ProductGrid products={products} />
        )}
      </main>

      {/* Bottom Navigation (Optional but makes it look more like an app) */}
      <BottomNavigation />
    </div>
  </div>
  );
}

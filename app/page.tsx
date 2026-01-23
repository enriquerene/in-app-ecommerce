"use client";

import React from "react";
import { SearchBar, CategoryList, ProductGrid } from "@/src/domains/catalog/components";
import { Icon } from "@/src/ui/base/Icon";
import { MOCK_CATEGORIES, MOCK_PRODUCTS } from "@/src/domains/catalog/constants";

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950">
      <div className="flex min-h-screen flex-col bg-white dark:bg-black max-w-md mx-auto border-x border-zinc-200 dark:border-zinc-800 relative">
      {/* Top Bar */}
      <header className="flex items-center justify-between px-4 py-3 border-b border-zinc-100 dark:border-zinc-900 sticky top-0 bg-white dark:bg-black z-10">
        <h1 className="text-xl font-bold tracking-tight italic">Storegram</h1>
        <div className="flex gap-4">
          <Icon name="cart" size={24} />
          <Icon name="user" size={24} />
        </div>
      </header>

      <main className="flex-1 pb-20">
        {/* Search Bar */}
        <SearchBar />

        {/* Categories (Stories) */}
        <CategoryList categories={MOCK_CATEGORIES} />

        {/* Product Grid (Feed) */}
        <ProductGrid products={MOCK_PRODUCTS} />
      </main>

      {/* Bottom Navigation (Optional but makes it look more like an app) */}
      <nav className="fixed bottom-0 w-full max-w-md bg-white dark:bg-black border-t border-zinc-100 dark:border-zinc-900 flex justify-around py-3 px-4">
        <Icon name="home" size={26} className="cursor-pointer" />
        <Icon name="search" size={26} className="cursor-pointer" />
        <Icon name="plus-square" size={26} className="cursor-pointer" />
        <Icon name="heart" size={26} className="cursor-pointer" />
        <Icon name="user" size={26} className="cursor-pointer" />
      </nav>
    </div>
  </div>
  );
}

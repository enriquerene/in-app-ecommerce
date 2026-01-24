"use client";

import React, { useEffect } from "react";
import { ProductFeed } from "@/src/domains/catalog/components";
import { BackButton, HeaderTitle } from "@/src/ui/base";
import { BottomNavigation, Header } from "@/src/ui/layout";
import { useProducts } from "@/src/domains/catalog/hooks/useProducts";

export default function FeedPage() {
  const { products, isLoading, error } = useProducts();

  useEffect(() => {
    if (!isLoading && !error) {
      const scrollToHash = () => {
        const hash = window.location.hash;
        if (hash) {
          const id = hash.replace('#', '');
          const element = document.getElementById(id);
          if (element) {
            element.scrollIntoView({ behavior: 'auto' });
          }
        }
      };

      scrollToHash();

      const timeoutId = setTimeout(scrollToHash, 100);
      
      return () => clearTimeout(timeoutId);
    }
  }, [isLoading, error]);

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950">
      <div className="flex min-h-screen flex-col bg-white dark:bg-black max-w-md mx-auto border-x border-zinc-200 dark:border-zinc-800 relative">
        <Header className="gap-4">
          <BackButton />
          <HeaderTitle>Shop</HeaderTitle>
        </Header>

        <main className="flex-1 pb-20">
          {isLoading ? (
            <div className="flex justify-center p-8">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-zinc-900 dark:border-white"></div>
            </div>
          ) : error ? (
            <div className="p-4 text-center text-red-500">
              <p>Error loading products: {error}</p>
            </div>
          ) : (
            <ProductFeed products={products} />
          )}
        </main>
        <BottomNavigation />
      </div>
    </div>
  );
}

"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { ProductFeed } from "@/src/domains/catalog/components";
import { MOCK_PRODUCTS } from "@/src/domains/catalog/constants";
import { Icon } from "@/src/ui/base/Icon";

export default function FeedPage() {
  const router = useRouter();

  useEffect(() => {
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

    // Try immediately
    scrollToHash();

    // Also try after a short delay to ensure layout is stable
    const timeoutId = setTimeout(scrollToHash, 100);
    
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950">
      <div className="flex min-h-screen flex-col bg-white dark:bg-black max-w-md mx-auto border-x border-zinc-200 dark:border-zinc-800 relative">
        {/* Top Bar */}
        <header className="flex items-center gap-4 px-4 py-3 border-b border-zinc-100 dark:border-zinc-900 sticky top-0 bg-white dark:bg-black z-10">
          <button 
            onClick={() => router.back()}
            className="hover:opacity-70 transition-opacity"
          >
            <Icon name="arrow-left" size={24} />
          </button>
          <h1 className="text-lg font-bold">Feed</h1>
        </header>

        <main className="flex-1 pb-20">
          <ProductFeed products={MOCK_PRODUCTS} />
        </main>

        {/* Bottom Navigation */}
        <nav className="fixed bottom-0 w-full max-w-md bg-white dark:bg-black border-t border-zinc-100 dark:border-zinc-900 flex justify-around py-3 px-4">
          <Icon name="home" size={26} className="cursor-pointer" onClick={() => router.push('/')} />
          <Icon name="search" size={26} />
          <Icon name="plus-square" size={26} />
          <Icon name="heart" size={26} />
          <Icon name="user" size={26} />
        </nav>
      </div>
    </div>
  );
}

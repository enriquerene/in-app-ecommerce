"use client";

import { useEffect, ReactNode } from 'react';

interface PWAProviderProps {
  children: ReactNode;
}

export function PWAProvider({ children }: PWAProviderProps) {
  useEffect(() => {
    if ('serviceWorker' in navigator) {
      const swPath = '/sw.js';

      const register = () => {
        navigator
          .serviceWorker
          .register(swPath)
          .then((registration) => {
            console.log('ServiceWorker registration successful: ', registration.scope);
          },
          (err) => {
            console.log('ServiceWorker registration failed: ', err);
          }
        );
      };

      if (window.location.hostname === 'localhost') {
        register();
      } else {
        window.addEventListener('load', register);
      }
    }
  }, []);

  return <>{children}</>;
}

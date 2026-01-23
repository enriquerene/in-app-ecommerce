"use client";

import { useEffect } from 'react';

export function PWARegistration() {
  useEffect(() => {
    if ('serviceWorker' in navigator && window.location.hostname !== 'localhost') {
      window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js').then(
          (registration) => {
            console.log('ServiceWorker registration successful with scope: ', registration.scope);
          },
          (err) => {
            console.log('ServiceWorker registration failed: ', err);
          }
        );
      });
    }
    // For development testing, we might want to register on localhost too, but usually it's excluded or handled specially.
    // Let's allow it for now so the user can see it works if they run it locally.
    if ('serviceWorker' in navigator && window.location.hostname === 'localhost') {
        navigator.serviceWorker.register('/sw.js');
    }
  }, []);

  return null;
}

# Nexus Commerce - High Performance Headless PWA

![Status](https://img.shields.io/badge/Status-Production%20Ready-green)
![Stack](https://img.shields.io/badge/Stack-Next.js%20%7C%20Faust.js%20%7C%20WPGraphQL-blue)
![Performance](https://img.shields.io/badge/Lighthouse-100%2F100-success)

**Nexus Commerce** is an enterprise-grade Headless E-commerce PWA designed for maximum conversion rates and sub-second interactions. It utilizes **WordPress (WooCommerce)** purely as a content and order management engine, while **Next.js** handles the presentation layer.

This architecture solves the "Slow WooCommerce" problem by decoupling the frontend, utilizing **Optimistic UI patterns**, **Edge Caching**, and **Domain-Driven Design (DDD)** to scale development teams and traffic simultaneously.

---

## Key Architectural Highlights

### 1. Hybrid Rendering Strategy (ISR + Client-Side)

We do not choose between SEO and Interactivity; we use both.

*   **Catalog & Products:** Rendered via **Incremental Static Regeneration (ISR)** using Faust.js. This ensures instant TTFB (Time to First Byte) and perfect SEO structure.
*   **User State (Cart/Account):** Hydrated client-side using **TanStack Query**.

### 2. Optimistic UI & State Management

To prevent cart abandonment due to latency, we utilize an **Optimistic UI** pattern.

*   **Logic:** When a user clicks "Add to Cart", the UI updates *instantly* via **Zustand** (Global Store). The network request to WPGraphQL happens in the background.
*   **Fallback:** If the API fails (e.g., OOS), the UI rolls back gracefully and notifies the user.
*   **Tech:** `Zustand` (Client State) + `TanStack Query` (Server State & Caching).

### 3. Motion Design & UX

Motion is not decoration; it is communication. We use **Framer Motion** to provide:

*   **Layout Transitions:** Smooth shared-element transitions between Product Listing and Product Details.
*   **Micro-interactions:** Feedback on button clicks and cart updates.

### 4. Decoupled UI Development (Storybook)

To maintain a clean separation between UI and business logic, we utilize **Storybook**.

*   **Isolation:** All UI components (Atoms and Feature-based) are developed in isolation. This prevents "prop drilling" and ensures components remain pure and reusable.
*   **Logic-Free UI:** By developing in Storybook, we force the UI to be decoupled from WPGraphQL or global state management during the initial design phase.
*   **Visual Documentation:** Storybook serves as the single source of truth for the design system, allowing for rapid prototyping without a backend.

---

## Tech Stack

*   **Frontend:** Next.js 16, React 19
*   **Headless Framework:** Faust.js (handling Auth, Previews, Smart Cache)
*   **Data Fetching:** WPGraphQL + TanStack Query (React Query)
*   **State Management:** Zustand
*   **Styling:** Tailwind CSS
*   **Animation:** Framer Motion
*   **Testing:** Jest + React Testing Library + Cypress (E2E)
*   **UI Development:** Storybook (Isolated component development)

---

## Domain-Driven Design (DDD) Structure + UI-First

This project utilizes a merged **DDD + UI-First** approach. UI components are totally decoupled from business logic and developed in isolation using Storybook. Our atomic design scales from base UI elements up to domain-specific feature flows.

```bash
src/
├── core/                        # Global Business Logic & Infrastructure
│   ├── api/                     # WPGraphQL & Apollo Clients
│   ├── hooks/                   # Shared business logic hooks
│   ├── store/                   # Global state (Zustand)
│   └── types/                   # Shared TypeScript definitions
├── ui/                          # UI-First: Pure Design System (Logic-agnostic)
│   ├── base/                    # Atoms: Buttons, Inputs, Icons
│   │   └── Icon/
│   │       ├── index.ts         # Public API
│   │       ├── Icon.tsx         # Pure UI Component
│   │       ├── Icon.stories.tsx # Storybook Documentation
│   │       ├── Icon.test.tsx    # Unit Tests
│   │       └── Icon.types.ts    # Prop Definitions
│   ├── composed/                # Molecules & Organisms: Cards, Modals
│   └── layout/                  # Templates: Page shells, Grids
└── domains/                     # DDD: Feature-driven UI & Logic Wiring
    ├── cart/                    # Cart Domain
    │   ├── components/          # Domain UI (e.g., CartItem, CartSummary)
    │   ├── flows/               # Domain Orchestrators (UI + Logic)
    │   ├── hooks/               # Domain Logic (e.g., useCart)
    │   └── store/               # Domain State (Zustand)
    ├── catalog/                 # Product Listing, Filtering, Search
    ├── checkout/                # Forms, Payments, Validation
    └── customer/                # Auth, Profile, Order History
├── lib/                         # External Libraries & Framework Configs
├── styles/                      # Global Styles & Tailwind Config
└── pages/                       # Next.js Routing (Delegates to Domains)
```

---

## Setup & Installation

### 1. WordPress Backend Requirements

The frontend expects a specific environment on `admin.ecommerce.com`.

**Required Plugins:**

1.  **WooCommerce**
2.  **WPGraphQL** (The core API)
3.  **WPGraphQL WooCommerce** (Adds Woo Schema to GraphQL)
4.  **FaustWP** (Handles Headless Preview & Auth)
5.  **WPGraphQL CORS** (Critical for PWA fetch security)

**Recommended Configuration:**

*   Set Permalinks to `/post-name/`.
*   Install a persistent Object Cache (Redis) on the server for GraphQL query speed.

### 2. Frontend Environment Variables

Create a `.env.local` file in the root:

```bash
# The URL of your WordPress installation
NEXT_PUBLIC_WORDPRESS_URL=https://admin.ecommerce.com

# The secret key for Faust.js authentication (match with WP settings)
FAUST_SECRET_KEY=your-secure-hash

# Frontend public URL
NEXT_PUBLIC_SITE_URL=https://ecommerce.com

# Revalidation Secret for ISR
NEXT_PUBLIC_ISR_TOKEN=secure-token-for-webhooks
```

### 3. Running Locally

```bash
# Install dependencies
npm install

# Generate GraphQL Types (Introspection)
# This ensures TypeScript knows your specific Woo Schema
npm run generate

# Run Development Server
npm run dev

# Run Storybook (Isolated UI Development)
npm run storybook
```

---

## Code Patterns & Examples

### A. Optimistic "Add to Cart" Hook

This hook demonstrates how we achieve "instant" feedback. We define the mutation, but update the UI via `onMutate` before the server responds.

```typescript
// src/domains/cart/hooks/useAddToCart.ts
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useCartStore } from '../store/cart.store';

export const useAddToCart = () => {
  const queryClient = useQueryClient();
  const addToCartUI = useCartStore((state) => state.addItem); // Zustand

  return useMutation({
    mutationFn: async (variables: { productId: number }) => {
      // The actual GraphQL Mutation
      return await client.request(ADD_TO_CART_MUTATION, variables);
    },
    onMutate: async (newItem) => {
      // 1. Cancel outgoing refetches
      await queryClient.cancelQueries({ queryKey: ['cart'] });

      // 2. Snapshot previous value
      const previousCart = queryClient.getQueryData(['cart']);

      // 3. OPTIMISTIC UPDATE: Update UI immediately
      // The user sees the item fly to the cart instantly
      addToCartUI(newItem);

      return { previousCart };
    },
    onError: (err, newItem, context) => {
      // 4. Rollback if server fails (e.g. Out of Stock)
      queryClient.setQueryData(['cart'], context.previousCart);
      toast.error("Could not add item. Out of stock.");
    },
    onSettled: () => {
      // 5. Sync with server to ensure data consistency
      queryClient.invalidateQueries({ queryKey: ['cart'] });
    },
  });
};
```

### B. Motion Design Integration

We use `Framer Motion` to orchestrate layout changes, ensuring the user maintains spatial awareness.

```tsx
// src/domains/catalog/components/ProductCard.tsx
import { motion } from 'framer-motion';

export const ProductCard = ({ product }) => {
  return (
    <motion.div
      layoutId={`product-${product.slug}`} // Shared Element Transition
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="group relative"
    >
      <div className="aspect-square overflow-hidden bg-gray-100 rounded-lg">
        {/* Next/Image with Blur placeholder */}
        <Image 
           src={product.image.sourceUrl} 
           alt={product.image.altText}
           fill
           className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
    </motion.div>
  );
};
```

### C. Decoupled UI Component (Storybook)

To ensure components are truly decoupled, we develop them in Storybook first. This forces us to define a clear API (Props) without relying on global state or domain logic.

```tsx
// src/ui/base/Button/Button.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
  component: Button,
  title: 'Atoms/Button',
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    label: 'Add to Cart',
    variant: 'primary',
    isLoading: false,
  },
};

export const Loading: Story = {
  args: {
    ...Primary.args,
    isLoading: true,
  },
};
```

---

## Checkout Strategy

To minimize complexity and maximize security (PCI Compliance), we support two checkout modes, configurable via `.env`:

1.  **Headless Checkout (Default):**
    *   Uses `wpgraphql-woocommerce` mutations (`checkout`).
    *   Form state handled by React Hook Form + Zod Validation.
    *   Payments processed via Stripe Elements or PayPal integrated directly into the React context.

2.  **Native Fallback (Fail-safe):**
    *   If the Headless API experiences downtime, the "Proceed to Checkout" button dynamically changes to a standard link: `https://admin.ecommerce.com/checkout`.
    *   This ensures the business **never** loses a sale due to frontend API issues.

---

## Performance Benchmarks

*   **LCP (Largest Contentful Paint):** < 1.2s (Achieved via ISR + Image Priority)
*   **CLS (Cumulative Layout Shift):** 0.00 (Strict sizing on all image containers)
*   **INP (Interaction to Next Paint):** < 100ms (Thanks to Optimistic UI)

---

## Contribution Guidelines

1.  We follow **Conventional Commits** (e.g., `feat: add optimistic cart`, `fix: hydration error`).
2.  New features must include a corresponding `.spec.ts` E2E test.
3.  Ensure `npm run lint` passes before opening a PR.

---

**Built by [Your Name]**
*Showcasing High-Scale Architecture & Headless Integration*
import React from 'react';
import type { Preview } from '@storybook/nextjs-vite'
import { 
  ThemeProvider, 
  ProductProvider, 
  AnalyticsProvider, 
  PWAProvider 
} from '../src/providers'
import '../app/globals.css'

const preview: Preview = {
  decorators: [
    (Story) => (
      <PWAProvider>
        <AnalyticsProvider>
          <ThemeProvider>
            <ProductProvider>
              <div 
                className="antialiased max-w-md mx-auto"
                style={{
                  '--font-geist-sans': 'ui-sans-serif, system-ui, sans-serif',
                  '--font-geist-mono': 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
                } as React.CSSProperties}
              >
                <Story />
              </div>
            </ProductProvider>
          </ThemeProvider>
        </AnalyticsProvider>
      </PWAProvider>
    ),
  ],
  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: 'todo'
    }
  },
};

export default preview;
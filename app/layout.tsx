import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { 
  PWAProvider, 
  AnalyticsProvider, 
  ProductProvider, 
  ThemeProvider 
} from "@/src/providers";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "InstaShop",
  description: "Instagram-like e-commerce experience",
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "InstaShop",
  },
  formatDetection: {
    telephone: false,
  },
};

export const viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title></title>
        <link rel="apple-touch-icon" href="/globe.svg" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <PWAProvider>
          <AnalyticsProvider>
            <ThemeProvider>
              <ProductProvider>
                {children}
              </ProductProvider>
            </ThemeProvider>
          </AnalyticsProvider>
        </PWAProvider>
      </body>
    </html>
  );
}

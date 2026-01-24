import { SpeedInsights } from "@vercel/speed-insights/next";

interface AnalyticsProviderProps {
  children: React.ReactNode;
}
export function AnalyticsProvider({ children }: AnalyticsProviderProps) {
  return <>
    {children}
    <SpeedInsights />
  </>;
}
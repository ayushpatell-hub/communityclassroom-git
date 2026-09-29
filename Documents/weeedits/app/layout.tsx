import type { Metadata, Viewport } from "next";
import { Sora, Inter } from "next/font/google";
import "./globals.css";

const sora = Sora({ subsets: ["latin"], weight: ["600", "700", "800"], variable: "--font-sora", display: "swap" });
const inter = Inter({ subsets: ["latin"], weight: ["400", "500", "600"], variable: "--font-inter", display: "swap" });

export const metadata: Metadata = {
  title: { default: "weeedits | Video editing and promotion studio", template: "%s | weeedits" },
  description:
    "weeedits is a video editing and promotion studio. Browse the work, see clear prices and chat directly with the editor to place an order.",
};

export const viewport: Viewport = { themeColor: "#0A0A0F" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${sora.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}




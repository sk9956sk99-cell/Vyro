import type { Metadata, Viewport } from "next";
import "./globals.css";
export const metadata: Metadata = { title: "SKServices — Connect. Collaborate. Grow.", description: "A creator and brand collaboration platform." };
export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#080a14" };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body>{children}</body></html>; }
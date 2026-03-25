import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://mascotcraft.ai"),
  title: {
    default: "mascotcraft — AI-Powered Character & Mascot Creator",
    template: "%s | mascotcraft",
  },
  description:
    "Create stunning AI-powered custom characters and mascots in seconds. Export in PNG, SVG, and GIF. Perfect for branding, social media, and games.",
  keywords: [
    "AI character creator",
    "mascot maker",
    "AI avatar generator",
    "custom character design",
    "SaaS",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://mascotcraft.ai",
    siteName: "mascotcraft",
    title: "mascotcraft — AI-Powered Character & Mascot Creator",
    description:
      "Create stunning AI-powered custom characters and mascots in seconds.",
  },
  twitter: {
    card: "summary_large_image",
    title: "mascotcraft — AI-Powered Character & Mascot Creator",
    description:
      "Create stunning AI-powered custom characters and mascots in seconds.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased bg-brand-dark text-foreground min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "TS Portfolio",
  description: "TypeScript portfolio & mini-landing with Next.js",
  metadataBase: new URL("https://tsportfolio.netlify.app"), 
  icons: { icon: "/favicon.ico" },
  openGraph: {
    title: "TS Portfolio",
    description: "TypeScript portfolio & mini-landing with Next.js",
    url: "https://tsportfolio.netlify.app",
    siteName: "TS Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "TS Portfolio",
    description: "TypeScript portfolio & mini-landing with Next.js",
  },
  keywords: ["TypeScript", "Next.js", "React", "Tailwind", "Portfolio"],
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (

    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-background text-foreground`}
      >
        {children}
      </body>
    </html>
  );
}
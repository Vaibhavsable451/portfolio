import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export const metadata: Metadata = {
  title: "Professional Portfolio | Your Name",
  description:
    "A professional portfolio showcasing skills, projects, and achievements in web development and data analysis.",
  keywords: [
    "portfolio",
    "web development",
    "data analysis",
    "react",
    "next.js",
    "professional",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="font-sans bg-gray-900 text-white antialiased">
        {children}
      </body>
    </html>
  );
}

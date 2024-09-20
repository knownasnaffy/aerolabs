import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Navbar from "@/components/layout/navbar";

export const metadata: Metadata = {
  title: "AeroLabs",
  description: "Building future and what not",
};

const inter = Inter({
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen",
          inter.className
        )}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}

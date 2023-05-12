import React from "react";
import "./globals.css";
import { Inter } from "next/font/google";
import { Providers } from "@/components/Providers";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Home page",
  description: "Home page chat app",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

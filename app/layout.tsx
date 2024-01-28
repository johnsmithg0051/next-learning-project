import React from "react";
import '@/app/ui/global.css';
import {quickSand} from "@/app/ui/fonts";

export default function RootLayout({
                                     children,
                                   }: {
  children: React.ReactNode;
}) {
  return (
      <html lang="en">
      <body className={`${quickSand.className} antialiased`}>{children}</body>
      </html>
  );
}

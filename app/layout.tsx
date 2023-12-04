import type { Metadata } from "next";
import "./globals.css";
import { inter } from "@/lib/fonts";
import { Children } from "@/lib/types";

export const metadata: Metadata = {
  title: "Car or Goat - A Monty Hall Problem",
  description: "Will you win a car or take a goat home",
};

export default function RootLayout({ children }: Children) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}

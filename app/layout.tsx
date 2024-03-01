import type { Metadata } from "next";
import "./globals.css";
import { inter } from "@/lib/fonts";
import { Children } from "@/lib/types";
import InitiateStore from "@/components/templates/initiate-store";

export const metadata: Metadata = {
  title: {
    template: "%s - Car or Goat",
    default: "Car or Goat - A Monty Hall Problem",
  },
  description: "Will you win a Car or take a Goat home",
};

export default function RootLayout({ children }: Children) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <InitiateStore />

        {children}
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Electrolize } from "next/font/google"
import "@/styles/globals.css";

const electrolize = Electrolize({
  subsets: ["latin"],
  weight: "400",
});


export const metadata: Metadata = {
  title: "ASTRO STUDIES",
  description: "Hi!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={electrolize.className}>
        {children}
      </body>
    </html>
  );
}

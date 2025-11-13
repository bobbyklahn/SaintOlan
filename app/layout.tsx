import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "St. Olan Isle 圣澳蓝屿 - Wine Label Presentation",
  description: "Premium wine label design presentation",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

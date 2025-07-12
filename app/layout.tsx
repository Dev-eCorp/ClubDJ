import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Club DJ",
  description: "Created by Eduard Cruz",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}

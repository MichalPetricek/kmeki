import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "KMEKI Composites",
  description: "KMEKI COMPOSITES s.r.o. – composite manufacturing",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}

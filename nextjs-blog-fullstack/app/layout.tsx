import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "Full stack Next JS Blog App",
  description: "Generated for learning purposes",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

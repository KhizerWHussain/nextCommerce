import type { Metadata } from "next";
import "./globals.css";
import dynamic from "next/dynamic";
const Navigation_Headers = dynamic(() => import("@/Components/Header"), {
  ssr: false,
});

export const metadata: Metadata = {
  title: "KClothing",
  description: "k clothing website on next.js, tailwindcss, mui",
  authors: [{ name: "Khizer Hussain" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navigation_Headers />
        {children}
      </body>
    </html>
  );
}

import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";
import AnchorProvider from "@/providers/anchor-provider";
import { GeistSans } from "geist/font/sans";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Quantic",
  description: "Template by Vyzion.pt",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth relative">
      <body className={`${GeistSans.className} antialiased`}>
        <AnchorProvider>
          <Header />
          {children}
          <Footer />
        </AnchorProvider>
      </body>
    </html>
  );
}

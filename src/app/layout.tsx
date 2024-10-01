import Header from "@/components/layout/header";
import AnchorProvider from "@/providers/anchor-provider";
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Footer from "@/components/layout/footer";

const geistSans = localFont({
  src: "./_fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./_fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

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
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AnchorProvider>
          <Header />
          {children}
          <Footer />
        </AnchorProvider>
      </body>
    </html>
  );
}

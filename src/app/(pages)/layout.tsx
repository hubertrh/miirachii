import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import NextTopLoader from "nextjs-toploader";
import { Lora, Quicksand } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import HeaderLink from "@/components/header/HeaderLink";

export const metadata: Metadata = {
  title: "Miirachii",
  // TODO: Get dynamic description (?)
  description: "Miirachii's personal website",
};

const lora = Lora({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-lora",
});
const quicksand = Quicksand({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-quicksand",
});
const fontSans = Quicksand({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <body
      className={`${quicksand.className} ${lora.variable} ${cn(
        "relative min-h-screen bg-primary font-sans text-coal antialiased",
        fontSans.variable,
      )}`}
    >
      {/* TODO: Implement smooth scrolling */}
      {/* TODO: Uncomment NextTopLoader when other pages are ready, then change #id links from <Link> to <a> (?) */}
      {/* <NextTopLoader
        color="#3A3E64"
        height={5}
        initialPosition={0.2}
        easing="ease"
        speed={500}
      /> */}
      <HeaderLink />
      <Header />
      <main className="min-h-screen">{children}</main>
      <Footer />
      <Analytics />
      <SpeedInsights />
    </body>
  );
}

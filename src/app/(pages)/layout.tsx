import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import NextTopLoader from "nextjs-toploader";
import { Lora, Quicksand } from "next/font/google";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Miirachii",
  // TODO: Change description
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
        "bg-background min-h-screen font-sans antialiased",
        fontSans.variable,
      )}`}
    >
      <NextTopLoader
        color="#3A3E64"
        height={5}
        initialPosition={0.2}
        easing="ease"
        speed={500}
      />
      <main className="min-h-screen">{children}</main>
      <Analytics />
      <SpeedInsights />
    </body>
  );
}

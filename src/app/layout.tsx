import type { Metadata } from "next";
import { Lora, Quicksand } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import NextTopLoader from "nextjs-toploader";

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
// const fontSans = Quicksand({
//   weight: ["300", "400", "500", "600", "700"],
//   subsets: ["latin"],
//   display: "swap",
//   variable: "--font-sans",
// });

export const metadata: Metadata = {
  title: "Miirachii",
  // TODO: Change description
  description: "Miirachii's personal website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${quicksand.className} ${lora.variable}`}>
        <NextTopLoader
          color="#3A3E64"
          height={5}
          initialPosition={0.2}
          easing="ease"
          speed={500}
        />
        <main>{children}</main>
      </body>
      <Analytics />
      <SpeedInsights />
    </html>
  );
}

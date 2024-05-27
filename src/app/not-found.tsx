import { Metadata } from "next";
import { Lora, Quicksand } from "next/font/google";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "404",
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

export default function NotFound() {
  return (
    <body
      className={`${quicksand.className} ${lora.variable} ${cn(
        "min-h-screen bg-background font-sans antialiased",
        fontSans.variable,
      )}`}
    >
      <main className="grid min-h-screen place-items-center">
        <h1 className="font-lora text-4xl">404 — Page Not Found</h1>
      </main>
    </body>
  );
}

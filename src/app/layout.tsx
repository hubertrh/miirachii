import { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Miirachii",
  // TODO: Change description
  description: "Miirachii's personal website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <html lang="en">{children}</html>;
}

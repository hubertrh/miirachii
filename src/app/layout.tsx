import { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    template: "%s | Miirachii",
    default: "Miirachii",
  },
  // TODO: Change description
  description: "Miirachii's personal website",
  metadataBase: new URL("https://www.miirachii.com/"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    url: "/",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <html lang="en">{children}</html>;
}

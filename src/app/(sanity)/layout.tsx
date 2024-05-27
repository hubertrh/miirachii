import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Miirachii Sanity Studio",
  description: "Miirachii Sanity Studio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <body style={{ margin: 0 }}>{children}</body>;
}

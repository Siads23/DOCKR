import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dockr App",
  description: "Find your mooring",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

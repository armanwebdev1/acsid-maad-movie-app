import "./globals.css";
import Layout from "./components/Layout";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Movie App",
  description: "Discover and explore movies",
  keywords: ["movies", "cinema", "film"],
  openGraph: {
    title: "Movie App",
    description: "Discover and explore movies",
    url: "https://yourdomain.com",
    siteName: "Movie App",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Movie App",
      },
    ],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}

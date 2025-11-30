import type { Metadata, Viewport } from "next";
import "./globals.css";
import localFont from "next/font/local";
import Script from "next/script";

const notoSans = localFont({
  src: [
    { path: "../public/font/NotoSansGeorgian-Thin.ttf", weight: "100", style: "normal" },
    { path: "../public/font/NotoSansGeorgian-ExtraLight.ttf", weight: "200", style: "normal" },
    { path: "../public/font/NotoSansGeorgian-Light.ttf", weight: "300", style: "normal" },
    { path: "../public/font/NotoSansGeorgian-Regular.ttf", weight: "400", style: "normal" },
    { path: "../public/font/NotoSansGeorgian-Medium.ttf", weight: "500", style: "normal" },
    { path: "../public/font/NotoSansGeorgian-SemiBold.ttf", weight: "600", style: "normal" },
    { path: "../public/font/NotoSansGeorgian-Bold.ttf", weight: "700", style: "normal" },
    { path: "../public/font/NotoSansGeorgian-ExtraBold.ttf", weight: "800", style: "normal" },
    { path: "../public/font/NotoSansGeorgian-Black.ttf", weight: "900", style: "normal" },
  ],
  variable: "--font-noto-sans",
});

export const viewport: Viewport = {
  themeColor: "#f97316",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_URL!),
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en-US",
    },
  },
  title:
    "Free Invoice Generator: Create & Send Professional Invoices in Minutes",
  description:
    "Get paid on time with our free invoice maker. Create professional invoices & get them to clients instantly.",
  keywords: [
    "invoice generator",
    "free invoice template",
    "invoice maker",
    "online invoice",
    "create invoice",
  ],
  robots: "index, follow",
  openGraph: {
    title:
      "Free Invoice Generator: Create & Send Professional Invoices in Minutes",
    description:
      "Get paid on time with our free invoice maker. Create professional invoices & get them to clients instantly.",
    url: process.env.NEXT_PUBLIC_URL,
    type: "website",
    images: "/og-image.jpeg",
    siteName: "Invoice Generator",
  },
  twitter: {
    card: "summary_large_image",
    site: "@ThatsPranav",
    creator: "@ThatsPranav",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#f97316" />
        <meta name="msapplication-TileColor" content="#f97316" />
        <meta name="theme-color" content="#f97316" />
      </head>
      <body className={`${notoSans.className}`}>{children}</body>
    </html>
  );
}

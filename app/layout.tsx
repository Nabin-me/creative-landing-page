import type { Metadata } from "next";
import "./globals.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { inter } from "@/app/ui/fonts";

export const metadata: Metadata = {
  title: "Creative Landing Page",
  description: "Landing page for creative agency",
  icons: {
    icon: [
      {
        url: "/fav/favicon.ico",
      },
      {
        url: "/fav/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
      {
        url: "/fav/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
    ],
    apple: [{ url: "/fav/apple-touch-icon.png" }],
    other: [
      {
        rel: "mask-icon",
        url: "/fav/safari-pinned-tab.svg",
      },
    ],
  },
  manifest: "/fav/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}

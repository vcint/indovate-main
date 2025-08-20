import type { Metadata } from "next";
import "./globals.css";
import { Poppins } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

export const metadata: Metadata = {
  title: "Agency — Inspired by ThinkWebHub",
  description: "Modern web agency starter built with Next.js, Tailwind, and Framer Motion.",
  openGraph: {
    title: "Agency — Inspired by ThinkWebHub",
    description: "Modern web agency starter built with Next.js, Tailwind, and Framer Motion.",
    type: "website"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
  <body className={`${poppins.className} bg-gradient-to-b from-white to-gray-50`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

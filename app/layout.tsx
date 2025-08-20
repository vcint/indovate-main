import type { Metadata } from "next";
import "./globals.css";
import { Poppins } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

export const metadata: Metadata = {
  title: "Indovate Technologies",
  description: "your complete IT partner for digital success, offering web and app development, debugging, hosting, maintenance, SEO, ERP, and AI/LLM training.",
  openGraph: {
    title: "Indovate Technologies",
    description: "your complete IT partner for digital success, offering web and app development, debugging, hosting, maintenance, SEO, ERP, and AI/LLM training.",
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

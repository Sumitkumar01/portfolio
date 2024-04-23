import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import '@/app/animation.scss'
import NavBar from "@/components/NavBar";
import ScrollToTop from "@/components/ScrollToTop";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sumit Kumar - MERN Stack Developer Portfolio",
  description: "Welcome to Sumit Kumar's portfolio, where creativity meets functionality. Explore a showcase of meticulously crafted web solutions and dynamic applications, powered by Sumit's expertise in MERN stack development. Embark on a journey of innovation and excellence.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true} className={inter.className}>
        <NavBar/>
        {children}
        <ScrollToTop/>
        </body>
    </html>
  );
}

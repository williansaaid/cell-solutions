import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Cell Solutions",
  description: "El mejor aliado de tu celular.",
  icons: "https://res.cloudinary.com/ds41xxspf/image/upload/v1706657198/Cell-Solutions/5_nzq6jm.png"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`bg-dark w-full min-h-screen flex flex-col items-center text-white ${inter.className}`}>
        <Navbar/>
          {children}
        <Footer/>
      </body>
    </html>
  );
}

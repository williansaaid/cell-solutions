import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

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
        {children}
      </body>
    </html>
  );
}

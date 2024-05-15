import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavTop from "./Navbar";



const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Paskibra Macan Banten",
 
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
        <NavTop /> { children }
    </div>
  );
}

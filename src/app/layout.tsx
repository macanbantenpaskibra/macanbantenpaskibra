import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import BottomNav from '../app/components/Nav bottom/bottom-nav';
import MaxWidthWrapper from '../app/components/Nav bottom/max-width-wrapper';


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
    <html lang="en">
      <body className=" bg-black">
            {children}
        <BottomNav />
      </body>
    </html>
  );
}

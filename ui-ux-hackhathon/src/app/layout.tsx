import type { Metadata } from "next";
 
import "./globals.css";
import {Poppins} from "next/font/google"
import Footer from "@/components/Footer";
import TopHeader from "@/components/TopHeader";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

 
export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` ${poppins.className} antialiased`}
      >
        <TopHeader/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}

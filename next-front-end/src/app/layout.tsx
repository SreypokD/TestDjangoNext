import Navigation from "@/components/navigation/navbar";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import MenuBar from "@/components/menu/manu";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Todo",
  description: "To do page",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className} >
        <Navigation />
        <div className="nesmain flex algin-center w-full">
          <MenuBar />
          <div  style={{'marginRight' : '40%'}}>{children}</div>
        </div>
      </body>
    </html>
  );
}

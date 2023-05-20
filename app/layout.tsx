import "./globals.css";
import { Providers } from "./providers";
import { Inter } from "next/font/google";
import Subnavigation from "@/components/Navbar/DesktopNav";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "serexon vendor",
  description: "Sell your products and services with serexon-vendor platform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <Subnavigation />
          {children}
        </Providers>
      </body>
    </html>
  );
}

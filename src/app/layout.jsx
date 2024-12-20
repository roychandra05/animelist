import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Gabarito } from "next/font/google";

const gabarito = Gabarito({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata = {
  title: "RC Anime",
  description: "Provide All Anime list",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${gabarito.subsets} antialiased bg-main-background`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}

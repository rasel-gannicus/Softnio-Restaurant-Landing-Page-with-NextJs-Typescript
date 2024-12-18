import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Bebas_Neue, Roboto } from "next/font/google";
import Navbar from "../components/shared/Navbar/Navbar";
import { ThemeProvider } from "@/utils/DarkMode/ThemeContext";

export const bebasNeue = Bebas_Neue({
  weight: "400", // Bebas Neue only comes in regular weight
  subsets: ["latin"],
  display: "swap",
});

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const roboto = Roboto({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Softnio - Restaurant Landing Page",
  description: "Created by Shafiqul Hasan Rasel",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.className}`}>
        <ThemeProvider>
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

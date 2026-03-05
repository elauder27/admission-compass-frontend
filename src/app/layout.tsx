import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
<<<<<<< HEAD
import Header from "./components/Header";
import Footer from "./components/Footer"
=======
import { Toaster } from "react-hot-toast";
>>>>>>> a4cb277593881f9c6f100e7078897b7309abdae6
import "./globals.css";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Admission compass",
  description: "Ready to know your chances?",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
<<<<<<< HEAD
        <Header />
=======
        <Toaster position="bottom-center" />
>>>>>>> a4cb277593881f9c6f100e7078897b7309abdae6
        {children}
        <Footer />
      </body>
    </html>
  );
}

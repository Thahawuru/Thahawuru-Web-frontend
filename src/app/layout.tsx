import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
// import Navbar from "../components/navbar";
import logo from "./favicon.ico";
import { Toaster } from "sonner";
import { AuthProvider } from "@/context/authContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title:
    "Thahawuru | Sri Lanka's Integrated Digital Identity Verification System",
  description:
    "Thahawuru is a digital identity verification system that allows you to verify your identity via a digital wallet application.",
};

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <AuthProvider>
        <html lang="en">
          <head>
            <link rel="icon" href={logo.src} />
          </head>
          <body className={inter.className}>
            <main>{children}</main>
            <Toaster />
          </body>
        </html>
      </AuthProvider>
    </>
  );
}

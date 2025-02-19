import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from '@/app/components/navigation';
import Footer from '@/app/components/footer';
import Explorer from '@/app/components/navigation/explorer';
import React from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio Home",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>Habiba Sameh</title>
      </head>
      <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased w-screen min-h-screen`}
      >
        <Navigation/>
        <main className="flex flex-row flex-1">
          <Explorer/>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

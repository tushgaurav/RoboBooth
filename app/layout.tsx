import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from 'next/font/local'
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const geomanist = localFont({
  src: [{
    path: './geomanist_regular.woff2',
    weight: '400',
    style: 'normal'
  }
  ]
})

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
      <body className={geomanist.className}>

        {children}
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import {config} from '@fortawesome/fontawesome-svg-core'
config.autoAddCss = false;

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "LooQuiz: Quiz App",
  description: "Quiz App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        </body>
    </html>
  );
}

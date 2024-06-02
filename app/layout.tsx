import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import {config} from '@fortawesome/fontawesome-svg-core'
config.autoAddCss = false;
import { Analytics } from "@vercel/analytics/react"

const poppins = Roboto({ weight:"400",subsets:["latin"] });

export const metadata: Metadata = {
  title: "LooQuiz: Quiz App",
  description: "Quiz App",
  icons: {
    icon: '/favicon.png', // /public path
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      
      <body className={poppins.className}>
        {children}
        </body>
    </html>
  );
}

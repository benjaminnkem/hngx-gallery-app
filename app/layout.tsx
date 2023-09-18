import Navbar from "@/components/Layout/Navbar";
import "./globals.css";
import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import Provider from "@/lib/utils/providers";

const dmSans = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Gallery Showcase - Benjamin Nkem X HNGX",
  description: "A gallery showcase application",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={dmSans.className}>
        <Provider>
          <Navbar />
          {children}
        </Provider>
      </body>
    </html>
  );
}

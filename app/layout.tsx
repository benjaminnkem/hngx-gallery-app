import "./globals.css";
import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import Provider from "@/lib/utils/providers";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import Providers from "@/utils/providers/providers";
config.autoAddCss = false;

const dmSans = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Gallery Showcase - Benjamin Nkem X HNGX",
  description: "A gallery showcase application",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={dmSans.className}>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}

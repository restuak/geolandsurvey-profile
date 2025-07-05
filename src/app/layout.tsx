import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import "@mantine/core/styles.css";

import {
  ColorSchemeScript,
  MantineProvider,
  mantineHtmlProps,
} from "@mantine/core";


const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal",  "italic"] ,
  
});

export const metadata: Metadata = {
  title: "Geoland Survey Lab's Website",
  description: "Geoland Survey Lab's Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" {...mantineHtmlProps}>
      <body className={`${poppins.variable} antialiased`}>
        {" "}
        <MantineProvider>{children}</MantineProvider>
      </body>
    </html>
  );
}

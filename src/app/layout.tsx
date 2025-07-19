import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import "@mantine/core/styles.css";
import SnackbarProvider from "@/providers/snackbarProvider";

import { MantineProvider, mantineHtmlProps } from "@mantine/core";
import ScrollUp from "@/components/scrollup";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
});
const inter = Inter({
  subsets: ["latin"],
  display: "swap", 
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
    <html lang="en" className={inter.className} {...mantineHtmlProps}>
      <body className={`${poppins.variable} antialiased`}>
        {" "}
        <SnackbarProvider>
          <MantineProvider>{children}</MantineProvider>
        </SnackbarProvider>
        <ScrollUp />
      </body>
    </html>
  );
}

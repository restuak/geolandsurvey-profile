import ScrollUp from "@/components/scrollup";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "OUR SERVICE - Geoland Survey Lab's Website",
  description: "Geoland Survey Lab's Website",
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="">
        {" "}
        {children}
        <ScrollUp />
      </body>
    </html>
  );
}

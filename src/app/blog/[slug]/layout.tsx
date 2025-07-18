import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-background text-foreground">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

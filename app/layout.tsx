import type { Metadata } from "next";
import { Epilogue } from "next/font/google";
import "./globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NavBar from "./_components/navbar/navbar";
import Footer from "./_components/footer/footer";
import { Toaster } from "@/app/_components/ui/toaster";

const epilogue = Epilogue({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "LareanTech - Sua Empresa de TI.",
  description: "Prontos a solucionar os seus problemas tecnológicos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${epilogue.className} flex flex-col relative`}>
        <div>
          <NavBar />
        </div>
        <div>{children}</div>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}

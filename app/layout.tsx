import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NavBar from "./_components/navbar/navbar";
import Footer from "./_components/footer/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "LareanTech - Sua Empresa de TI",
  description: "Prontos a solucionar os seus problemas tecnológicos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        {/* Google tag (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=AW-16651903030"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-16651903030');
            `,
          }}
        />
      </head>
      <body className={`${inter.className} flex flex-col relative`}>
        <div>
          <NavBar />
        </div>
        <div>{children}</div>
        <Footer />
      </body>
    </html>
  );
}

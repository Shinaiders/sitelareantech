import type { Metadata } from "next";
import { Epilogue } from "next/font/google";
import "./globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NavBar from "./_components/navbar/navbar";
import Footer from "./_components/footer/footer";

const epilogue = Epilogue({ subsets: ["latin"] });

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
<<<<<<< HEAD
    <html lang="pt-BR">
      <head>
        <meta
          name="google-adsense-platform-account"
          content="ca-host-pub-4369739311457036"
        />
        {/* Google tag (gtag.js) */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-16651903030"
        ></script>
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
=======
    <html lang="pt-BR">      
      <head>      
        <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-MS555QG7');</script>
                  
>>>>>>> f31bd20c2117e12f0c83b9ad8a31351e57c850b7
      </head>
      <body className={`${epilogue.className} flex flex-col relative`}>
        <div>
          <NavBar />
        </div>
        <div>{children}</div>
        <Footer />
      </body>
    </html>
  );
}

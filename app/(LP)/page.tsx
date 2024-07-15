import BodyPage from "@/components/body/page";
import FooterPage from "@/components/footer/page";
import HeaderPage from "@/components/header/page";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      
      <HeaderPage />
      <BodyPage />
      <FooterPage />
    </main>
  );
}

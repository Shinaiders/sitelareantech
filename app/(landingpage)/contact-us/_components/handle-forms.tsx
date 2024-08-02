"use client";

import { Button } from "@/app/_components/ui/button";
import { useEffect, useState } from "react";
import OpenTicket from "./open-ticket";
import ToHire from "./to-hire";
import Image from "next/image";
import { Epilogue } from "next/font/google";
const epilogue = Epilogue({ subsets: ["latin"] });

const HandleSelectForm = ({
  isOpenTicket,
  setIsOpenTicket,
}: {
  isOpenTicket: boolean;
  setIsOpenTicket: (isOpenTicket: boolean) => void;
}) => {
  return (
    <Button
      onClick={() => setIsOpenTicket(!isOpenTicket)}
      className="w-60 bg-brand hover:bg-brand/80 shadow-xl shadow-black/20 mt-20"
    >
      {isOpenTicket ? "Contratar serviço" : "Abrir chamado"}
    </Button>
  );
};

export default function HandleForms() {
  const [isOpenTicket, setIsOpenTicket] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const checkIsMobile = () => {
      const isMobile = window.innerWidth < 768;
      setIsMobile(isMobile);
    };

    checkIsMobile();

    window.addEventListener("resize", checkIsMobile);

    return () => {
      window.removeEventListener("resize", checkIsMobile);
    };
  }, []);

  if (isMobile) {
    return (
      <div
        className={`flex flex-col items-center justify-center gap-4 py-10 ${epilogue.className}`}
      >
        {isOpenTicket ? <OpenTicket /> : <ToHire />}
        <HandleSelectForm
          isOpenTicket={isOpenTicket}
          setIsOpenTicket={setIsOpenTicket}
        />
      </div>
    );
  }

  return (
    <div
      className={`flex flex-col items-center justify-center gap-4 py-10 ${epilogue.className}`}
    >
      <div className="flex items-center justify-around w-full h-full ">
        <span
          className={`hidden md:flex flex-col items-center justify-center absolute bg-[#0f1120] md:w-[30rem] md:h-[26rem] 2xl:w-[600px] 2xl:h-[500px] rounded-xl shadow-black/20 shadow-xl 2xl:top-40 transition-transform duration-500 ${
            isOpenTicket
              ? "md:translate-x-[calc(300px)] 2xl:translate-x-[calc(400px)]"
              : "md:-translate-x-[300px] 2xl:-translate-x-[400px]"
          }`}
        >
          <div className="flex flex-col items-center text-white text-center">
            <Image
              src="/reverse-logo.svg"
              alt="open-ticket"
              width={100}
              height={100}
            />
            <h1 className="font-bold">
              LareanTech - Sua empresa de tecnologia
            </h1>
            <p className="text-xs 2xl:text-sm font-medium xl:max-w-[500px] 2xl:max-w-[600px] mt-5">
              Bem-vindo(a) à LareanTech! Estamos encantados em tê-lo(a) conosco.
              Por favor, preencha o formulário ao lado para que possamos
              entender melhor suas necessidades e oferecer soluções
              personalizadas.
            </p>
          </div>
          <HandleSelectForm
            isOpenTicket={isOpenTicket}
            setIsOpenTicket={setIsOpenTicket}
          />
        </span>
        <OpenTicket />
        <ToHire />
      </div>
    </div>
  );
}

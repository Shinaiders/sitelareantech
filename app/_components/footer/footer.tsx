"use client";

import { ArrowRightIcon, Facebook, Instagram, Linkedin } from "lucide-react";
import { TypebotComponents } from "../typebot/typebot";
import { Button } from "../ui/button";
import Image from "next/image";
import Link from "next/link";
import ChatwootWidget from "../chatwoot/chatwootwidget";

interface ISections {
  title: string;
  items: string[];
}

const sectionsList: ISections[] = [
  {
    title: "Produto",
    items: [

      "Banco de dados de funcionários",
      "Folha de pagamento",
      "Ausências",
      "Rastreamento de tempo",
      "Planejador de turnos",
    ],
  },
  {
    title: "Informação",
    items: ["Perguntas frequentes", "Suporte"],
  },
  {
    title: "Empresa",
    items: ["Sobre nós", "Projetos", "Contate-nos"],
  },
];

export default function Footer() {
  return (
    <footer className="w-full flex flex-col gap-20">
      <div className="flex flex-wrap xl:flex-row justify-around items-center xl:items-start gap-20 xl:gap-0 w-full h-full">
        {sectionsList.map((section, index) => (
          <section className="flex flex-col gap-3" key={index}>
            <h1 className="text-md font-medium">{section.title}</h1>
            <ul className="text-gray-700 font-semibold">
              {section.items.map((item, index) => (
                <li key={index}>
                  <Link href="">{item}</Link>
                </li>
              ))}
            </ul>
          </section>
        ))}

        <div className="w-80 p-5 bg-[#979797]/10 rounded-2xl flex flex-col gap-5 items-center shadow-xl shadow-black/20">
          <form className="flex flex-col w-full  gap-6">
            <label className="text-gray-700 text-xl font-medium">
              Subscribe
            </label>
            <div className="relative">
              <input
                type="text"
                className="w-full h-10 rounded-full px-10 font-normal outline-none"
                placeholder="Email address"
              />
              <Button className="absolute right-1 top-0 p-2 rounded-full w-10 h-10 bg-brand hover:bg-brand/80">
                <ArrowRightIcon className="w-5 h-5 text-white" />
              </Button>
            </div>
          </form>
          <p className="text-sm text-gray-700 max-w-60 ">
            Olá, somos a LareanTech. Nosso objetivo é traduzir os efeitos
            positivos da revolução na forma como as empresas se relacionam com
            seus clientes e sua equipe.
          </p>
        </div>
      </div>
      <hr className="m-auto w-[90%]" />
      <div className="flex flex-wrap-reverse justify-around items-center">



        <div className="flex flex-col items-center gap-1 text-black-600 pt-1">
          <Image src="/logo.svg" alt="LareanTech" width={100} height={100} />

          <div className="flex flex-col items-start">
            <h2 className="font-semibold text-1xl ">LareanTech</h2>
            <p className="text-[0.50rem] text-gray-700">Soluções Web</p>
          </div>

        </div>




        <ul className="flex items-center gap-5">

          <li>
            <Link href="">Terms</Link>
          </li>
          <li>
            <Link href="">Privacy</Link>
          </li>
          <li>
            <Link href="">Cookies</Link>
          </li>

        </ul>



        <div className="flex items-center gap-5">
          <Link
            href=""
            className="border-2 border-primary/80 w-10 h-10 rounded-full flex justify-center items-center"
          >
            <Linkedin size={20} />
          </Link>
          <Link
            href=""
            className="border-2 border-primary/80 w-10 h-10 rounded-full flex justify-center items-center"
          >
            <Instagram size={20} />
          </Link>
        </div>
      </div>
      <ChatwootWidget />
      {/* <TypebotComponents /> */}
    </footer>
  );
}

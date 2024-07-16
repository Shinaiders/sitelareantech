import { Button } from "@/app/_components/ui/button";
import Image from "next/image";
import Link from "next/link";
import ServiceItems, { IServiceItemsProps } from "./service-items";
import { FileJson, HardDrive, ScreenShare } from "lucide-react";

const service: IServiceItemsProps[] = [
  {
    title: "Front-end",
    description:
      "Nossos desenvolvedores front-end entendem o delicado equilíbrio entre estética e funcionalidade.",
    Icon: ScreenShare,
  },
  {
    title: "Back-end",
    description:
      "Nossos desenvolvedores back-end são os arquitetos da eficiência e da segurança. Eles projetam e constroem os bancos de dados e APIs.",
    Icon: FileJson,
  },
  {
    title: "Analista de dados",
    description:
      "Nossa equipe de análise de dados é uma mistura de matemáticos, estatísticos e entusiastas de tecnologia.",
    Icon: HardDrive,
  },
];
export default function HomeComponent() {
  return (
    <main className="w-full h-full xl:px-20 px-2 space-y-40 font-epilogue">
      <header className="relative flex flex-col xl:flex-row items-center xl:justify-start justify-center h-full w-full">
        <div className="flex flex-col justify-center w-full xl:h-[85%] h-full px-10 bg-gradient-to-r from-black/40 to-black/50 xl:bg-gradient-to-r xl:from-white xl:via-white/50 xl:to-transparent z-0 relative rounded-2xl xl:rounded-none">
          <div className="flex flex-col gap-2">
            <p className="text-yellow-300  font-bold font-mono ">
              Serviços tecnológicos
            </p>
            <h1 className="text-5xl text-white xl:text-gray-700 leading-[70px] font-medium xl:font-thin max-w-[300px]">
              LareanTech: Inovar, Criar, Elevar
            </h1>
            <p className="text-white xl:text-gray-700 font-500">
              Desbloqueando possibilidades, um código de cada vez
            </p>
            <Button
              asChild
              className="w-40 h-10 rounded-full bg-green-600 hover:bg-green-600/80   text-white mt-10"
            >
              <Link href={""}>Veja os projetos</Link>
            </Button>
          </div>
        </div>
        <div className="xl:w-[800px] xl:h-[500px] xl:left-96  xl:absolute z-[-1]">
          <Image
            src={"./elements/header-home-bg.svg"}
            alt={"logo"}
            style={{
              objectFit: "cover",
            }}
            fill
            className="rounded-2xl"
          />
        </div>
      </header>
      <section className="flex flex-col items-center w-full gap-20">
        <h1 className="text-3xl text-gray-700 max-w-[800px] text-center">
          Contamos com equipes multidisciplinares para atender qualquer
          <span className="text-brand"> desafios.</span>
        </h1>
        <div className="flex flex-col lg:flex-row justify-around items-start w-[90%]  bg-white rounded-3xl shadow-lg shadow-black/20 p-5">
          {service.map((item, index) => (
            <ServiceItems
              key={index}
              Icon={item.Icon}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </section>
      <section className="flex flex-col items-center w-full gap-20">
        <div className="flex gap-4">
          <Image
            src={"./elements/blue-vetor.svg"}
            alt={"logo"}
            width={100}
            height={100}
          />
          <h1 className="text-3xl text-gray-700 max-w-[700px] ">
            Capacitando sua visão digital: nossos serviços técnicos abrangentes.
          </h1>
        </div>
      </section>
    </main>
  );
}
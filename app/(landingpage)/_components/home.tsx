import { Button } from "@/app/_components/ui/button";
import Image from "next/image";
import Link from "next/link";
import ServiceItems, { IServiceItemsProps } from "./service-items";
import {
  FileJson,
  GitFork,
  HardDrive,
  Landmark,
  Laptop,
  Layers2,
  MenuIcon,
  PenTool,
  Route,
  Router,
  ScreenShare,
  SlidersVertical,
  Smartphone,
} from "lucide-react";

const service: IServiceItemsProps[] = [
  {
    title: "Front-end",
    description:
      "Nossos desenvolvedores front-end entendem o delicado equilíbrio entre estética e funcionalidade.",
    Icon: ScreenShare,
    colorIcon: "text-brand",
  },
  {
    title: "Back-end",
    description:
      "Nossos desenvolvedores back-end são os arquitetos da eficiência e da segurança. Eles projetam e constroem os bancos de dados e APIs.",
    Icon: FileJson,
    colorIcon: "text-brand",
  },
  {
    title: "Analista de dados",
    description:
      "Nossa equipe de análise de dados é uma mistura de matemáticos, estatísticos e entusiastas de tecnologia.",
    Icon: HardDrive,
    colorIcon: "text-brand",
  },
  
];

const servicesWithCards: IServiceItemsProps[] = [
  {
    Icon: FileJson,
    colorIcon: "text-green-400",
    title: "Front-end",
    description:
      " Criar a interface visual e a experiência do usuário em sites e aplicativos. Usando tecnologias como HTML, CSS e JavaScript, ele transforma designs em páginas funcionais e interativas",
    isCard: true,
  },
  {
    Icon: SlidersVertical,
    title: "Back-end",
    colorIcon: "text-violet-600",
    description:
      " Cria e gerencia a infraestrutura que processa e armazena dados, garantindo que a aplicação funcione corretamente e de forma segura,  lida com as operações e APIs que alimentam a interface do usuário",
    isCard: true,
  },
  {
    Icon: GitFork,
    colorIcon: "text-amber-400",
    title: "IA e ciência de dados",
    description:
      "Use tecnologias líderes de IA, aprendizado de máquina e engenharia de dados para liberar valor comercial.",
    isCard: true,
  },
  {
    Icon: PenTool,
    colorIcon: "text-red-400",
    title: "UX/UI Design",
    description: 
      "Crie designs lindos, perfeitos e fáceis de usar que encantam seus usuários finais",
    isCard: true,
  },
  {
    Icon: Smartphone,
    colorIcon: "text-violet-600",
    title: "Desenvolvimento Mobile App ",
    description:
      "Crie aplicativos móveis de alto desempenho, escalonáveis ​​e seguros para dispositivos iOS e Android.",
    isCard: true,
  },
  {
    Icon: Layers2,
    colorIcon: "text-pink-400",
    title: "Plataforma e Infraestrutura",
    description:
      "Garanta que os aplicativos sejam seguros, tolerantes a falhas e altamente disponíveis com nossos engenheiros de DevOps e Segurança.",
    isCard: true,
  },

  {
    Icon: Laptop,
    colorIcon: "text-yellow-400",
    title: "Marketing Digital",
    description:
      "Focada na criação de conteúdo relevante e campanhas direcionadas para atrair e engajar clientes. Analisa dados para entender o comportamento do público e melhorar estratégias",
    isCard: true,
  },

  {
    Icon: Landmark,
    colorIcon: "text-gray-400",
    title: "Juridico",
    description:
      "Oferecemos consultoria jurídica especializada para empresas e startups do setor tecnológico. Nossa equipe entende os desafios legais específicos dessa área, como proteção de dados, propriedade intelectual, compliance digital e contratos tecnológicos."
  },
];
export default function HomeComponent() {
  return (
    <main className="w-full h-full xl:px-20 px-2 space-y-40 font-epilogue mb-40">
      <header className="relative flex flex-col xl:flex-row items-center xl:justify-start justify-center h-screen w-full">
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
        <div className="xl:w-[800px] xl:h-[500px] xl:left-96 2xl:left-[600px]  xl:absolute z-[-1]">
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
        <div className="flex flex-col lg:flex-row justify-around items-start w-[90%]  bg-white rounded-3xl shadow-lg shadow-black/20 p-5 gap-10 xl:gap-0">
          {service.map((item, index) => (
            <ServiceItems
              key={index}
              Icon={item.Icon}
              colorIcon={item.colorIcon}
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
          <h1 className="text-3xl text-gray-700 max-w-[700px]">
            Capacitando sua visão digital: nossos serviços técnicos abrangentes.
          </h1>
        </div>
        <div className="flex flex-wrap justify-around gap-10 relative w-full h-full">
          <div className=" w-full h-full">
            <Image
              src={"./elements/green-vetor.svg"}
              alt={"logo"}
              width={100}
              height={100}
              className="absolute right-[340px] bottom-72 2xl:right-[380px] 2xl:w-[200px] hidden xl:block"
            />
            <Image
              src={"./elements/blue-vetor.svg"}
              alt={"logo"}
              width={100}
              height={100}
              className="absolute left-[340px] bottom-20 2xl:left-[380px] 2xl:w-[200px] hidden xl:block"
            />
          </div>
          {servicesWithCards.map((item, index) => (
            <ServiceItems
              key={index}
              Icon={item.Icon}
              colorIcon={item.colorIcon}
              title={item.title}
              description={item.description}
              isCard={true}
            />
          ))}
        </div>
      </section>
    </main>
  );
}

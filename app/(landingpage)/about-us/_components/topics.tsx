import Image from "next/image";
import React from "react";

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/app/_components/ui/avatar";

type ElementsProps = {
  Element: React.FC;
};

export const AboutUsTopics: React.FC<ElementsProps> = ({ Element }) => {
  return (
    <main className="flex items-center justify-between w-full">
      <Element />
      <div className="flex flex-col items-center justify-center h-full">
        <div className="flex items-center justify-end w-full">
          <div className="flex flex-col items-start gap-5 w-full">
            <h1 className="text-xl font-bold text-yellow-300 uppercase">
              About Us
            </h1>
            <p className="text-primary/80 text-lg font-bold max-w-[800px]">
              Há dois anos, colaboramos com nossas soluções web, para expandir
              rapidamente suas equipes e enfrentar os obstáculos de seus
              negócios. Na LareanTech, somos movidos pela certeza de que a
              tecnologia pode transformar os negócios e elevar o seu potencial.
              Fundada em 2022, temos a missão de capacitar as organizações com
              soluções inovadoras que impulsionam o crescimento, a eficiência e
              o sucesso.
            </p>
          </div>

          <div className="relative">
            <Image
              src="/elements/green-vetor.svg"
              width={100}
              height={100}
              alt="vetor"
              className="absolute left-0 top-5 z-[2]"
            />
            <Image
              src="/elements/intersect.svg"
              width={300}
              height={300}
              alt="vetor"
              className="z-[1]"
            />
            <Image
              src="/elements/blue-vetor.svg"
              width={300}
              height={300}
              alt="vetor"
              className="absolute right-0 top-20 z-[2]"
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export const OurStoryTopics: React.FC<ElementsProps> = ({ Element }) => {
  return (
    <main className="flex items-center justify-between w-full">
      <Element />
      <div className="flex flex-col items-center justify-center h-full">
        <div className="flex items-center justify-end w-full">
          <div className="flex flex-col items-start gap-5 w-full">
            <h1 className="text-xl font-bold text-yellow-300 uppercase">
              our story
            </h1>
            <p className="text-primary/80 text-lg font-bold max-w-[800px]">
              LareanTech, inicialmente nomeada como Larean, teve seu começo com
              Isabella Barreiros e Lucas Santana, que foram os primeiros membros
              da atual LareanTech. Juntos, ambos nomearam a empresa em homenagem
              às suas filhas. Ainda sem contrato, investiram em uma boa equipe,
              tendo então a chegada do desenvolvedor, Otávio Augusto. Cada um
              optou por se especializar nas áreas de suas atuações. Durante este
              período, a até então Larean passou por um breve recesso,
              retornando então com sua equipe sólida e mais especializada em
              suas áreas. Agora, com um novo integrante, Renan Marques, a equipe
              de desenvolvedores ganhou mais um membro para agregar valor e
              conhecimento. Assim, começaram a receber seus primeiros clientes e
              contratos, onde tivemos nosso primeiro pontapé inicial.
            </p>
          </div>
          <div className="relative">
            <Image
              src="/elements/blue-vetor.svg"
              width={100}
              height={100}
              alt="vetor"
              className="absolute left-0 top-5 z-[2]"
            />
            <Image
              src="/elements/intersect-secondary.svg"
              width={300}
              height={300}
              alt="vetor"
              className="z-[1]"
            />
            <Image
              src="/elements/green-vetor.svg"
              width={300}
              height={300}
              alt="vetor"
              className="absolute right-0 top-20 z-[2]"
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export const TeamsTopics: React.FC<ElementsProps> = ({ Element }) => {
  return (
    <main className="flex gap-10 w-full">
      <Element />
      <div className="flex flex-col items-center justify-center gap-10 w-full mt-20">
        <h1 className="text-xl font-bold text-yellow-300 uppercase">Team</h1>
        <div className="flex items-center justify-center relative mt-20">
          <Avatar className="w-40 h-40 absolute -left-[250px]">
            <AvatarImage
              src="https://github.com/shadcn.png"
              className="w-40 h-40"
            />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <Avatar className="w-40 h-40 absolute -left-[140px]">
            <AvatarImage
              src="https://github.com/shadcn.png"
              className="w-40 h-40"
            />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <Avatar className="w-40 h-40 absolute -left-[40px]">
            <AvatarImage
              src="https://github.com/shadcn.png"
              className="w-40 h-40"
            />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <Avatar className="w-40 h-40 absolute left-[70px]">
            <AvatarImage
              src="https://github.com/shadcn.png"
              className="w-40 h-40"
            />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </main>
  );
};

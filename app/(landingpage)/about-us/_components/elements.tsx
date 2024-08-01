import Image from "next/image";
import React, { ReactNode } from "react";

const FirstElement: React.FC = () => {
  return (
    <aside className="flex flex-col gap-5">
      <Image
        src="/elements/blue-vetor.svg"
        width={100}
        height={100}
        alt="vetor"
      />
      <div className="w-[5px] h-[400px] bg-gradient-to-t from-green-100 via-green-200 to-blue-300 ml-5 rounded-md" />
    </aside>
  );
};

const SecondElement: React.FC = () => {
  return (
    <aside className="flex flex-col gap-5">
      <Image
        src="/elements/green-vetor.svg"
        width={100}
        height={100}
        alt="vetor"
      />
      <div className="w-[5px] h-[400px] bg-gradient-to-t from-blue-100 via-blue-200 to-green-300 ml-5 rounded-md" />
    </aside>
  );
};

export const Elements: React.FC[] = [FirstElement, SecondElement];

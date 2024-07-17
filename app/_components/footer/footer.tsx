"use client";

import { ArrowRightIcon } from "lucide-react";
import { TypebotComponents } from "../typebot/typebot";
import { Button } from "../ui/button";

interface ISections {
  title: string;
  items: string[];
}

const sectionsList: ISections[] = [
  {
    title: "Product",
    items: [
      "Employee database",
      "Payroll",
      "Absences",
      "Time trackting",
      "Shift planner",
    ],
  },
  {
    title: "Information",
    items: ["FAQ", "Support"],
  },
  {
    title: "Company",
    items: ["About-us", "Projects", "Contact-us"],
  },
];

export default function Footer() {
  return (
    <footer className="h-40 w-full">
      <div className="flex flex-wrap xl:flex-row justify-around items-center xl:items-start gap-20 xl:gap-0 w-full h-full">
        {sectionsList.map((section, index) => (
          <section className="flex flex-col gap-3" key={index}>
            <h1 className="text-md font-medium">{section.title}</h1>
            <ul className="text-gray-700 font-semibold">
              {section.items.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </section>
        ))}

        <div className="w-80 p-5 bg-[#979797]/10 rounded-2xl flex flex-col gap-5 items-center">
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

      <TypebotComponents />
    </footer>
  );
}

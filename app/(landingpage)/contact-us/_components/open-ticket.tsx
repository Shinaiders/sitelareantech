"use client";
import { Button } from "@/app/_components/ui/button";
import { Epilogue } from "next/font/google";
const epilogue = Epilogue({ subsets: ["latin"] });

export default function OpenTicket() {
  return (
    <div>
      <form className={`flex flex-col gap-5 ${epilogue.className}`}>
        <div className="flex flex-col">
          <h1 className="text-2xl text-brand/80 font-bold">Abrir chamado</h1>
          <p className="text-sm text-primary/80 font-medium">
            Preencha os campos abaixo para continuar.
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <input
            type="email"
            placeholder="Email"
            className="border-0 px-5 h-11 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 rounded-md w-96"
          />
          <div className="flex flex-col gap-[2px]">
            <label className="text-sm text-primary/80 font-medium">
              Descrição do serviço.
            </label>
            <textarea
              className="min-h-40 max-h-40 border-0 p-5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 rounded-md"
              placeholder="Mensagem"
            ></textarea>
          </div>
        </div>

        <Button className="w-full bg-brand hover:bg-brand/80 shadow-xl shadow-black/20">
          Enviar
        </Button>
      </form>
    </div>
  );
}

"use client";

import { Button } from "@/app/_components/ui/button";
import { Epilogue } from "next/font/google";
import { useState } from "react";
import createTask from "../_actions/create-task";
import { useToast } from "@/app/_components/ui/use-toast";
const epilogue = Epilogue({ subsets: ["latin"] });

export default function ToHire() {
  const [email, setEmail] = useState<string>("");
  const [task, setTask] = useState<string>("");

  const { toast } = useToast();
  const handleCreateTask = async () => {
    const data = {
      email,
      task,
      tag: "Novo cliente",
    };
    const response = await createTask(data);
    response.json().then((data) => {
      setEmail("");
      setTask("");
      toast({
        title: "Seu email foi enviado!",
        description:
          "Fique atento para a resposta. Nossa equipe irá entrar em contato com você em breve.",
      });
    });
  };

  return (
    <div>
      <form className={`flex flex-col gap-5 ${epilogue.className}`}>
        <div className="flex flex-col">
          <h1 className="text-2xl text-brand/80 font-bold">
            Contratar Serviço.
          </h1>
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

        <Button
          onClick={handleCreateTask}
          type="button"
          className="w-full bg-brand hover:bg-brand/80 shadow-xl shadow-black/20"
        >
          Enviar
        </Button>
      </form>
    </div>
  );
}

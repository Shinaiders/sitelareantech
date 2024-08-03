"use client";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/app/_components/ui/popover";
import { Button } from "../ui/button";
import ContactItems from "./contact-items";
import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import { useState } from "react";
import { useToast } from "../ui/use-toast";
import createTask from "@/app/(landingpage)/contact-us/_actions/create-task";

export default function Contactusbutton() {
  const [email, setEmail] = useState<string>("");
  const [task, setTask] = useState<string>("");

  const { toast } = useToast();
  const handleCreateTask = async () => {
    const data = {
      email,
      task,
      tag: "Nova Solicitação",
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
    <Popover>
      <PopoverTrigger asChild>
        <Button
          className="bg-brand hover:bg-brand/80 text-brand-foreground rounded-full shadow-md shadow-black/20"
          size="sm"
        >
          FALE CONOSCO
        </Button>
      </PopoverTrigger>
      <PopoverContent className="flex flex-col gap-4">
        <ContactItems title="Abrir Chamado">
          <DialogHeader>
            <DialogTitle>Abrir Um Novo Chamado.</DialogTitle>
            <DialogDescription>
              Preencha os campos abaixo para continuar.
            </DialogDescription>
          </DialogHeader>

          <input
            type="email"
            placeholder="Email"
            className=" w-full rounded-md border-0 px-5 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label className="text-xs">Descrição do chamdo.</label>
          <textarea
            className="min-h-40 max-h-40 w-full rounded-md border-0 px-5 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            placeholder="Mensagem"
            value={task}
            onChange={(e) => setTask(e.target.value)}
          ></textarea>
          <Button
            onClick={handleCreateTask}
            type="button"
            className="bg-brand hover:bg-brand/80 text-brand-foreground shadow-md shadow-black/20"
          >
            Enviar
          </Button>
        </ContactItems>
        <ContactItems title="Contratar Serviços">
          <DialogHeader>
            <DialogTitle>Contratar Serviço.</DialogTitle>
            <DialogDescription>
              Preencha os campos abaixo para continuar.
            </DialogDescription>
          </DialogHeader>

          <input
            type="email"
            placeholder="Email"
            className="w-full rounded-md border-0 px-5 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label className="text-xs">Descrição do serviço.</label>

          <textarea
            className="min-h-40 max-h-40 w-full rounded-md border-0 px-5 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            placeholder="Mensagem"
            value={task}
            onChange={(e) => setTask(e.target.value)}
          ></textarea>
          <Button
            onClick={handleCreateTask}
            type="button"
            className="bg-brand hover:bg-brand/80 text-brand-foreground  shadow-md shadow-black/20"
          >
            Enviar
          </Button>
        </ContactItems>
      </PopoverContent>
    </Popover>
  );
}

"use client";

import { Button } from "@/app/_components/ui/button";
import { useState } from "react";
import OpenTicket from "./open-ticket";
import ToHire from "./to-hire";

const HandleSelectForm = ({
  title,
  isOpenTicket,
  setIsOpenTicket,
}: {
  title: string;
  isOpenTicket: boolean;
  setIsOpenTicket: (isOpenTicket: boolean) => void;
}) => {
  return (
    <Button onClick={() => setIsOpenTicket(!isOpenTicket)}>{title}</Button>
  );
};

export default function HandleForms() {
  const [isOpenTicket, setIsOpenTicket] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center gap-4 py-10">
      <div className="flex items-center justify-around w-full h-full ">
        <OpenTicket /> <ToHire />
      </div>
      <HandleSelectForm
        title="Formulário de Contato"
        isOpenTicket={isOpenTicket}
        setIsOpenTicket={setIsOpenTicket}
      />
    </div>
  );
}

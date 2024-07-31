"use client"

import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/app/_components/ui/popover"
import { Button } from "../ui/button"
import ContactItems from "./contact-items"
import { DialogDescription, DialogHeader, DialogTitle } from "../ui/dialog"

export default function Contactusbutton() {
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
                <ContactItems title="Abrir Chamado"><DialogHeader>
                    <DialogTitle>Abrir Um Novo Chamado.</DialogTitle>
                    <DialogDescription>
                        Preencha os campos abaixo para continuar.
                    </DialogDescription>

                    <input type="email" placeholder="Email" className="mb-20 w-full rounded-md border-0 px-5 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400" />
                    <label className="mt-20 text-xs">Descrição do chamdo.</label>
                    <textarea className="max-h-24 w-full rounded-md border-0 px-5 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="Mensagem"></textarea>

                </DialogHeader></ContactItems>
                <ContactItems title="Contratar Serviços"><DialogHeader>
                    <DialogTitle>Contratar Serviço.</DialogTitle>
                    <DialogDescription>
                        Preencha os campos abaixo para continuar.
                    </DialogDescription>

                    <input type="email" placeholder="Email" className="mb-20 w-full rounded-md border-0 px-5 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400" />
                    <label className="mt-20 text-xs">Descrição do serviço.</label>

                    <textarea className="max-h-24 w-full rounded-md border-0 px-5 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="Mensagem"></textarea>
                </DialogHeader></ContactItems>
            </PopoverContent>
        </Popover>

    )
}

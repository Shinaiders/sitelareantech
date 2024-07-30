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
                    <DialogTitle>Are you absolutely sure?</DialogTitle>
                    <DialogDescription>
                        This action cannot be undone. This will permanently delete your account
                        and remove your data from our servers.
                    </DialogDescription>
                </DialogHeader></ContactItems>
                <ContactItems title="Contratar Serviços"><DialogHeader>
                    <DialogTitle>Are you absolutely sure?</DialogTitle>
                    <DialogDescription>
                        This action cannot be undone. This will permanently delete your account
                        and remove your data from our servers.
                    </DialogDescription>
                </DialogHeader></ContactItems>
            </PopoverContent>
        </Popover>

    )
}

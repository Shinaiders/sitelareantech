"use client";

import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/app/_components/ui/dialog";
import { ReactNode } from "react";
import { Button } from "../ui/button";

export default function ContactItems({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-brand hover:bg-brand/80"> {title} </Button>
      </DialogTrigger>
      <DialogContent>{children}</DialogContent>
    </Dialog>
  );
}

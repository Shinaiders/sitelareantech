"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import NavLinks from "./nav-links";
import { Button } from "../ui/button";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/app/_components/ui/sheet";
import { MenuIcon } from "lucide-react";
import Contactusbutton from "./contactus-button";

export default function NavBar() {
  const [scrollingDown, setScrollingDown] = useState(false);
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [menu, setMenu] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setScrollingDown(scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const checkIsMobile = () => {
      const isMobile = window.innerWidth < 768;
      setIsMobile(isMobile);
    };

    checkIsMobile();

    window.addEventListener("resize", checkIsMobile);

    return () => {
      window.removeEventListener("resize", checkIsMobile);
    };
  }, []);

  const toggleMenu = () => {
    setMenu(!menu);
  };

  if (isMobile) {
    return (
      <nav className="flex justify-between items-center bg-white w-full h-20 px-5">
        <div>
          <Image src="/logo.svg" alt="Logo" width={100} height={100} />
        </div>

        <>
          <Sheet>
            <SheetTrigger asChild>
              <Button
                asChild
                size="icon"
                className="bg-transparent hover:bg-transparent p-0"
              >
                <MenuIcon color="#000" size={20} />
              </Button>
            </SheetTrigger>
            <SheetContent className=" flex flex-col items-center gap-10">
              <div className="mt-20 w-full">
                <NavLinks isMobile={isMobile} />
              </div>
              <SheetFooter className="flex justify-center">
                <Contactusbutton />
              </SheetFooter>
            </SheetContent>
          </Sheet>
        </>
      </nav>
    );
  }
  return (
    <>
      <nav className="flex justify-around items-center bg-white w-full h-20">
        <div className="flex items-center">
          <Image src="/logo.svg" alt="Logo" width={100} height={100} />
          <div>
            <h1 className="italic font-black">Larean Tech</h1>
            <span className="flex text-[0.50rem] text-brand">Solucões Web</span>
          </div>
        </div>
        <div className="flex items-center bg-blue-100/50 py-2 px-6 rounded-full">
          <NavLinks isMobile={isMobile} />
        </div>
        <Contactusbutton />
      </nav>
    </>
  );
}

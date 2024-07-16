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
        <Image src="/logo.svg" alt="Logo" width={100} height={100} />

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
                <Button
                  asChild
                  className="w-[90%] bg-brand hover:bg-brand/80 text-brand-foreground rounded-full shadow-md shadow-black/20 absolute bottom-10 left-5"
                  size="sm"
                >
                  <Link href="/">FALE CONOSCO</Link>
                </Button>
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
        <Image src="/logo.svg" alt="Logo" width={100} height={100} />
        <div className="flex items-center bg-blue-100/50 py-2 px-6 rounded-full">
          <NavLinks isMobile={isMobile} />
        </div>
        <Button
          asChild
          className="bg-brand hover:bg-brand/80 text-brand-foreground rounded-full shadow-md shadow-black/20"
          size="sm"
        >
          <Link href="/">FALE CONOSCO</Link>
        </Button>
      </nav>
    </>
  );
}

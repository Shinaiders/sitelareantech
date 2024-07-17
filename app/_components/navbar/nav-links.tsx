"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";

export default function NavLinks({ isMobile }: { isMobile: boolean }) {
  const [currentRoute, setCurrentRoute] = useState<string>("");

  useEffect(() => {
    // Atualizar o estado da rota atual ao iniciar a página
    setCurrentRoute(window.location.pathname);
  }, []);

  const handleLinkClick = (path: string) => {
    setCurrentRoute(path); // Atualizar o estado ao clicar em um link
  };

  if (isMobile) {
    return (
      <ul className="flex flex-col gap-10">
        <li>
          <Button
            asChild
            className="w-full justify-start bg-transparent hover:bg-transparent p-0 text-black font-bold text-xl"
          >
            <Link
              href={"/"}
              onClick={() => handleLinkClick("/")}
              className={`nav-link ${
                currentRoute === "/"
                  ? "text-brand font-semibold"
                  : "text-black font-semibold"
              }`}
            >
              Home
            </Link>
          </Button>
        </li>
        <li>
          <Button
            asChild
            className="w-full justify-start bg-transparent hover:bg-transparent p-0 text-black font-bold text-xl"
          >
            <Link
              href={"/about-us"}
              onClick={() => handleLinkClick("/about-us")}
              className={`nav-link ${
                currentRoute === "/about-us"
                  ? "text-brand font-semibold"
                  : "text-black font-semibold"
              }`}
            >
              Sobre nós
            </Link>
          </Button>
        </li>
        <li>
          <Button
            asChild
            className="w-full justify-start bg-transparent hover:bg-transparent p-0 text-black font-bold text-xl"
          >
            <Link
              href={"/projects"}
              onClick={() => handleLinkClick("/projects")}
              className={`nav-link ${
                currentRoute === "/projects"
                  ? "text-brand font-semibold"
                  : "text-black font-semibold"
              }`}
            >
              Projetos
            </Link>
          </Button>
        </li>
        <li>
          <Button
            asChild
            className="w-full justify-start bg-transparent hover:bg-transparent p-0 text-black font-bold text-xl"
          >
            <Link
              href={"/contact-us"}
              onClick={() => handleLinkClick("/contact-us")}
              className={`nav-link ${
                currentRoute === "/contact-us"
                  ? "text-brand font-semibold"
                  : "text-black font-semibold"
              }`}
            >
              Contate-nos
            </Link>
          </Button>
        </li>
      </ul>
    );
  }
  return (
    <ul className="flex gap-20 items-center h-full">
      <li>
        <Link
          href={"/"}
          className={`nav-link ${
            currentRoute === "/"
              ? "text-brand font-semibold"
              : "text-black font-semibold"
          }
          `}
          onClick={() => handleLinkClick("/")}
        >
          Home
        </Link>
      </li>
      <li>
        <Link
          href={"/about-us"}
          className={`nav-link ${
            currentRoute === "/about-us"
              ? "text-brand font-semibold"
              : "text-black font-semibold"
          }`}
          onClick={() => handleLinkClick("/about-us")}
        >
          Sobre nós
        </Link>
      </li>
      <li>
        <Link
          href={"/projects"}
          className={`nav-link ${
            currentRoute === "/projects"
              ? "text-brand font-semibold"
              : "text-black font-semibold"
          }`}
          onClick={() => handleLinkClick("/projects")}
        >
          Projetos
        </Link>
      </li>
      <li>
        <Link
          href={"/contact-us"}
          className={`nav-link ${
            currentRoute === "/contact-us"
              ? "text-brand font-semibold"
              : "text-black font-semibold"
          }`}
          onClick={() => handleLinkClick("/contact-us")}
        >
          Contate-nos
        </Link>
      </li>
    </ul>
  );
}

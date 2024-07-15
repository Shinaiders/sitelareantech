"use client";

import Link from "next/link";
import { useState } from "react";

export default function NavLinks({ isMobile }: { isMobile: boolean }) {
  const [selected, setSelected] = useState<number>(0);
  const handleLinkClick = (index: number) => {
    setSelected(index);
  };
  return (
    <ul
      className={
        isMobile
          ? "flex flex-col gap-9 items-center h-full"
          : "flex gap-20 items-center h-full"
      }
    >
      <li>
        <Link
          href={"/"}
          className={`nav-link ${
            selected === 0
              ? "text-brand font-semibold"
              : "text-black font-semibold"
          }
          `}
          onClick={() => handleLinkClick(0)}
        >
          Home
        </Link>
      </li>
      <li>
        <Link
          href={"/"}
          className={`nav-link ${
            selected === 1
              ? "text-brand font-semibold"
              : "text-black font-semibold"
          }`}
          onClick={() => handleLinkClick(1)}
        >
          Sobre nós
        </Link>
      </li>
      <li>
        <Link
          href={"/"}
          className={`nav-link ${
            selected === 2
              ? "text-brand font-semibold"
              : "text-black font-semibold"
          }`}
          onClick={() => handleLinkClick(2)}
        >
          Projetos
        </Link>
      </li>
      <li>
        <Link
          href={"/"}
          className={`nav-link ${
            selected === 3
              ? "text-brand font-semibold"
              : "text-black font-semibold"
          }`}
          onClick={() => handleLinkClick(3)}
        >
          Contate-nos
        </Link>
      </li>
    </ul>
  );
}

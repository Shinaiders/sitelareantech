"use client";
import React, { useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";

export default function HeaderPage() {
  const [scrollingDown, setScrollingDown] = useState(false);
  const [mobile, setMobile] = useState<boolean>(false);
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
    // Função para verificar a largura da tela
    const checkIsMobile = () => {
      const isMobile = window.innerWidth < 768; // Defina o valor de corte conforme necessário
      setMobile(isMobile);
    };

    // Verifique inicialmente ao montar o componente
    checkIsMobile();

    // Adicione um ouvinte para atualizar quando a janela for redimensionada
    window.addEventListener("resize", checkIsMobile);

    // Limpe o ouvinte quando o componente for desmontado
    return () => {
      window.removeEventListener("resize", checkIsMobile);
    };
  }, []);

  const toggleMenu = () => {
    setMenu(!menu);
  };

  

  if (!mobile) {
    return (
      <header
        className={`fixed flex justify-between top-0 left-0 w-full bg-black/30 p-6 transition-transform h-36 duration-300 z-50 ${
          scrollingDown ? "-translate-y-full" : "translate-y-0"
        }`}
      >
        <img src="/logo.png" alt="Logo" className="w-32 cursor-pointer" />
        <nav className="flex gap-6 items-center">
          <ul className="flex gap-6 list-none">
            <li>Home</li>
            <li>Serviços</li>
            <li>Contato</li>
          </ul>
          <button className="inline-flex items-center justify-center px-8 py-4 font-sans font-semibold tracking-wide text-white bg-blue-500 rounded-lg h-[60px]">
            <strong>Entre em Contato</strong>
          </button>
        </nav>
      </header>
    );
  } else {
    // Adicione aqui a lógica para renderizar o cabeçalho quando 'mobile' for falso
    return (
      <div>
        <div className="fixed flex justify-end right-0 top-0 p-6">
          <div
            className="p-2 border-2 rounded bg-slate-900 cursor-pointer"
            onClick={toggleMenu}
          >
            <GiHamburgerMenu size={32} />
          </div>
        </div>
        {menu && (
          <div className="fixed top-0 right-0 h-full w-64 bg-gray-800 z-10 justify-center items-center">
            <div className="absolute top-4 right-4" onClick={toggleMenu}>
              {/* Ícone de fechar */}
              <IoCloseSharp size={32} />
            </div>
            <ul className="flex flex-col gap-4 p-4">
              <li className="text-white font-semibold">Home</li>
              <li className="text-white font-semibold">Serviços</li>
              <li className="text-white font-semibold">Contato</li>
              <button className="inline-flex items-center justify-center px-8 py-4 font-sans font-semibold tracking-wide text-white bg-blue-500 rounded-lg h-[60px]">
                <span>Entre em Contato</span>
              </button>
            </ul>
          </div>
        )}
      </div>
    );
  }
}

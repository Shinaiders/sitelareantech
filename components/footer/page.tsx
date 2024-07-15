"use client";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { TypebotComponents } from "../typebot/typebot";
const dados = {
  NomeEmpresa: "LareanTech Soluções de TI",
  CPNJ: "55.881.562/0001-83",
  WHATSAPP: "55 11 94204-2224",
};

export default function FooterPage() {
  const dataAtual = new Date();
  const anoAtual = dataAtual.getFullYear();
  return (
    <footer className="inset-x-0 bottom-0 bg-gray-800 text-white py-4 gap-2 -z-10 ">
      <div className="flex container mx-auto text-center gap-2 justify-between">
        <div>
          <h1 className="flex gap-2">
            <span>Nome:</span>
            {dados.NomeEmpresa}
          </h1>
          <h2 className="flex gap-2">
            <span>CNPJ:</span>
            {dados.CPNJ}
          </h2>
          <h3 className="flex gap-2">
            <span>Telefone:</span>
            {dados.WHATSAPP}
          </h3>
        </div>
        <div className="flex flex-col">
          <div className="flex flex-col gap-2">
            <h1>Redes Sociais:</h1>
            <div className="flex gap-2">
              <div className="cursor-pointer">
                <FaLinkedin size={32} color="#1a84fc" title="Linkedin" />
              </div>
              <div className="cursor-pointer">
                <FaInstagramSquare
                  size={32}
                  color="#e20bef"
                  title="Instagran"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <p className=" flex justify-center items-center text-sm">
        &copy; LareanTech - Todos os direitos reservados - {anoAtual}
      </p>
      <TypebotComponents />
    </footer>
  );
}

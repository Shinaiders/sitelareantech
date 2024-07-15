"use client";
import React from "react";
import Slider from "react-slick";

const servicos = [
  {
    id: 1,
    nome: "Desenvolvimento de Site",
    descricao:
      "Se você precisa de um site para sua empresa, projeto pessoal ou portfólio até mesmo e-commerce, nosso serviço de criação de site é perfeito para você. Nossa abordagem é direta e eficiente:",
  },
  {
    id: 2,
    nome: "Desenvolvimento de Aplicativos Android & IOS",
    descricao: "Ágil, Eficiente e Impactante! Desenvolvido para você",
  },
  {
    id: 3,
    nome: "Midias Sociais",
    descricao:
      "Escolha as plataformas de mídia social que fazem sentido para o seu público-alvo. Facebook, Instagram, Twitter, LinkedIn, TikTok e Pinterest são algumas opções populares.",
  },
  {
    id: 4,
    nome: "Identidade Visual",
    descricao:
      "A identidade visual é a “cara” da sua marca ou empresa. Ela engloba elementos visuais que a representam de forma consistente e reconhecível",
  },
  {
    id: 5,
    nome: "Automações de leads",
    descricao:
      "Essa é uma área crucial para otimizar o processo de geração e gestão de leads, bem como para melhorar a eficiência das suas estratégias de marketing e vendas",
  },
  {
    id: 6,
    nome: "Trafego Pago",
    descricao:
      "Essa é uma estratégia essencial no mundo do marketing digital, e entender como ela funciona pode fazer toda a diferença para o sucesso do seu negócio online. 🚀",
  },
  {
    id: 7,
    nome: "Desenvolvimentos de APIS",
    descricao:
      "desempenham um papel fundamental na conectividade e interação entre diferentes sistemas e aplicações. Elas permitem que softwares se comuniquem e troquem dados de forma padronizada",
  },
];

export default function SimpleSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 640, // Ajuste o breakpoint conforme necessário
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <div className="py-4 m-8">
      <Slider {...settings} className="flex bg-slate-900 z-0">
        {servicos.map((servico) => (
          <div
            key={servico.id}
            className="border p-4 rounded shadow-md min-h-48"
          >
            <div className="text-xl font-semibold mb-2">{servico.nome}</div>
            <p className="text-gray-200">{servico.descricao}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
}

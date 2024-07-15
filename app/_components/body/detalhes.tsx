export default function DetalhesPage() {
  return (
    <div className="flex flex-col py-6 bg-white p-1 m-1 rounded text-black gap-4">
      <section className="flex flex-col md:flex-row">
        <img
          src="developsoftware.jpg"
          alt=""
          className="md:w-[50%] md:h-[50%] rounded"
        />
        <blockquote className="flex flex-col gap-4 p-4 justify-center">
          <h1 className="text-2xl font-extrabold text-center">
            Desenvolvimento de Sites e Lojas Virtuais
          </h1>
          <li className="text-lg font-medium items-center text-center">
            Websites Institucionais: Agências especializadas criam sites
            profissionais e responsivos, adaptados para computadores e
            dispositivos móveis. Plataformas como WordPress são frequentemente
            utilizadas.
          </li>
        </blockquote>
      </section>
      <section className="flex flex-col md:flex-row-reverse">
        <img
          src="appiosandroid.jpg"
          alt=""
          className="md:w-[50%] md:h-[50%] rounded"
        />
        <blockquote className="flex flex-col gap-4 p-4 justify-center">
          <h1 className="text-2xl font-extrabold text-center">
            Desenvolvimento de Aplicativos Android & IOS
          </h1>
          <li className="text-lg font-medium items-center text-center">
            Desenvolva aplicativos nativos e híbridos para Android e iOS com
            expertise. Nossa equipe transforma ideias em soluções móveis
            eficientes, focando em performance, design e experiência do usuário
          </li>
        </blockquote>
      </section>
      <section className="flex flex-col md:flex-row">
        <img
          src="redessociais.jpg"
          alt=""
          className="md:w-[50%] md:h-[50%] rounded"
        />
        <blockquote className="flex flex-col gap-4 p-4 justify-center">
          <h1 className="text-2xl font-extrabold text-center">
            Midias Sociais
          </h1>
          <li className="text-lg font-medium items-center text-center">
            As mídias sociais são plataformas digitais que transformaram a
            maneira como nos comunicamos e interagimos. Elas permitem que
            pessoas e empresas compartilhem conteúdo, criem comunidades e se
            conectem
          </li>
        </blockquote>
      </section>
      <section className="flex flex-col md:flex-row-reverse">
        <img
          src="IdentidadeVisual.png"
          alt=""
          className="md:w-[50%] md:h-[50%] rounded"
        />
        <blockquote className="flex flex-col gap-4 p-4 justify-center">
          <h1 className="text-2xl font-extrabold text-center">
            Identidade Visual
          </h1>
          <li className="text-lg font-medium items-center text-center">
            A identidade visual é muito mais do que apenas um logotipo bonito.
            Ela é a materialização de uma marca, o conjunto de elementos
            gráficos que a torna única e memorável para o público.
          </li>
        </blockquote>
      </section>
      <section className="flex flex-col md:flex-row">
        <img
          src="automate1.jpg"
          alt=""
          className="md:w-[50%] md:h-[50%] rounded"
        />
        <blockquote className="flex flex-col gap-4 p-4 justify-center">
          <h1 className="text-2xl font-extrabold text-center">
            Automações de leads
          </h1>
          <li className="text-lg font-medium items-center text-center">
            A automação de leads refere-se ao uso de tecnologia e sistemas para
            automatizar tarefas relacionadas à geração, gestão e comunicação com
            leads (potenciais clientes).
          </li>
        </blockquote>
      </section>
      <section className="flex flex-col md:flex-row-reverse">
        <img
          src="trafegopago.png"
          alt=""
          className="md:w-[50%] md:h-[50%] rounded"
        />
        <blockquote className="flex flex-col gap-4 p-4 justify-center">
          <h1 className="text-2xl font-extrabold text-center">Trafego Pago</h1>
          <li className="text-lg font-medium items-center text-center">
            Essa é uma estratégia fundamental no mundo do marketing digital, e
            entender como ela funciona pode fazer toda a diferença para o
            sucesso do seu negócio online
          </li>
        </blockquote>
      </section>
    </div>
  );
}

export function About() {
  return (
    <section id="sobre" className="w-full bg-gray-50 dark:bg-[#0a1120] py-16 px-4 border-t border-gray-200/60 dark:border-gray-800/60 transition-colors duration-200">
      <div className="max-w-4xl mx-auto">
        {/* Título com indicador numérico 01 */}
        <div className="flex items-center gap-3 mb-8">
          <span className="text-emerald-600 dark:text-emerald-400 font-mono text-xl font-bold">01</span>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Sobre</h2>
        </div>

        {/* Texto narrativo */}
        <div className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed space-y-4">
          <p>
            Sou formado em{" "}<strong className="text-gray-900 dark:text-white font-semibold">Ciência da Computação pela UCB (2025)</strong>{" "} e
            atuo como{" "}<strong className="text-gray-900 dark:text-white font-semibold">Desenvolvedor Full Stack</strong>{" "}
            focado em construir sistemas robustos de ponta a ponta.{" "} Minha base tecnológica transita entre o ecossistema JavaScript{" "}
            <strong className="text-gray-900 dark:text-white font-semibold">(React e TypeScript)</strong> e back-ends sólidos em
            {" "}<strong className="text-gray-900 dark:text-white font-semibold">Java e Python</strong> integrados a{" "}
            <strong className="text-gray-900 dark:text-white font-semibold">bancos de dados relacionais e NoSQL.</strong> Atualmente, estou aberto a oportunidades no mercado, com muita disposição para aprender, focado em acumular experiência técnica, enfrentar desafios arquiteturais e gerar valor real às equipes.
          </p>
          <p>
            Durante minha formação, criei uma base prática passando por todas as etapas do{" "}<strong className="text-gray-900 dark:text-white font-semibold">ciclo de vida de desenvolvimento de software.</strong> Já colaborei no levantamento de requisitos, implementei wireframes para o design, transformei regras de negócio em arquitetura e atuei na{" "}<strong className="text-gray-900 dark:text-white font-semibold">integração de APIs e modelagem de bancos de dados</strong> — do diagrama conceitual (DER) à implementação física. Tenho compromisso com boas práticas de código, testes e deploy, atuando sempre com transparência através de{" "}<strong className="text-gray-900 dark:text-white font-semibold">metodologias ágeis (Kanban e Scrum)</strong>, versionamento de código e documentação clara.
          </p>
        </div>
      </div>
    </section>
  );
}
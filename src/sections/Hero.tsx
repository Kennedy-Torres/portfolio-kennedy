export function Hero() {
  return (
    <section id="hero" className="w-full bg-gray-50 pt-20 pb-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Saudação com cor de destaque */}
        <p className="text-blue-600 font-mono font-semibold text-base mb-3">
          Olá, meu nome é
        </p>

        {/* Nome com tipografia expansiva */}
        <h1 className="text-5xl sm:text-7xl font-extrabold text-gray-900 tracking-tight mb-4">
          Kennedy Rodrigo Torres Gonçalves<span className="text-blue-600">.</span>
        </h1>

        {/* Cargo */}
        <h2 className="text-2xl sm:text-3xl font-semibold text-gray-600 mb-6">
          Desenvolvedor Java | Full Stack
        </h2>

        {/* Resumo com destaques em negrito */}
        <p className="text-gray-600 text-lg leading-relaxed mb-6 max-w-3xl">
          Construo aplicações web de ponta a ponta com{" "}
          <strong className="text-gray-900 font-semibold">React, TypeScript</strong>{" "}
          no front e <strong className="text-gray-900 font-semibold">Python e Java</strong>{" "}
          no back — de plataformas educacionais e ferramentas de análise a sistemas de gestão eficientes.
        </p>

        {/* Tag de Localização */}
        <div className="flex items-center gap-2 text-gray-500 text-sm font-medium mb-8">
          <svg
            className="w-4 h-4 text-gray-500"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
            <circle cx="12" cy="10" r="3" />
          </svg>
          <span>Brasília/DF</span>
        </div>

        {/* Botões de Ação */}
        <div className="flex flex-wrap gap-4">
          <a
            href="https://github.com/Kennedy-Torres"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-900 text-white px-6 py-3 rounded-lg font-medium hover:bg-black transition-colors flex items-center gap-2 shadow-sm"
          >
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
            </svg>
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/kndtorresg/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white border border-gray-300 text-gray-800 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors shadow-sm flex items-center gap-2"
          >
            LinkedIn
          </a>
          <a
            href="#contato"
            className="bg-white border border-gray-300 text-gray-800 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors shadow-sm flex items-center gap-2"
          >
            Baixar CV
          </a>
        </div>
      </div>
    </section>
  );
}
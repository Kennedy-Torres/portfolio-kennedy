export function Hero() {
  return (
    <section
      id="hero"
      className="relative w-full min-h-[80vh] flex items-center bg-gray-50 dark:bg-[#0a1120] bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pt-20 pb-12 px-4 transition-colors duration-200"
    >
      <div className="max-w-4xl mx-auto">
        {/* Saudação estilo Terminal */}
        <p className="text-emerald-600 dark:text-emerald-400 font-mono font-medium text-base mb-3">
          &gt;_ olá, meu nome é
        </p>

        <h1 className="text-5xl sm:text-7xl font-extrabold text-gray-900 dark:text-white tracking-tight mb-4">
          Kennedy R. Torres Gonçalves<span className="text-emerald-600 dark:text-emerald-400">.</span>
        </h1>

        {/* Cargo com Tech Pills */}
        <div className="flex flex-wrap items-center gap-3 mt-4 mb-6">
          <span className="text-xl sm:text-2xl font-semibold text-gray-700 dark:text-gray-300">
            Desenvolvedor Full Stack
          </span>
          <div className="hidden sm:block w-1.5 h-1.5 rounded-full bg-gray-400 dark:bg-gray-600"></div>
          <span className="px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 text-sm font-medium border border-blue-200 dark:border-blue-800/30">
            Java & Python
          </span>
          <span className="px-3 py-1 rounded-full bg-sky-50 dark:bg-sky-900/20 text-sky-700 dark:text-sky-300 text-sm font-medium border border-sky-200 dark:border-sky-800/30">
            React & TypeScript
          </span>
        </div>

        {/* Resumo com destaques em negrito */}
        <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-6 max-w-3xl">
          Construo aplicações escaláveis de ponta a ponta. Crio interfaces modernas e responsivas com{" "}
          <strong className="text-gray-900 dark:text-white font-semibold">React e TypeScript,</strong>{" "}
          sustentadas por APIs robustas construídas em <strong className="text-gray-900 dark:text-white font-semibold">Java com Spring Boot e Python.</strong>{" "}
          Tenho experiência com <strong className="text-gray-900 dark:text-white font-semibold">modelagem de bancos de dados, arquiteturas em camadas, serverless e integração de IA</strong>{" "} para entregar soluções completas e eficientes.
        </p>

        {/* Tag de Localização */}
        <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 text-sm font-medium mb-8">
          <svg
            className="w-4 h-4 text-gray-500 dark:text-gray-400"
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
            className="bg-gray-900 text-white dark:bg-emerald-500 dark:text-gray-950 dark:hover:bg-emerald-400 px-6 py-3 rounded-lg font-semibold hover:bg-black transition-colors flex items-center gap-2 shadow-sm"
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
            className="bg-white border border-gray-300 text-gray-800 dark:bg-[#111c30] dark:border-gray-700 dark:text-gray-200 dark:hover:bg-[#182642] px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors shadow-sm flex items-center gap-2"
          >
            LinkedIn
          </a>
          <a
            href="../portfolio-kennedy/cv-kennedy-torres.pdf"
            download
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white border border-gray-300 text-gray-800 dark:bg-[#111c30] dark:border-gray-700 dark:text-gray-200 dark:hover:bg-[#182642] px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors shadow-sm flex items-center gap-2"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            Baixar CV
          </a>
        </div>
      </div>
    </section>
  );
}
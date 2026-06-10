export function Hero() {
  return (
    <section id="sobre" className="w-full min-h-[70vh] flex flex-col items-center justify-center text-center px-4 pt-24 pb-12">
      {/* Título Principal */}
      <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6 tracking-tight">
        Olá, eu sou o <span className="text-blue-600">Kennedy Torres</span>
      </h1>
      
      {/* Subtítulo / Cargo */}
      <h2 className="text-2xl md:text-3xl font-medium text-gray-700 mb-6">
        Desenvolvedor Full-Stack
      </h2>
      
      {/* Resumo Profissional */}
      <p className="max-w-2xl text-gray-600 text-lg md:text-xl mb-10 leading-relaxed">
        Com uma base teórica sólida em engenharia de software e metodologias de TI. 
        Focado em construir aplicações eficientes e escaláveis utilizando o ecossistema 
        <strong className="font-semibold text-gray-800"> React, Java, Python </strong> e bancos de dados relacionais e NoSQL.
      </p>
      
      {/* Botões de Ação (Call to Action) */}
      <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
        <a 
          href="#projetos" 
          className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors shadow-md"
        >
          Ver meus Projetos
        </a>
        <a 
          href="https://github.com/SEU-USUARIO" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="bg-gray-800 text-white px-8 py-3 rounded-lg font-medium hover:bg-gray-900 transition-colors shadow-md flex items-center justify-center gap-2"
        >
          Acessar GitHub
        </a>
      </div>
    </section>
  );
}
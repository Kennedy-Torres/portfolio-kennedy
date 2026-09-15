import { useState } from 'react';

export function Footer() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('KNDTorresG@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <footer id="contato" className="w-full bg-[#0a1120] text-white pt-20 pb-12 px-4">
      <div className="max-w-4xl mx-auto text-center">

        {/* Identificador numérico */}
        <p className="text-blue-500 font-mono text-sm font-semibold mb-4 tracking-wider">
          04 — Contato
        </p>

        {/* Título principal */}
        <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 tracking-tight">
          Vamos construir algo juntos?
        </h2>

        {/* Descrição */}
        <p className="text-gray-400 text-lg max-w-xl mx-auto mb-10 leading-relaxed">
          Estou aberto a oportunidades, freelas e boas conversas sobre tecnologia.
          Me chama por qualquer um dos canais abaixo.
        </p>

        {/* Botão dinâmico de copiar E-mail */}
        <div className="mb-12">
          <button
            onClick={handleCopyEmail}
            className={`inline-flex items-center gap-3 font-semibold px-8 py-4 rounded-full transition-all duration-300 shadow-lg cursor-pointer ${copied
                ? 'bg-emerald-600 text-white shadow-emerald-600/20 scale-105'
                : 'bg-blue-600 hover:bg-blue-500 text-white shadow-blue-600/20 hover:scale-105'
              }`}
          >
            {copied ? (
              <>
                <svg className="w-5 h-5 fill-current animate-pulse" viewBox="0 0 24 24">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                </svg>
                <span>E-mail copiado!</span>
              </>
            ) : (
              <>
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
                <span>KNDTorresG@gmail.com</span>
              </>
            )}
          </button>
        </div>

        {/* Links secundários: Telefone, GitHub e LinkedIn */}
        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8 text-gray-300 text-sm font-medium mb-16">
          <a
            href="https://wa.me/5561992545288"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-white transition-colors group"
          >
            <svg
              className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            <span>(61) 99254-5288</span>
          </a>

          <a
            href="https://github.com/Kennedy-Torres"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-white transition-colors"
          >
            <svg className="w-4 h-4 fill-current text-gray-300" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
            </svg>
            <span>github.com/Kennedy-Torres</span>
          </a>

          <a
            href="https://www.linkedin.com/in/kndtorresg/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-white transition-colors"
          >
            <svg className="w-4 h-4 fill-current text-gray-300" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
            <span>LinkedIn</span>
          </a>
        </div>

        {/* Linha divisória e copyright */}
        <div className="border-t border-gray-800/80 pt-8 text-xs text-gray-500">
          © {new Date().getFullYear()} Kennedy Rodrigo Torres Gonçalves
        </div>

      </div>
    </footer>
  );
}
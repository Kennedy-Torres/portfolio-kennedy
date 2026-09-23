import { useState } from 'react';
import { ThemeToggle } from './ThemeToggle';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="w-full bg-white dark:bg-[#0a1120] border-b border-gray-100 dark:border-gray-800/60 shadow-sm fixed top-0 left-0 z-50 transition-colors duration-300">
      <nav className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center relative">

        {/* Logo / Nome navegável */}
        <a
          href="#hero"
          className="text-xl font-bold font-mono tracking-tight group transition-all flex items-center"
        >
          <span className="text-gray-400 dark:text-gray-500 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
            &lt;
          </span>
          <span className="text-emerald-600 dark:text-emerald-400 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
            KND
          </span>
          <span className="text-gray-800 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
            Torres
          </span>
          <span className="text-emerald-600 dark:text-emerald-400 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
            G
          </span>
          <span className="text-gray-400 dark:text-gray-500 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
            /&gt;
          </span>
        </a>

        {/* Links de Navegação e Botão de Tema - DESKTOP */}
        <div className="hidden md:flex items-center gap-6">
          <ul className="flex items-center space-x-6 text-sm font-medium text-gray-600 dark:text-gray-300">
            <li><a href="#hero" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">Início</a></li>
            <li><a href="#sobre" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">Sobre</a></li>
            <li><a href="#skills" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">Skills</a></li>
            <li><a href="#projetos" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">Projetos</a></li>
            <li><a href="#contato" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">Contato</a></li>
          </ul>
          <ThemeToggle />
        </div>

        {/* Botões MOBILE (Theme + Hambúrguer) */}
        <div className="md:hidden flex items-center gap-4">
          <ThemeToggle />

          <button
            onClick={toggleMenu}
            className="text-gray-600 dark:text-gray-300 focus:outline-none p-1"
            aria-label="Abrir menu"
          >
            {isMenuOpen ? (
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* MENU DROP-DOWN MOBILE */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white dark:bg-[#0a1120] border-b border-gray-100 dark:border-gray-800/60 shadow-lg">
          <ul className="flex flex-col px-4 py-4 space-y-4 text-sm font-medium text-gray-600 dark:text-gray-300">
            <li><a href="#hero" onClick={toggleMenu} className="block hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">Início</a></li>
            <li><a href="#sobre" onClick={toggleMenu} className="block hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">Sobre</a></li>
            <li><a href="#skills" onClick={toggleMenu} className="block hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">Skills</a></li>
            <li><a href="#projetos" onClick={toggleMenu} className="block hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">Projetos</a></li>
            <li><a href="#contato" onClick={toggleMenu} className="block hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">Contato</a></li>
          </ul>
        </div>
      )}
    </header>
  );
}
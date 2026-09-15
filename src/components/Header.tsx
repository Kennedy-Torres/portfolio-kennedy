import { ThemeToggle } from './ThemeToggle';

export function Header() {
  return (
    <header className="w-full bg-white dark:bg-[#0a1120] border-b border-gray-100 dark:border-gray-800/60 shadow-sm fixed top-0 left-0 z-50 transition-colors duration-300">
      <nav className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo / Nome navegável */}
        <a 
          href="#hero" 
          className="text-xl font-bold text-gray-800 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
        >
          &lt;KNDTorresG/&gt;
        </a>

        {/* Links de Navegação e Botão de Tema */}
        <div className="flex items-center gap-6">
          <ul className="flex items-center space-x-6 text-sm font-medium text-gray-600 dark:text-gray-300">
            <li>
              <a href="#hero" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                Início
              </a>
            </li>
            <li>
              <a href="#sobre" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                Sobre
              </a>
            </li>
            <li>
              <a href="#skills" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                Skills
              </a>
            </li>
            <li>
              <a href="#projetos" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                Projetos
              </a>
            </li>
            <li>
              <a href="#contato" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                Contato
              </a>
            </li>
          </ul>

          {/* Alternador de tema dark/light */}
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
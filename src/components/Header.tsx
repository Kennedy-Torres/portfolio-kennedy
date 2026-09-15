export function Header() {
  return (
    <header className="w-full bg-white shadow-sm fixed top-0 left-0 z-50">
      <nav className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo / Nome agora é um link navegável para o topo */}
        <a 
          href="#hero" 
          className="text-xl font-bold text-gray-800 hover:text-blue-600 transition-colors"
        >
          &lt;KNDTorresG/&gt;
        </a>

        {/* Links de Navegação */}
        <ul className="flex space-x-6 text-sm font-medium text-gray-600">
          <li>
            <a href="#hero" className="hover:text-blue-600 transition-colors">
              Início
            </a>
          </li>
          <li>
            <a href="#sobre" className="hover:text-blue-600 transition-colors">
              Sobre
            </a>
          </li>
          <li>
            <a href="#skills" className="hover:text-blue-600 transition-colors">
              Skills
            </a>
          </li>
          <li>
            <a href="#projetos" className="hover:text-blue-600 transition-colors">
              Projetos
            </a>
          </li>
          <li>
            <a href="#contato" className="hover:text-blue-600 transition-colors">
              Contato
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
export function Footer() {
  return (
    <footer id="contato" className="w-full bg-gray-900 text-white py-12 mt-auto">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        
        {/* Informações e Localização */}
        <div className="mb-6 md:mb-0 text-center md:text-left">
          <h4 className="text-2xl font-bold mb-2">Vamos conversar?</h4>
          <p className="text-gray-400">Desenvolvedor Full-Stack | Taguatinga, DF</p>
        </div>

        {/* Botões de Contato */}
        <div className="flex space-x-4">
          <a 
            href="mailto:seu-email@exemplo.com" 
            className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-md font-medium transition-colors shadow-sm"
          >
            Enviar E-mail
          </a>
          <a 
            href="https://github.com/SEU-USUARIO" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="bg-gray-800 border border-gray-700 hover:bg-gray-700 px-6 py-2 rounded-md font-medium transition-colors"
          >
            GitHub
          </a>
        </div>
        
      </div>
      
      {/* Direitos Autorais Dinâmicos */}
      <div className="mt-12 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} Kennedy Torres. Todos os direitos reservados.
      </div>
    </footer>
  );
}
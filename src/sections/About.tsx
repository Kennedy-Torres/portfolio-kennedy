export function About() {
  return (
    <section id="sobre" className="w-full bg-gray-50 py-16 px-4 border-t border-gray-200/60">
      <div className="max-w-4xl mx-auto">
        {/* Título com indicador numérico 01 */}
        <div className="flex items-center gap-3 mb-8">
          <span className="text-blue-600 font-mono text-xl font-bold">01</span>
          <h2 className="text-3xl font-bold text-gray-900">Sobre</h2>
        </div>

        {/* Texto narrativo no estilo do modelo */}
        <div className="text-gray-600 text-lg leading-relaxed space-y-4">
          <p>
            Sou estudante de TI com foco prático no desenvolvimento de software de alta performance. 
            Atuo na criação de soluções full stack utilizando{" "}
            <strong className="text-gray-900 font-semibold">React, TypeScript e Tailwind CSS</strong> no front-end, 
            combinados com ecossistemas robustos no back-end como{" "}
            <strong className="text-gray-900 font-semibold">Python (Flask) e Java</strong>.
          </p>
          <p>
            Tenho experiência na estruturação de bancos de dados relacionais e NoSQL (PostgreSQL, MongoDB), 
            criação de APIs RESTful e integração de sistemas. Gosto de resolver problemas onde a arquitetura, 
            a organização de código e a regra de negócio exigem rigor técnico e boas práticas.
          </p>
        </div>
      </div>
    </section>
  );
}
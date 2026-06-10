interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string;
}

export function ProjectCard({ title, description, technologies, githubUrl }: ProjectCardProps) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col h-full">
      {/* Título do Projeto */}
      <h3 className="text-xl font-bold text-gray-800 mb-3">{title}</h3>
      
      {/* Descrição */}
      <p className="text-gray-600 mb-6 flex-grow">{description}</p>
      
      {/* Badges de Tecnologias */}
      <div className="flex flex-wrap gap-2 mb-6">
        {technologies.map(tech => (
          <span 
            key={tech} 
            className="bg-blue-50 text-blue-700 text-xs font-semibold px-2.5 py-1 rounded-md"
          >
            {tech}
          </span>
        ))}
      </div>
      
      {/* Link para o Repositório */}
      <a 
        href={githubUrl} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="text-blue-600 font-medium hover:underline inline-flex items-center gap-1"
      >
        Ver no GitHub &rarr;
      </a>
    </div>
  );
}
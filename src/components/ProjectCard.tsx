interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string;
}

export function ProjectCard({ title, description, technologies, githubUrl }: ProjectCardProps) {
  return (
    <div className="bg-white dark:bg-[#111c30] border border-gray-200 dark:border-gray-800 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col h-full">
      {/* Título do Projeto */}
      <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3">
        {title}
      </h3>
      
      {/* Descrição */}
      <p className="text-gray-600 dark:text-gray-300 mb-6 flex-grow leading-relaxed">
        {description}
      </p>
      
      {/* Badges de Tecnologias */}
      <div className="flex flex-wrap gap-2 mb-6">
        {technologies.map(tech => (
          <span 
            key={tech} 
            className="bg-blue-50 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300 border border-transparent dark:border-blue-800/40 text-xs font-semibold px-2.5 py-1 rounded-md"
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
        className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium hover:underline inline-flex items-center gap-1 transition-colors"
      >
        Ver no GitHub &rarr;
      </a>
    </div>
  );
}
import { ProjectCard } from '../components/ProjectCard';
import projectsData from '../data/projects.json';

export function Projects() {
  return (
    <section id="projetos" className="w-full bg-gray-50 dark:bg-[#0a1120] py-16 px-4 border-t border-gray-200/60 dark:border-gray-800/60 transition-colors duration-200">
      <div className="max-w-4xl mx-auto">
        
        {/* Título padronizado com a numeração 03 */}
        <div className="flex items-center gap-3 mb-10">
          <span className="text-blue-600 dark:text-blue-400 font-mono text-xl font-bold">03</span>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Meus Projetos</h2>
        </div>
        
        {/* Grid de Projetos */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projectsData.map(project => (
            <ProjectCard 
              key={project.id}
              title={project.title}
              description={project.description}
              technologies={project.technologies}
              githubUrl={project.githubUrl}
            />
          ))}
        </div>
        
      </div>
    </section>
  );
}
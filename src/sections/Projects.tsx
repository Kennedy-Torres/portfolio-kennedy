import { ProjectCard } from '../components/ProjectCard';
import projectsData from '../data/projects.json';

export function Projects() {
  return (
    <section id="projetos" className="w-full bg-white py-20 px-4">
      <div className="max-w-6xl mx-auto">
        
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Meus Projetos
        </h2>
        
        {/* Grid Responsivo: 1 coluna no mobile, 2 no tablet, 3 no desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
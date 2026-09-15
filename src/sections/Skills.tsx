export function Skills() {
  const skillCategories = [
    {
      category: "Frontend",
      skills: ["React", "TypeScript", "JavaScript", "Tailwind CSS", "HTML5 / CSS3"],
    },
    {
      category: "Backend",
      skills: ["Python", "Java", "Flask", "APIs RESTful", "Node.js"],
    },
    {
      category: "Dados & Ferramentas",
      skills: ["PostgreSQL", "MongoDB", "Git / GitHub", "Docker", "VS Code"],
    },
  ];

  return (
    <section id="skills" className="w-full bg-gray-50 py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Título integrado ao padrão azul do site */}
        <div className="flex items-center gap-3 mb-10">
          <span className="text-blue-600 font-mono text-xl font-bold">02</span>
          <h2 className="text-3xl font-bold text-gray-900">Skills</h2>
        </div>

        {/* Grid de Cards no tema claro */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {skillCategories.map((group, index) => (
            <div 
              key={index} 
              className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="text-xl font-bold text-gray-800 mb-6">{group.category}</h3>
              <ul className="space-y-3">
                {group.skills.map((skill, i) => (
                  <li key={i} className="flex items-center text-gray-600 text-sm font-medium">
                    <span className="text-blue-600 mr-2 text-xs">▸</span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
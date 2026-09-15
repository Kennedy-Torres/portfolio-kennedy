export function Skills() {
  const skillCategories = [
    {
      category: "Frontend",
      skills: ["React", "TypeScript", "JavaScript", "Tailwind CSS", "HTML5 / CSS3"],
    },
    {
      category: "Backend",
      skills: ["Python", "Java", "Spring Boot", "APIs RESTful", "FastAPI ", "Supabase"],
    },
    {
      category: "Dados & Ferramentas",
      skills: ["PostgreSQL", "MongoDB", "Git / GitHub / GitLab", "Docker"],
    },
  ];

  return (
    <section id="skills" className="w-full bg-gray-50 dark:bg-[#0a1120] py-16 px-4 border-t border-gray-200/60 dark:border-gray-800/60 transition-colors duration-200">
      <div className="max-w-4xl mx-auto">
        {/* Título com indicador numérico 02 */}
        <div className="flex items-center gap-3 mb-10">
          <span className="text-blue-600 dark:text-blue-400 font-mono text-xl font-bold">02</span>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Skills</h2>
        </div>

        {/* Grid de Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {skillCategories.map((group, index) => (
            <div 
              key={index} 
              className="bg-white dark:bg-[#111c30] border border-gray-200 dark:border-gray-800 rounded-xl p-6 shadow-sm hover:shadow-md transition-all"
            >
              <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-6">{group.category}</h3>
              <ul className="space-y-3">
                {group.skills.map((skill, i) => (
                  <li key={i} className="flex items-center text-gray-600 dark:text-gray-300 text-sm font-medium">
                    <span className="text-blue-600 dark:text-blue-400 mr-2 text-xs">▸</span>
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
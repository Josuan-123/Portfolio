
const Skills = () => {
  const skills = [
    { name: "Angular", level: 85, color: "bg-red-500" },
    { name: "JavaScript", level: 50, color: "bg-yellow-500" },
    { name: "React", level: 35, color: "bg-blue-500" },
    { name: "Java (Spring Boot)", level: 60, color: "bg-orange-600" },
    { name: "C# (Desktop)", level: 75, color: "bg-purple-500" },
    { name: "Python", level: 40, color: "bg-green-500" },
    { name: "PostgreSQL", level: 70, color: "bg-indigo-500" },
    { name: "MySQL", level: 65, color: "bg-blue-600" },
  ];

  const tools = [
    "Visual Studio Code", "Visual Studio 2022", "IntelliJ", "NetBeans",
    "Eclipse", "phpMyAdmin", "Microsoft AZURE", "Git"
  ];

  const languages = [
    { name: "Malagasy", level: 100 },
    { name: "Français", level: 75 },
    { name: "Anglais", level: 85 }
  ];

  return (
    <section id="competences" className="py-20 px-6 bg-background">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
          Mes compétences
        </h2>
        
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold mb-8 text-foreground">Langages de Programmation</h3>
            <div className="space-y-6">
              {skills.map((skill) => (
                <div key={skill.name} className="bg-card p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-border">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold text-foreground">{skill.name}</span>
                    <span className="text-sm text-muted-foreground">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-3">
                    <div
                      className={`${skill.color} h-3 rounded-full transition-all duration-1000 ease-out`}
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-foreground">Outils & IDE</h3>
              <div className="bg-card p-6 rounded-xl shadow-sm border border-border">
                <div className="grid grid-cols-1 gap-3">
                  {tools.map((tool) => (
                    <div
                      key={tool}
                      className="bg-accent/50 p-3 rounded-lg text-center font-medium text-foreground hover:shadow-md transition-all duration-300 hover:scale-105"
                    >
                      {tool}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold mb-6 text-foreground">Langues</h3>
              <div className="bg-card p-6 rounded-xl shadow-sm space-y-4 border border-border">
                {languages.map((lang) => (
                  <div key={lang.name}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-semibold text-foreground">{lang.name}</span>
                      <span className="text-sm text-muted-foreground">{lang.level}%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div
                        className="bg-blue-500 h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${lang.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

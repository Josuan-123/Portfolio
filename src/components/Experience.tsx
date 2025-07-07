import { Briefcase, Calendar } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      period: "2025-2024",
      details: [
        {
          company: "Google Clouds",
          role: "Obtention d’un Skill BADGE pour Débutant",
          tasks: ["PROMPT DESIGN IN VERTEX AI"],
        },
       
      ]
    },
    {
      period: "2025-2024",
      company: "Airtel Madagascar",
      role: "Obtention d’un diplôme de Participation à l’événement de leadership pour les jeunes de l’Initiative Mondiale de la Jeunesse de Maxwell Leadership",
      tasks: ["Apprendre comment devenir une personne de valeur qui ajoute de la valeur aux autres"]
    },
    {
      period: "2023-2024",
      company: "Alliance française de Tamatave",
      role: "Stagiaire au sein du département",
      tasks: ["Chargé de la conception et de mise en œuvre d'une plateforme de gestion de ressources humaines de l'AF"]
    },
    {
      period: "2022-2023",
      company: "SMMC Port Toamasina",
      role: "Stagiaire en Développement",
      tasks: [
        "Stage de 2 mois et demi à l'Entreprise SMMC Port Toamasina",
        "Développement d'applications web",
        "Maintenance et support technique"
      ]
    },
    {
      period: "2021-2022",
      company: "Toamasina Madagascar",
      role: "Stagiaire en Développement",
      tasks: [
        "Installation Système sur des centaines de Desktop à l'Université Barikadiny Toamasina",
        "Maintenance Software"
      ]
    }
  ];

  const competences = [
    "Sens du contact",
    "Communication",
    "Capacité d'adaptation",
    "Polyvalence",
    "Logique",
    "Ponctualité",
    "Autonomie"
  ];

  const interests = [
    "Natation",
    "Bénévolat",
    "Gaming",
    "Coding"
  ];

  // Fonction de regroupement
  const groupExperiencesByPeriod = (expList) => {
    return expList.reduce((acc, exp) => {
      const period = exp.period;

      if (!period) return acc;

      const existingGroup = acc.find(g => g.period === period);

      // Si l'expérience a une propriété "details", on traite comme un groupe
      if (exp.details && Array.isArray(exp.details)) {
        if (existingGroup) {
          existingGroup.experiences.push(...exp.details);
        } else {
          acc.push({
            period,
            experiences: [...exp.details]
          });
        }
      } else {
        const simpleExp = { company: exp.company, role: exp.role, tasks: exp.tasks };

        if (existingGroup) {
          existingGroup.experiences.push(simpleExp);
        } else {
          acc.push({
            period,
            experiences: [simpleExp]
          });
        }
      }

      return acc;
    }, []);
  };

  const groupedExperiences = groupExperiencesByPeriod(experiences);

  return (
    <section id="experience" className="py-20 px-6 bg-background">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
          Expériences & Compétences
        </h2>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold mb-8 text-foreground flex items-center">
              <Briefcase className="mr-3 text-blue-600" size={28} />
              Expériences Professionnelles
            </h3>
            <div className="space-y-10">
              {groupedExperiences.map((group, groupIndex) => (
                <div key={groupIndex}>
                  <h3 className="text-xl font-bold text-blue-600 mb-4 flex items-center">
                    <Calendar className="mr-2" size={18} /> {group.period}
                  </h3>
                  {group.experiences.map((exp, expIndex) => (
                    <div
                      key={expIndex}
                      className="bg-card p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-border mb-6"
                    >
                      <h4 className="text-xl font-bold text-foreground mb-2">{exp.role}</h4>
                      <p className="text-lg font-semibold text-muted-foreground mb-4">{exp.company}</p>
                      <ul className="space-y-2">
                        {exp.tasks.map((task, taskIndex) => (
                          <li key={taskIndex} className="flex items-start">
                            <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            <span className="text-muted-foreground">{task}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-foreground">Compétences Personnelles</h3>
              <div className="bg-card border border-border p-6 rounded-xl shadow-sm">
                <div className="space-y-3">
                  {competences.map((comp, i) => (
                    <div
                      key={i}
                      className="bg-accent/50 p-3 rounded-lg font-medium text-foreground hover:shadow-sm transition-all duration-300"
                    >
                      {comp}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6 text-foreground">Centres d'Intérêt</h3>
              <div className="bg-card border border-border p-6 rounded-xl shadow-sm">
                <div className="grid grid-cols-2 gap-3">
                  {interests.map((interest, i) => (
                    <div
                      key={i}
                      className="bg-accent/50 p-3 rounded-lg text-center font-medium text-foreground hover:shadow-sm transition-all duration-300"
                    >
                      {interest}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
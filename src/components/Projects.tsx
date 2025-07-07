
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Angular",
      description: "Application e-commerce complète avec panier, authentification et paiement intégré",
      tech: ["Angular", "NgRx", "Angular Material", "Firebase"],
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400",
      demo: "#",
      github: "#"
    },
    {
      title: "Dashboard Analytics",
      description: "Tableau de bord interactif avec graphiques en temps réel et API REST",
      tech: ["Angular", "Chart.js", "TypeScript", "Bootstrap"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400",
      demo: "#",
      github: "#"
    },
    {
      title: "Task Manager",
      description: "Gestionnaire de tâches avec drag & drop, notifications et collaboration",
      tech: ["Angular", "RxJS", "Angular CDK", "Node.js"],
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400",
      demo: "#",
      github: "#"
    }
  ];

  return (
    <section id="projets" className="py-20 px-6 bg-background">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
          Mes projets
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-card rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-border"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-foreground">{project.title}</h3>
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-accent text-accent-foreground text-xs font-medium rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-4">
                  <a
                    href={project.demo}
                    className="flex items-center px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg hover:shadow-lg transition-all duration-300 text-sm"
                  >
                    <ExternalLink size={16} className="mr-2" />
                    Demo
                  </a>
                  <a
                    href={project.github}
                    className="flex items-center px-4 py-2 border border-border text-foreground rounded-lg hover:bg-accent transition-all duration-300 text-sm"
                  >
                    <Github size={16} className="mr-2" />
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a
            href="#"
            className="inline-flex items-center px-8 py-3 border-2 border-primary text-primary rounded-full font-semibold hover:bg-primary hover:text-primary-foreground transition-all duration-300"
          >
            Voir plus de projets
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;


import { Code, Coffee, Heart } from "lucide-react";
import { motion } from "framer-motion";

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section id="apropos" className="py-20 px-6 bg-background">
      <div className="container mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent"
        >
          À propos de moi
        </motion.h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            <motion.p variants={itemVariants} className="text-lg text-muted-foreground leading-relaxed">
              Diplômé de l'École de Management et d'Innovation Technologique (EMIT) avec un diplôme de 
              Licence en Développement d'Application Internet/Intranet, je suis passionné par le développement web moderne.
            </motion.p>
            
            <motion.p variants={itemVariants} className="text-lg text-muted-foreground leading-relaxed">
              Fort d'une expérience pratique acquise lors des stages à Toamasina Madagascar à l'Entreprise SMMC Port Toamasina et l'Alliance Française de Tamatave, 
              je maîtrise les technologies frontend et backend pour créer des solutions digitales complètes.
            </motion.p>
            
            <motion.div variants={itemVariants} className="flex space-x-8 pt-4">
              <motion.div 
                whileHover={{ scale: 1.05, y: -5 }}
                className="text-center group"
              >
                <div className="bg-blue-100 dark:bg-blue-900/30 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-2 group-hover:bg-blue-200 dark:group-hover:bg-blue-900/50 transition-all duration-300">
                  <Code className="text-blue-600 dark:text-blue-400" size={24} />
                </div>
                <p className="font-semibold text-foreground">Full-Stack</p>
              </motion.div>
              
              <motion.div 
                whileHover={{ scale: 1.05, y: -5 }}
                className="text-center group"
              >
                <div className="bg-green-100 dark:bg-green-900/30 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-2 group-hover:bg-green-200 dark:group-hover:bg-green-900/50 transition-all duration-300">
                  <Coffee className="text-green-600 dark:text-green-400" size={24} />
                </div>
                <p className="font-semibold text-foreground">Innovation</p>
              </motion.div>
              
              <motion.div 
                whileHover={{ scale: 1.05, y: -5 }}
                className="text-center group"
              >
                <div className="bg-red-100 dark:bg-red-900/30 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-2 group-hover:bg-red-200 dark:group-hover:bg-red-900/50 transition-all duration-300">
                  <Heart className="text-red-600 dark:text-red-400" size={24} />
                </div>
                <p className="font-semibold text-foreground">Passion</p>
              </motion.div>
            </motion.div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-accent/50 to-accent/20 dark:from-accent/20 dark:to-accent/10 p-8 rounded-3xl backdrop-blur-sm border border-border/50 shadow-lg"
          >
            <h3 className="text-2xl font-bold mb-6 text-foreground">Formation</h3>
            <div className="space-y-6">
              <motion.div
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <h4 className="font-bold text-foreground">BACCALAURÉAT Série D (2019-2020)</h4>
                <p className="text-muted-foreground">Mention Assez Bien</p>
                <p className="text-sm text-muted-foreground/80">Lycée Saint Joseph de Cluny Tanamakoa Toamasina</p>
              </motion.div>
              <motion.div
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <h4 className="font-bold text-foreground">Licence en Développement d'Application Internet/Intranet</h4>
                <p className="text-muted-foreground">Obtention de diplôme (2023-2024)</p>
                <p className="text-sm text-muted-foreground/80">EMIT - École de Management et d'Innovation Technologique</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;

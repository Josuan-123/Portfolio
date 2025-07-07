
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section id="accueil" className="min-h-screen flex items-center justify-center pt-20 px-6 bg-gradient-to-br from-background via-background to-accent/20 dark:from-background dark:via-background dark:to-accent/10">
      <div className="container mx-auto text-center">
        <motion.div 
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-8"
        >
          <div className="relative inline-block">
            <motion.img
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              src="/lovable-uploads/5a7888b2-0b1a-4af0-8389-2525077e2c4c.png"
              alt="RAZANAMERY Josuan Mario"
              className="w-48 h-48 rounded-full object-cover mx-auto shadow-2xl border-4 border-background ring-4 ring-primary/20"
            />
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-indigo-600/20"
            ></motion.div>
          </div>
        </motion.div>
        
        <motion.h1 
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent"
        >
          Salut ! 👋
        </motion.h1>
        
        <motion.h2 
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-2xl md:text-3xl font-semibold text-foreground mb-4"
        >
          Je suis RAZANAMERY Josuan Mario
        </motion.h2>
        
        <motion.p 
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-xl md:text-2xl text-muted-foreground mb-8"
        >
          Développeur Full-Stack spécialisé en <span className="text-red-600 font-bold">Angular</span> 
        </motion.p>
        
        <motion.div 
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex justify-center space-x-6 mb-12"
        >
          <motion.a
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            href="#contact"
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-600/20"
          >
            Me contacter
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            href="#projets"
            className="border-2 border-primary text-primary px-8 py-4 rounded-full font-semibold hover:bg-primary hover:text-primary-foreground transition-all duration-300 backdrop-blur-sm"
          >
            Voir mes projets
          </motion.a>
        </motion.div>
        
        <motion.div 
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex justify-center space-x-6 mb-12"
        >
          <motion.a 
            whileHover={{ scale: 1.2, y: -3 }}
            href="#" 
            className="text-muted-foreground hover:text-primary transition-all duration-300 p-3 rounded-full hover:bg-accent"
          >
            <Github size={28} />
          </motion.a>
          <motion.a 
            whileHover={{ scale: 1.2, y: -3 }}
            href="#" 
            className="text-muted-foreground hover:text-primary transition-all duration-300 p-3 rounded-full hover:bg-accent"
          >
            <Linkedin size={28} />
          </motion.a>
          <motion.a 
            whileHover={{ scale: 1.2, y: -3 }}
            href="mailto:josuanjosuan0@gmail.com" 
            className="text-muted-foreground hover:text-primary transition-all duration-300 p-3 rounded-full hover:bg-accent"
          >
            <Mail size={28} />
          </motion.a>
        </motion.div>
        
        <motion.div 
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-muted-foreground"
        >
          <ArrowDown size={32} />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

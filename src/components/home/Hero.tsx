import { motion } from "framer-motion";
import { ArrowRight, Download, Mail, CheckCircle, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/siteConfig";
import { personalInfo } from "@/data/personalData";

export function Hero() {
  return (
    <section className="hero-gradient min-h-[100vh] flex items-center relative overflow-hidden">

      {/* Small floating dots */}
      <motion.div
        className="
                absolute
                top-[14%] left-[25%]
                w-2 h-2
                sm:top-[27%] sm:left-[33.7%]
                sm:w-2 sm:h-2
                md:top-[30%] md:left-[28.4%]
                md:w-3 md:h-3
                lg:top-[30%] lg:left-[32.9%]
                lg:w-3 lg:h-3
                bg-primary rounded-full opacity-60
              "

        animate={{ y: [0, -25, 0], opacity: [0.4, 0.8, 0.4] }}
        transition={{ duration: 5, repeat: Infinity }}
      />
      <motion.div
        className="absolute top-[40%] right-1/3 w-2 h-2 bg-accent rounded-full opacity-50"
        animate={{ y: [0, 20, 0], opacity: [0.3, 0.7, 0.3] }}
        transition={{ duration: 6, repeat: Infinity, delay: 1 }}
      />
      <motion.div
        className="absolute bottom-1/2 left-1/3 w-2 h-2 bg-primary rounded-full opacity-40"
        animate={{ y: [0, -15, 0], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 7, repeat: Infinity, delay: 2 }}
      />

      {/* Background decoration */}

      <motion.div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 left-20 w-72 h-72 bg-accent/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </motion.div>
      <motion.div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-[10%] right-80 w-72 h-72 bg-accent/25 rounded-full blur-3xl" />
        <div className="absolute bottom-1/2 -right-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </motion.div>

      <motion.div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-[20%] -left-20 w-72 h-72 bg-accent/15 rounded-full blur-3xl" />
        <div className="absolute bottom-1/2 -right-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </motion.div>

      <motion.div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1 left-[15%] w-72 h-72 bg-accent/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/2 -right-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      </motion.div>

      <div className="container mx-auto px-4 pt-12 md:pt-36 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 md:px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6"
          >
            <Sparkles className="w-4 h-4 text-primary" />

            <span className="text-xs md:text-sm text-primary font-medium">
              Available for Freelance & Full-time Roles
            </span>
          </motion.div>

          {/* Profile Image (Optional) */}
          {siteConfig.showProfileImage && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mb-8"
            >
              <img
                src={siteConfig.profileImageSrc}
                alt={siteConfig.name}
                className="w-24 h-24 md:w-32 md:h-32 rounded-full mx-auto border-4 border-primary/30 object-cover"
              />
            </motion.div>
          )}

          {/* Name & Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-4  tracking-tight"
          >
            Hi, I'm{" "}
            <span className="gradient-text">{siteConfig.name}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-lg md:text-xl lg:text-2xl text-muted-foreground mb-2"
          >
            {siteConfig.title}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-base md:text-lg text-muted-foreground mb-8 max-w-2xl mx-auto px-4"
          >
            {siteConfig.description}
          </motion.p>

  {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-8 sm:gap-12 mb-12"
          >
            {[
              { value: personalInfo.stats.testCases, label: 'Test Cases' },
              { value: personalInfo.stats.bugsReported, label: 'Bugs Reported' },
              { value: personalInfo.stats.platforms, label: 'Platforms' },
            ].map((stat, index) => (
              <motion.div 
                key={index} 
                className="text-center group"
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-3xl sm:text-4xl font-bold gradient-text">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground uppercase tracking-wider mt-1">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>


          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center mb-12 md:mb-16 px-4"
          >
            <Button asChild size="lg" className="glow-effect group w-full sm:w-auto">
              <a href={siteConfig.cvDownloadUrl} download>
                <Download className="w-5 h-5 mr-2" />
                Download CV
              </a>
            </Button>

            <Button asChild variant="outline" size="lg" className="w-full sm:w-auto">
              <Link to="https://api.whatsapp.com/send/?phone=%2B201092477262&text&type=phone_number&app_absent=0" target="_blank">
                Hire Me
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-fast ease-smooth" />
              </Link>
            </Button>
          </motion.div>

          {/* Stats */}
          {/* <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 max-w-3xl mx-auto px-4"
          >
            <div className="stat-card">
              <div className="text-2xl md:text-3xl lg:text-4xl font-bold gradient-text mb-1">
                {siteConfig.stats.testCases}
              </div>
              <div className="text-muted-foreground text-xs md:text-sm">
                Test Cases Written
              </div>
            </div>
            <div className="stat-card">
              <div className="text-2xl md:text-3xl lg:text-4xl font-bold gradient-text mb-1">
                {siteConfig.stats.bugsReported}
              </div>
              <div className="text-muted-foreground text-xs md:text-sm">
                Bugs Reported
              </div>
            </div>
            <div className="stat-card">
              <div className="text-2xl md:text-3xl lg:text-4xl font-bold gradient-text mb-1">
                3+
              </div>
              <div className="text-muted-foreground text-xs md:text-sm">
                {siteConfig.stats.platforms}
              </div>
            </div>
          </motion.div> */}
        </div>
      </div>
    </section>
  );
}

import { motion } from "framer-motion";
import { ArrowRight, Download, Mail, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/siteConfig";

export function Hero() {
  return (
    <section className="hero-gradient min-h-[90vh] flex items-center relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 py-12 md:py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 md:px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6"
          >
            <CheckCircle className="w-4 h-4 text-primary" />
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
            className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-4"
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
            {/* <Button asChild variant="outline" size="lg" className="w-full sm:w-auto">
              <Link to="/contact">
                <Mail className="w-5 h-5 mr-2" />
                Contact Me
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button> */}
                        <Button asChild variant="outline" size="lg" className="w-full sm:w-auto">
              <Link to="https://api.whatsapp.com/send/?phone=%2B201092477262&text&type=phone_number&app_absent=0" target="_blank">
                Hire Me
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
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
          </motion.div>
        </div>
      </div>
    </section>
  );
}

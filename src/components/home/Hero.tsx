import { motion, Variants } from "framer-motion";
import { ArrowRight, Download, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/siteConfig";
import { personalInfo } from "@/data/personalData";

/* ================= Animations ================= */

const heroContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

const heroItem: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.4, 0, 0.2, 1] },
  },
};

/* ================= Component ================= */

export function Hero() {
  return (
    <section className="hero-gradient min-h-screen flex items-center relative overflow-hidden">
      {/* Floating dots */}
      <motion.div
        className="absolute top-[30%] left-[32.9%] w-3 h-3 rounded-full bg-primary/60"
        animate={{ y: [0, -18, 0], opacity: [0.4, 0.8, 0.4] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Background blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 left-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 pt-24 md:pt-36 relative z-10">
        <motion.div
          variants={heroContainer}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto text-center"
        >
          {/* Badge */}
          <motion.div
            variants={heroItem}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6"
          >
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-xs md:text-sm text-primary font-medium">
              Available for Freelance & Full-time Roles
            </span>
          </motion.div>

          {/* Image */}
          {siteConfig.showProfileImage && (
            <motion.div variants={heroItem} className="mb-8">
              <img
                src={siteConfig.profileImageSrc}
                alt={siteConfig.name}
                className="w-28 h-28 md:w-32 md:h-32 rounded-full mx-auto border-4 border-primary/30 object-cover"
              />
            </motion.div>
          )}

          {/* Name */}
          <motion.h1
            variants={heroItem}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 tracking-tight"
          >
            Hi, I&apos;m <span className="gradient-text">{siteConfig.name}</span>
          </motion.h1>

          {/* Title */}
          <motion.p
            variants={heroItem}
            className="text-lg md:text-xl text-muted-foreground mb-2"
          >
            {siteConfig.title}
          </motion.p>

          {/* Description */}
          <motion.p
            variants={heroItem}
            className="text-base md:text-lg text-muted-foreground opacity-80 mb-10 max-w-2xl mx-auto"
          >
            {siteConfig.description}
          </motion.p>

          {/* Stats */}
          <motion.div
            variants={heroItem}
            className="flex flex-wrap justify-center gap-10 mb-12"
          >
            {[
              { value: personalInfo.stats.testCases, label: "Test Cases" },
              { value: personalInfo.stats.bugsReported, label: "Bugs Reported" },
              { value: personalInfo.stats.platforms, label: "Platforms" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl font-bold text-primary">
                  {stat.value}
                </div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>

          {/* CTA */}
          <motion.div
            variants={heroItem}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button asChild size="lg" className="glow-effect">
              <a href={siteConfig.cvDownloadUrl} download>
                <Download className="w-5 h-5 mr-2" />
                Download CV
              </a>
            </Button>

            <Button asChild variant="outline" size="lg">
              <Link to={siteConfig.whatsappLink} target="_blank">
                Hire Me
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

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

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6 animate-fade-in">
            <CheckCircle className="w-4 h-4 text-primary" />
            <span className="text-sm text-primary font-medium">
              Available for Freelance & Full-time Roles
            </span>
          </div>

          {/* Profile Image (Optional) */}
          {siteConfig.showProfileImage && (
            <div className="mb-8 animate-fade-in">
              <img
                src={siteConfig.profileImageSrc}
                alt={siteConfig.name}
                className="w-32 h-32 rounded-full mx-auto border-4 border-primary/30 object-cover"
              />
            </div>
          )}

          {/* Name & Title */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 animate-fade-in">
            Hi, I'm{" "}
            <span className="gradient-text">{siteConfig.name}</span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-2 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            {siteConfig.title}
          </p>

          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "0.2s" }}>
            {siteConfig.description}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <Button asChild size="lg" className="glow-effect group">
              <a href={siteConfig.cvDownloadUrl} download>
                <Download className="w-5 h-5 mr-2" />
                Download CV
              </a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/contact">
                <Mail className="w-5 h-5 mr-2" />
                Contact Me
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <div className="stat-card">
              <div className="text-3xl md:text-4xl font-bold gradient-text mb-1">
                {siteConfig.stats.testCases}
              </div>
              <div className="text-muted-foreground text-sm">
                Test Cases Written
              </div>
            </div>
            <div className="stat-card">
              <div className="text-3xl md:text-4xl font-bold gradient-text mb-1">
                {siteConfig.stats.bugsReported}
              </div>
              <div className="text-muted-foreground text-sm">
                Bugs Reported
              </div>
            </div>
            <div className="stat-card">
              <div className="text-3xl md:text-4xl font-bold gradient-text mb-1">
                3+
              </div>
              <div className="text-muted-foreground text-sm">
                {siteConfig.stats.platforms}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

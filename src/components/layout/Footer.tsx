import { Link } from "react-router-dom";
import { Terminal } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";
import { SocialIcon } from "@/components/ui/SocialIcon";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-card/40">
      <div className="container mx-auto px-4 pt-5 pb-2 md:pb-2 md:pt-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2 group">
              <div className="w-8 h-8 rounded-lg bg-primary/15 flex items-center justify-center group-hover:bg-primary/25 transition-colors duration-fast ease-smooth">
                <Terminal className="w-4 h-4 text-primary" />
              </div>
              <span className="font-semibold text-foreground">
                {siteConfig.name}
              </span>
            </Link>

            <p className="text-sm text-muted-foreground max-w-xs leading-relaxed">
              {siteConfig.title} based in {siteConfig.location}. Open to freelance
              projects and junior QA roles.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Quick Links</h4>
            <div className="flex flex-col gap-2">
              <Link
                to="/projects"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Projects
              </Link>
              <Link
                to="/about"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                About Me
              </Link>
              <Link
                to="/contact"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Social */}
          <div className="space-y-4 sm:col-span-2 md:col-span-1">
            <h4 className="font-semibold text-foreground">Connect</h4>

            <div className="flex gap-4">
              <SocialIcon href={siteConfig.linkedin} label="LinkedIn">
                <img src="/linkedin.png" alt="LinkedIn" className="w-7 h-7" />
              </SocialIcon>

              <SocialIcon href={siteConfig.github} label="GitHub">
                <img
                  src="/github.png"
                  alt="GitHub"
                  className="w-7 h-7 dark:invert"
                />
              </SocialIcon>

              <SocialIcon href={`mailto:${siteConfig.email}`} label="Email">
                <img src="/gmail.png" alt="Gmail" className="w-7 h-7" />
              </SocialIcon>

              <SocialIcon href={siteConfig.whatsappLink} label="WhatsApp">
                <img src="/whatsapp.png" alt="WhatsApp" className="w-7 h-7" />
              </SocialIcon>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-border/60 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center gap-3 text-center md:text-left">
          <p className="text-xs text-muted-foreground">
            © {currentYear} {siteConfig.name}. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground italic">
            Quality is never an accident. It is always the result of intelligent
            effort.
          </p>
        </div>
      </div>
    </footer>
  );
}

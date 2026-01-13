import { Layout } from "@/components/layout/Layout";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { siteConfig } from "@/config/siteConfig";
import { CheckCircle, MapPin, Award, Target } from "lucide-react";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { StaggerContainer, StaggerItem } from "@/components/animations/StaggerContainer";

const About = () => {
  return (
    <Layout>
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <SectionHeader
              title="About Me"
              subtitle="A passionate QA engineer dedicated to delivering quality software"
            />
          </ScrollReveal>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-6 md:gap-8 mb-8 md:mb-12">
              {/* Profile section - shows image if enabled */}
              {siteConfig.showProfileImage ? (
                <ScrollReveal direction="left" className="md:col-span-1">
                  <img
                    src={siteConfig.profileImageSrc}
                    alt={siteConfig.name}
                    className="w-full aspect-square rounded-2xl object-cover border-4 border-primary/20"
                  />
                </ScrollReveal>
              ) : null}

              {/* Bio */}
              <ScrollReveal
                direction="right"
                delay={0.1}
                className={siteConfig.showProfileImage ? "md:col-span-2" : "md:col-span-3"}
              >
                <div className="glass-card p-6 md:p-8">
                  <h3 className="text-xl md:text-2xl font-semibold mb-4 flex items-center gap-2">
                    <span className="gradient-text">Hello!</span>
                  </h3>

                  <div className="space-y-4 text-muted-foreground text-sm md:text-base">
                    <p>
                      I'm <strong className="text-foreground">{siteConfig.name}</strong>, 
                      a Junior QA/QC Engineer based in {siteConfig.location}. While I'm at 
                      the beginning of my career, I've gained valuable hands-on experience 
                      working on real-world projects.
                    </p>

                    <p>
                      I hold the <strong className="text-foreground">ISTQB CTFL certification</strong> and 
                      have practical experience in manual testing, API testing with Postman, 
                      and basic test automation using Selenium and TestNG.
                    </p>

                    <p>
                      My approach combines methodical testing practices with genuine curiosity 
                      about how software works. I believe quality is not just about finding bugs—it's 
                      about understanding the user experience and ensuring the product meets expectations.
                    </p>

                    <p>
                      I'm actively seeking opportunities to grow as a QA professional, whether 
                      through freelance testing projects or a junior QA position where I can 
                      contribute to a team while continuing to learn.
                    </p>
                  </div>

                  <div className="flex items-center gap-2 mt-6 text-sm text-muted-foreground">
                    <MapPin className="w-4 h-4 text-primary" />
                    {siteConfig.location}
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Values/Approach */}
            <StaggerContainer className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
              <StaggerItem>
                <div className="glass-card p-5 md:p-6 hover:border-primary/50 transition-colors h-full">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-primary/20 flex items-center justify-center mb-4">
                    <Target className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                  </div>
                  <h4 className="font-semibold mb-2">Detail-Oriented</h4>
                  <p className="text-sm text-muted-foreground">
                    I approach testing with meticulous attention to detail, ensuring 
                    comprehensive coverage and thorough documentation.
                  </p>
                </div>
              </StaggerItem>

              <StaggerItem>
                <div className="glass-card p-5 md:p-6 hover:border-primary/50 transition-colors h-full">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-primary/20 flex items-center justify-center mb-4">
                    <CheckCircle className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                  </div>
                  <h4 className="font-semibold mb-2">Growth Mindset</h4>
                  <p className="text-sm text-muted-foreground">
                    Continuously learning new tools, methodologies, and best practices 
                    to become a more effective QA professional.
                  </p>
                </div>
              </StaggerItem>

              <StaggerItem>
                <div className="glass-card p-5 md:p-6 hover:border-primary/50 transition-colors h-full sm:col-span-2 md:col-span-1">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-primary/20 flex items-center justify-center mb-4">
                    <Award className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                  </div>
                  <h4 className="font-semibold mb-2">Quality First</h4>
                  <p className="text-sm text-muted-foreground">
                    Committed to delivering high-quality results that meet user expectations 
                    and business requirements.
                  </p>
                </div>
              </StaggerItem>
            </StaggerContainer>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;

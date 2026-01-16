import { Bug, TestTube2, Smartphone, Database } from "lucide-react";
import { personalData } from "@/data/personalData";
import ScrollReveal from "../components/ui/ScrollReveal";
import StaggeredList from "../components/ui/StaggeredList";
import { SectionHeader } from "@/components/ui/SectionHeader";

const skills = [
  { icon: TestTube2, title: "Manual Testing", description: "Functional, Regression, Smoke, Sanity, Usability, Design Testing" },
  { icon: Bug, title: "Bug Tracking", description: "Expert in Jira for bug reporting, tracking, and verification" },
  { icon: Smartphone, title: "Mobile Testing", description: "Cross-platform testing for Android and iOS applications" },
  { icon: Database, title: "API & Database", description: "Postman for API testing, SQL for database validation" },
];

export default function About() {
  return (
    <section id="about" className="py-12 md:py-32 lg:24 relative">
      <div className="absolute inset-0 gradient-mesh opacity-40" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <SectionHeader
              title="Quality Assurance Expert"
              subtitle="Ensuring software quality across web, mobile, and API platforms."
            />
          </ScrollReveal>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <ScrollReveal delay={0.1}>
              <div className="space-y-6">
                <p className="text-muted-foreground leading-relaxed">
                  {personalData.summary}
                </p>

                {personalData.experience.map((exp, index) => (
                  <div key={index} className="glass-card p-4">
                    <div className="flex justify-between mb-2">
                      <div>
                        <h4 className="font-semibold">{exp.company}</h4>
                        <p className="text-sm text-primary">{exp.role}</p>
                      </div>
                      <span className="text-xs text-muted-foreground">
                        {exp.period}
                      </span>
                    </div>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      {exp.highlights.slice(0, 3).map((h, i) => (
                        <li key={i} className="flex gap-2">
                          <span className="text-primary">•</span>
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
                              {/* Tech Stack */}
                <div className="pt-8">
                  <p className="text-sm font-mono text-primary mb-3">
                    Skills & Tools
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {personalData.skills.slice(0, 8).map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 text-sm rounded-full
                                   bg-secondary text-muted-foreground
                                   hover:bg-primary/10 hover:text-foreground
                                   transition-colors"
                      >
                        {skill.includes("(")
                          ? skill.split("(")[0].trim()
                          : skill}
                      </span>
                    ))}
                  </div>
                </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2} direction="right">
              <div className="relative">
                <div className="aspect-square rounded-2xl glass-card p-1">
                  <div className="w-full h-full rounded-xl bg-primary/5 flex items-center justify-center">
                    <div className="text-center p-8">
                      <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-2 border-primary/70">
                        <img src="/personal.png" alt="" />
                      </div>
                      <h3 className="font-semibold mb-1">
                        {personalData.name}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {personalData.country}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-2xl" />
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/10 rounded-full blur-2xl" />
              </div>
            </ScrollReveal>
            
          </div>

          <StaggeredList className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill) => {
              const Icon = skill.icon;
              return (
                <div key={skill.title} className="glass-card p-6">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">{skill.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {skill.description}
                  </p>
                </div>
              );
            })}
          </StaggeredList>
        </div>
      </div>
    </section>
  );
}

import { Layout } from "@/components/layout/Layout";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { skills } from "@/config/siteConfig";
import { TestTube, Server, Zap, Wrench, Code, Monitor } from "lucide-react";

const skillSections = [
  {
    icon: TestTube,
    title: "Manual Testing",
    description: "Comprehensive manual testing techniques for quality assurance",
    skills: skills.manualTesting,
  },
  {
    icon: Server,
    title: "API Testing",
    description: "Backend service validation and API quality assurance",
    skills: skills.apiTesting,
  },
  {
    icon: Zap,
    title: "Automation Basics",
    description: "Foundation in test automation tools and frameworks",
    skills: skills.automationBasics,
  },
  {
    icon: Wrench,
    title: "Tools & Platforms",
    description: "Project management and testing tools proficiency",
    skills: skills.tools,
  },
  {
    icon: Code,
    title: "Programming & Database",
    description: "Technical skills for effective test development",
    skills: skills.programming,
  },
  {
    icon: Monitor,
    title: "Platform Experience",
    description: "Cross-platform testing expertise",
    skills: skills.platforms,
  },
];

const Skills = () => {
  return (
    <Layout>
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Technical Skills"
            subtitle="A comprehensive toolkit for ensuring software quality across all platforms"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {skillSections.map((section, index) => (
              <div
                key={section.title}
                className="glass-card p-6 hover:border-primary/50 transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center mb-4">
                  <section.icon className="w-7 h-7 text-primary" />
                </div>

                <h3 className="text-xl font-semibold mb-2">{section.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {section.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {section.skills.map((skill) => (
                    <span key={skill} className="skill-badge">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Skills;

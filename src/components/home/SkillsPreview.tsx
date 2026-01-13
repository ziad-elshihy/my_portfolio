import { Link } from "react-router-dom";
import { ArrowRight, TestTube, Server, Wrench, Code } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { StaggerContainer, StaggerItem } from "@/components/animations/StaggerContainer";

const skillCategories = [
  {
    icon: TestTube,
    title: "Manual Testing",
    skills: ["Functional", "Regression", "Smoke", "Sanity", "Usability"],
  },
  {
    icon: Server,
    title: "API Testing",
    skills: ["Postman", "REST APIs", "Auth Testing", "Validation"],
  },
  {
    icon: Wrench,
    title: "Tools",
    skills: ["Jira", "Trello", "GitHub", "Selenium"],
  },
  {
    icon: Code,
    title: "Technical",
    skills: ["Java", "SQL", "OOP", "TestNG"],
  },
];

export function SkillsPreview() {
  return (
    <section className="py-12 md:py-20">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <SectionHeader
            title="Core Skills"
            subtitle="A comprehensive toolkit for ensuring software quality"
          />
        </ScrollReveal>

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-12">
          {skillCategories.map((category) => (
            <StaggerItem key={category.title}>
              <div className="glass-card p-5 md:p-6 hover:border-primary/50 transition-all duration-300 h-full">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-primary/20 flex items-center justify-center mb-4">
                  <category.icon className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                </div>
                <h3 className="text-base md:text-lg font-semibold mb-3">{category.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span key={skill} className="skill-badge text-xs">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <ScrollReveal delay={0.3}>
          <div className="text-center">
            <Button asChild variant="outline" size="lg">
              <Link to="/skills">
                View All Skills
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

import { Link } from "react-router-dom";
import { ArrowRight, TestTube, Server, Wrench, Code } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/ui/SectionHeader";

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
    <section className="py-20">
      <div className="container mx-auto px-4">
        <SectionHeader
          title="Core Skills"
          subtitle="A comprehensive toolkit for ensuring software quality"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="glass-card p-6 hover:border-primary/50 transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center mb-4">
                <category.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-3">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span key={skill} className="skill-badge text-xs">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button asChild variant="outline" size="lg">
            <Link to="/skills">
              View All Skills
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { useProjects } from "@/context/ProjectContext";

export function FeaturedProjects() {
  const { getFeaturedProjects } = useProjects();
  const featuredProjects = getFeaturedProjects().slice(0, 3);

  if (featuredProjects.length === 0) return null;

  return (
    <section className="py-20 bg-card/30">
      <div className="container mx-auto px-4">
        <SectionHeader
          title="Featured Projects"
          subtitle="Real-world testing projects demonstrating my QA expertise"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {featuredProjects.map((project, index) => (
            <div
              key={project.id}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button asChild variant="outline" size="lg">
            <Link to="/projects">
              View All Projects
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { useProjects } from "@/context/ProjectContext";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { StaggerContainer, StaggerItem } from "@/components/animations/StaggerContainer";

export function FeaturedProjects() {
  const { getFeaturedProjects } = useProjects();
  const featuredProjects = getFeaturedProjects().slice(0, 3);

  if (featuredProjects.length === 0) return null;

  return (
    <section className="py-12 md:py-20 bg-card/30">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <SectionHeader
            title="Featured Projects"
            subtitle="Real-world testing projects demonstrating my QA expertise"
          />
        </ScrollReveal>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-12">
          {featuredProjects.map((project) => (
            <StaggerItem key={project.id} className="h-full">
              <ProjectCard project={project} />
            </StaggerItem>
          ))}
        </StaggerContainer>

        <ScrollReveal delay={0.3}>
          <div className="text-center">
            <Button asChild variant="outline" size="lg">
              <Link to="/projects">
                View All Projects
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

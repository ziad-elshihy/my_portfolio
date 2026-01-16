import { Layout } from "@/components/layout/Layout";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { useProjects } from "@/context/ProjectContext";
import { FolderOpen } from "lucide-react";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import {
  StaggerContainer,
  StaggerItem,
} from "@/components/animations/StaggerContainer";

const Projects = () => {
  const { projects } = useProjects();

  return (
    <Layout>
      <section className="relative py-20 md:py-28">
        {/* Background context */}
        <div className="absolute inset-0 gradient-mesh opacity-30" />

        <div className="container mx-auto px-4 relative z-10">
          <ScrollReveal>
            <SectionHeader
              title="My Projects"
              subtitle="Real-world testing projects showcasing my QA expertise and methodologies"
            />
          </ScrollReveal>

          {projects.length === 0 ? (
            <ScrollReveal delay={0.1}>
              <div className="text-center py-24">
                <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-full bg-primary/10">
                  <FolderOpen className="w-8 h-8 text-primary" />
                </div>

                <h3 className="text-xl font-semibold mb-2">
                  No projects yet
                </h3>
                <p className="text-muted-foreground max-w-sm mx-auto">
                  Projects will appear here once added.
                </p>
              </div>
            </ScrollReveal>
          ) : (
            <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {projects.map((project) => (
                <StaggerItem key={project.id} className="h-full">
                  <ProjectCard project={project} />
                </StaggerItem>
              ))}
            </StaggerContainer>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Projects;

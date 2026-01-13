import { Layout } from "@/components/layout/Layout";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { useProjects } from "@/context/ProjectContext";
import { FolderOpen } from "lucide-react";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { StaggerContainer, StaggerItem } from "@/components/animations/StaggerContainer";

const Projects = () => {
  const { projects } = useProjects();

  return (
    <Layout>
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <SectionHeader
              title="My Projects"
              subtitle="Real-world testing projects showcasing my QA expertise and methodologies"
            />
          </ScrollReveal>

          {projects.length === 0 ? (
            <ScrollReveal delay={0.1}>
              <div className="text-center py-20">
                <FolderOpen className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">No projects yet</h3>
                <p className="text-muted-foreground">
                  Projects will appear here once added.
                </p>
              </div>
            </ScrollReveal>
          ) : (
            <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-6xl mx-auto">
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

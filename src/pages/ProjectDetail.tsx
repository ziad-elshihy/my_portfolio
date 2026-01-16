import { useParams, Link, Navigate } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { useProjects } from "@/context/ProjectContext";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  ArrowLeft,
  Calendar,
  Bug,
  FileCheck,
  Target,
  Wrench,
} from "lucide-react";

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const { getProject } = useProjects();
  const project = getProject(id || "");

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  return (
    <Layout>
      <section className="py-12 md:py-32 lg:24 relative">
        {/* Background context */}
        <div className="absolute inset-0 gradient-mesh opacity-30" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            {/* Back */}
            <Button asChild variant="ghost" className="mb-10">
              <Link to="/projects">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Projects
              </Link>
            </Button>

            {/* Header */}
            <div className="glass-card p-8 mb-10">
              <div className="flex flex-wrap gap-3 mb-4">
                {/* Type – unified blue */}
                <Badge
                  variant="outline"
                  className="bg-primary/10 text-primary border-primary/30"
                >
                  {project.type}
                </Badge>

                {/* Status */}
                <Badge
                  variant="outline"
                  className={
                    project.status === "Completed"
                      ? "bg-primary/20 text-primary border-primary/40"
                      : "bg-yellow-500/20 text-yellow-600 dark:text-yellow-400 border-yellow-500/30"
                  }
                >
                  {project.status}
                </Badge>
              </div>

              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                {project.title}
              </h1>

              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-primary" />
                  {project.startDate}
                  {project.endDate && ` - ${project.endDate}`}
                </div>

                <div className="flex items-center gap-2">
                  <Target className="w-4 h-4 text-primary" />
                  {project.role}
                </div>
              </div>
            </div>

            {/* Metrics */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-10">
              {project.metrics.testCases && (
                <div className="stat-card glass-card flex justify-center items-center gap-4 py-8">
                  {/* Text */}
                  <div className="flex flex-col">
                    <div className="text-2xl font-bold gradient-text leading-none">
                      {project.metrics.testCases}
                    </div>
                    <div className="text-xs text-muted-foreground mt-1">
                      Test Cases
                    </div>
                  </div>
                  {/* Icon */}
                  <FileCheck className="w-6 h-6 text-primary flex-shrink-0" />
                </div>
              )}

              {project.metrics.bugsFound && (
                <div className="stat-card glass-card flex justify-center items-center gap-4 py-8">
                  {/* Text */}
                  <div className="flex flex-col">
                    <div className="text-2xl font-bold gradient-text leading-none">
                      {project.metrics.bugsFound}
                    </div>
                    <div className="text-xs text-muted-foreground mt-1">
                      Bugs Found
                    </div>
                  </div>
                  {/* Icon */}
                  <Bug className="w-6 h-6 text-primary flex-shrink-0" />
                </div>
              )}

              {project.metrics.coverage && (
                <div className="stat-card glass-card flex justify-center items-center gap-4 py-8">
                  {/* Text */}
                  <div className="flex flex-col">
                    <div className="text-2xl font-bold gradient-text leading-none">
                      {project.metrics.coverage}
                    </div>
                    <div className="text-xs text-muted-foreground mt-1">
                      Coverage
                    </div>
                  </div>
                  {/* Icon */}
                  <Target className="w-6 h-6 text-primary flex-shrink-0" />
                </div>
              )}

              {project.metrics.other && (
                <div className="stat-card glass-card flex justify-center items-center gap-4 py-8">
                  {/* Text */}
                  <div className="flex flex-col">
                    <div className="text-2xl font-bold gradient-text leading-none">
                      {project.metrics.other}
                    </div>
                  </div>
                  {/* Icon */}
                  <Wrench className="w-6 h-6 text-primary flex-shrink-0" />
                </div>
              )}
            </div>

            {/* Responsibilities */}
            <div className="glass-card p-8 mb-10">
              <h2 className="text-xl font-semibold mb-5">
                Key Responsibilities
              </h2>
              <ul className="space-y-3">
                {project.responsibilities.map((resp, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-muted-foreground"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    {resp}
                  </li>
                ))}
              </ul>
            </div>

            {/* Tools */}
            <div className="glass-card p-8">
              <h2 className="text-xl font-semibold mb-5">Tools Used</h2>
              <div className="flex flex-wrap gap-3">
                {project.tools.map((tool) => (
                  <span key={tool} className="skill-badge">
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ProjectDetail;

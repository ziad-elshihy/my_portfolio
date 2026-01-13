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

  const typeColors: Record<string, string> = {
    Web: "bg-blue-500/20 text-blue-400 border-blue-500/30",
    Mobile: "bg-green-500/20 text-green-400 border-green-500/30",
    API: "bg-purple-500/20 text-purple-400 border-purple-500/30",
    "Web & Mobile": "bg-orange-500/20 text-orange-400 border-orange-500/30",
    "Full Stack": "bg-pink-500/20 text-pink-400 border-pink-500/30",
  };

  return (
    <Layout>
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Back button */}
            <Button asChild variant="ghost" className="mb-8">
              <Link to="/projects">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Projects
              </Link>
            </Button>

            {/* Header */}
            <div className="glass-card p-8 mb-8">
              <div className="flex flex-wrap gap-3 mb-4">
                <Badge
                  variant="outline"
                  className={typeColors[project.type] || ""}
                >
                  {project.type}
                </Badge>
                <Badge
                  variant="outline"
                  className={
                    project.status === "Completed"
                      ? "bg-primary/20 text-primary border-primary/30"
                      : "bg-yellow-500/20 text-yellow-400 border-yellow-500/30"
                  }
                >
                  {project.status}
                </Badge>
              </div>

              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                {project.title}
              </h1>

              <p className="text-lg text-muted-foreground mb-6">
                {project.description}
              </p>

              <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
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
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {project.metrics.testCases && (
                <div className="stat-card">
                  <FileCheck className="w-6 h-6 text-primary mx-auto mb-2" />
                  <div className="text-2xl font-bold gradient-text">
                    {project.metrics.testCases}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    Test Cases
                  </div>
                </div>
              )}
              {project.metrics.bugsFound && (
                <div className="stat-card">
                  <Bug className="w-6 h-6 text-primary mx-auto mb-2" />
                  <div className="text-2xl font-bold gradient-text">
                    {project.metrics.bugsFound}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    Bugs Found
                  </div>
                </div>
              )}
              {project.metrics.coverage && (
                <div className="stat-card">
                  <Target className="w-6 h-6 text-primary mx-auto mb-2" />
                  <div className="text-2xl font-bold gradient-text">
                    {project.metrics.coverage}
                  </div>
                  <div className="text-xs text-muted-foreground">Coverage</div>
                </div>
              )}
              {project.metrics.other && (
                <div className="stat-card col-span-2 md:col-span-1">
                  <Wrench className="w-6 h-6 text-primary mx-auto mb-2" />
                  <div className="text-sm font-bold text-foreground">
                    {project.metrics.other}
                  </div>
                </div>
              )}
            </div>

            {/* Responsibilities */}
            <div className="glass-card p-8 mb-8">
              <h2 className="text-xl font-semibold mb-4">
                Key Responsibilities
              </h2>
              <ul className="space-y-3">
                {project.responsibilities.map((resp, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-muted-foreground"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    {resp}
                  </li>
                ))}
              </ul>
            </div>

            {/* Tools */}
            <div className="glass-card p-8">
              <h2 className="text-xl font-semibold mb-4">Tools Used</h2>
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

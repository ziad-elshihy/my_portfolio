import { Link } from "react-router-dom";
import { ArrowRight, Bug, FileCheck, Layers } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Project } from "@/types/project";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const typeColors: Record<string, string> = {
    Web: "bg-blue-500/20 text-blue-400 border-blue-500/30",
    Mobile: "bg-green-500/20 text-green-400 border-green-500/30",
    API: "bg-purple-500/20 text-purple-400 border-purple-500/30",
    "Web & Mobile": "bg-orange-500/20 text-orange-400 border-orange-500/30",
    "Full Stack": "bg-pink-500/20 text-pink-400 border-pink-500/30",
  };

  return (
    <Link
      to={`/projects/${project.id}`}
      className="glass-card p-6 group hover:border-primary/50 transition-all duration-300 block"
    >
      <div className="flex items-start justify-between mb-4">
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

      <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
        {project.title}
      </h3>

      <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
        {project.description}
      </p>

      {/* Metrics */}
      <div className="flex gap-4 mb-4">
        {project.metrics.testCases && (
          <div className="flex items-center gap-1.5 text-sm">
            <FileCheck className="w-4 h-4 text-primary" />
            <span className="text-muted-foreground">
              {project.metrics.testCases} tests
            </span>
          </div>
        )}
        {project.metrics.bugsFound && (
          <div className="flex items-center gap-1.5 text-sm">
            <Bug className="w-4 h-4 text-primary" />
            <span className="text-muted-foreground">
              {project.metrics.bugsFound} bugs
            </span>
          </div>
        )}
      </div>

      {/* Tools */}
      <div className="flex flex-wrap gap-2 mb-4">
        {project.tools.slice(0, 3).map((tool) => (
          <span key={tool} className="skill-badge text-xs">
            {tool}
          </span>
        ))}
        {project.tools.length > 3 && (
          <span className="skill-badge text-xs">
            +{project.tools.length - 3}
          </span>
        )}
      </div>

      <div className="flex items-center gap-2 text-primary text-sm font-medium group-hover:gap-3 transition-all">
        View Details
        <ArrowRight className="w-4 h-4" />
      </div>
    </Link>
  );
}

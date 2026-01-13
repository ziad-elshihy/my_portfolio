import { Link } from "react-router-dom";
import { ArrowRight, Bug, FileCheck } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Project } from "@/types/project";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const typeColors: Record<string, string> = {
    Web: "bg-blue-500/20 text-blue-500 dark:text-blue-400 border-blue-500/30",
    Mobile: "bg-green-500/20 text-green-600 dark:text-green-400 border-green-500/30",
    API: "bg-purple-500/20 text-purple-600 dark:text-purple-400 border-purple-500/30",
    "Web & Mobile": "bg-orange-500/20 text-orange-600 dark:text-orange-400 border-orange-500/30",
    "Full Stack": "bg-pink-500/20 text-pink-600 dark:text-pink-400 border-pink-500/30",
  };

  return (
    <Link
      to={`/projects/${project.id}`}
      className="glass-card p-6 group hover:border-primary/50 transition-all duration-300 flex flex-col h-full"
    >
      {/* Header with badges */}
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
              : "bg-yellow-500/20 text-yellow-600 dark:text-yellow-400 border-yellow-500/30"
          }
        >
          {project.status}
        </Badge>
      </div>

      {/* Title */}
      <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
        {project.title}
      </h3>

      {/* Description - clamped to 2 lines */}
      <p className="text-muted-foreground text-sm mb-4 line-clamp-2 flex-shrink-0">
        {project.description}
      </p>

      {/* Metrics */}
      <div className="flex gap-4 mb-4">
        {project.metrics.testCases && (
          <div className="flex items-center gap-1.5 text-sm">
            <FileCheck className="w-4 h-4 text-primary flex-shrink-0" />
            <span className="text-muted-foreground">
              {project.metrics.testCases} tests
            </span>
          </div>
        )}
        {project.metrics.bugsFound && (
          <div className="flex items-center gap-1.5 text-sm">
            <Bug className="w-4 h-4 text-primary flex-shrink-0" />
            <span className="text-muted-foreground">
              {project.metrics.bugsFound} bugs
            </span>
          </div>
        )}
      </div>

      {/* Tools - flex grow to push action to bottom */}
      <div className="flex flex-wrap gap-2 mb-4 flex-grow">
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

      {/* Action - pinned to bottom */}
      <div className="flex items-center gap-2 text-primary text-sm font-medium group-hover:gap-3 transition-all mt-auto pt-2 border-t border-border/50">
        View Details
        <ArrowRight className="w-4 h-4" />
      </div>
    </Link>
  );
}

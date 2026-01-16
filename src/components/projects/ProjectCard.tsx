import { Link } from "react-router-dom";
import { ArrowRight, Bug, FileCheck } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Project } from "@/types/project";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      to={`/projects/${project.id}`}
      className="glass-card p-6 flex flex-col h-full transition-all duration-normal ease-smooth hover:border-primary/40"
    >
      {/* Header */}
      <div className="flex justify-between mb-4">
        <Badge variant="outline" className="bg-primary/10 text-primary border-primary/30">
          {project.type}
        </Badge>
        <Badge
          variant="outline"
          className={
            project.status === "Completed"
              ? "bg-primary/20 text-primary border-primary/40"
              : "bg-yellow-500/20 text-yellow-400 border-yellow-500/30"
          }
        >
          {project.status}
        </Badge>
      </div>

      <h3 className="text-lg font-semibold mb-2 group-hover:text-primary">
        {project.title}
      </h3>

      <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
        {project.description}
      </p>

      <div className="flex gap-4 mb-4">
        {project.metrics.testCases && (
          <div className="flex items-center gap-1 text-sm">
            <FileCheck className="w-4 h-4 text-primary" />
            {project.metrics.testCases}
          </div>
        )}
        {project.metrics.bugsFound && (
          <div className="flex items-center gap-1 text-sm">
            <Bug className="w-4 h-4 text-primary" />
            {project.metrics.bugsFound}
          </div>
        )}
      </div>

      <div className="mt-auto pt-3 border-t border-border/50 flex items-center gap-2 text-primary text-sm font-medium">
        View Details
        <ArrowRight className="w-4 h-4" />
      </div>
    </Link>
  );
}

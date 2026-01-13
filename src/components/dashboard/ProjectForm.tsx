import { useState } from "react";
import { useProjects } from "@/context/ProjectContext";
import { Project, ProjectFormData } from "@/types/project";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { X } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface ProjectFormProps {
  project?: Project | null;
  onClose: () => void;
}

const emptyFormData: ProjectFormData = {
  title: "",
  type: "Web",
  description: "",
  role: "QC Engineer",
  responsibilities: [],
  tools: [],
  metrics: {},
  startDate: "",
  endDate: "",
  status: "Ongoing",
  featured: false,
};

export function ProjectForm({ project, onClose }: ProjectFormProps) {
  const { addProject, updateProject } = useProjects();
  const { toast } = useToast();
  const isEditing = !!project;

  const [formData, setFormData] = useState<ProjectFormData>(
    project
      ? {
          title: project.title,
          type: project.type,
          description: project.description,
          role: project.role,
          responsibilities: project.responsibilities,
          tools: project.tools,
          metrics: project.metrics,
          startDate: project.startDate,
          endDate: project.endDate,
          status: project.status,
          featured: project.featured,
        }
      : emptyFormData
  );

  const [responsibilitiesText, setResponsibilitiesText] = useState(
    formData.responsibilities.join("\n")
  );
  const [toolsText, setToolsText] = useState(formData.tools.join(", "));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const data: ProjectFormData = {
      ...formData,
      responsibilities: responsibilitiesText
        .split("\n")
        .map((r) => r.trim())
        .filter(Boolean),
      tools: toolsText
        .split(",")
        .map((t) => t.trim())
        .filter(Boolean),
    };

    if (isEditing && project) {
      updateProject(project.id, data);
      toast({ title: "Project updated successfully" });
    } else {
      addProject(data);
      toast({ title: "Project added successfully" });
    }

    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm p-4">
      <div className="glass-card w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-card border-b border-border p-4 flex items-center justify-between">
          <h2 className="text-xl font-semibold">
            {isEditing ? "Edit Project" : "Add New Project"}
          </h2>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X className="w-5 h-5" />
          </Button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          {/* Title */}
          <div className="space-y-2">
            <Label htmlFor="title">Project Title *</Label>
            <Input
              id="title"
              value={formData.title}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, title: e.target.value }))
              }
              placeholder="E-Commerce Platform Testing"
              required
              className="bg-secondary/50"
            />
          </div>

          {/* Type & Status */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>Project Type *</Label>
              <Select
                value={formData.type}
                onValueChange={(value) =>
                  setFormData((prev) => ({
                    ...prev,
                    type: value as Project["type"],
                  }))
                }
              >
                <SelectTrigger className="bg-secondary/50">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Web">Web</SelectItem>
                  <SelectItem value="Mobile">Mobile</SelectItem>
                  <SelectItem value="API">API</SelectItem>
                  <SelectItem value="Web & Mobile">Web & Mobile</SelectItem>
                  <SelectItem value="Full Stack">Full Stack</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label>Status *</Label>
              <Select
                value={formData.status}
                onValueChange={(value) =>
                  setFormData((prev) => ({
                    ...prev,
                    status: value as Project["status"],
                  }))
                }
              >
                <SelectTrigger className="bg-secondary/50">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Ongoing">Ongoing</SelectItem>
                  <SelectItem value="Completed">Completed</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Description */}
          <div className="space-y-2">
            <Label htmlFor="description">Description *</Label>
            <Textarea
              id="description"
              value={formData.description}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, description: e.target.value }))
              }
              placeholder="Brief description of the project and testing scope..."
              rows={3}
              required
              className="bg-secondary/50 resize-none"
            />
          </div>

          {/* Role */}
          <div className="space-y-2">
            <Label htmlFor="role">Your Role</Label>
            <Input
              id="role"
              value={formData.role}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, role: e.target.value }))
              }
              placeholder="QC Engineer"
              className="bg-secondary/50"
            />
          </div>

          {/* Responsibilities */}
          <div className="space-y-2">
            <Label htmlFor="responsibilities">
              Responsibilities (one per line)
            </Label>
            <Textarea
              id="responsibilities"
              value={responsibilitiesText}
              onChange={(e) => setResponsibilitiesText(e.target.value)}
              placeholder="Created test cases for all features&#10;Performed regression testing&#10;Documented bugs in Jira"
              rows={4}
              className="bg-secondary/50 resize-none"
            />
          </div>

          {/* Tools */}
          <div className="space-y-2">
            <Label htmlFor="tools">Tools (comma-separated)</Label>
            <Input
              id="tools"
              value={toolsText}
              onChange={(e) => setToolsText(e.target.value)}
              placeholder="Jira, Postman, Selenium, GitHub"
              className="bg-secondary/50"
            />
          </div>

          {/* Metrics */}
          <div className="grid grid-cols-3 gap-4">
            <div className="space-y-2">
              <Label htmlFor="testCases">Test Cases</Label>
              <Input
                id="testCases"
                type="number"
                value={formData.metrics.testCases || ""}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    metrics: {
                      ...prev.metrics,
                      testCases: e.target.value ? Number(e.target.value) : undefined,
                    },
                  }))
                }
                placeholder="150"
                className="bg-secondary/50"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="bugsFound">Bugs Found</Label>
              <Input
                id="bugsFound"
                type="number"
                value={formData.metrics.bugsFound || ""}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    metrics: {
                      ...prev.metrics,
                      bugsFound: e.target.value ? Number(e.target.value) : undefined,
                    },
                  }))
                }
                placeholder="25"
                className="bg-secondary/50"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="coverage">Coverage</Label>
              <Input
                id="coverage"
                value={formData.metrics.coverage || ""}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    metrics: { ...prev.metrics, coverage: e.target.value },
                  }))
                }
                placeholder="95%"
                className="bg-secondary/50"
              />
            </div>
          </div>

          {/* Dates */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="startDate">Start Date</Label>
              <Input
                id="startDate"
                value={formData.startDate}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, startDate: e.target.value }))
                }
                placeholder="2024-01"
                className="bg-secondary/50"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="endDate">End Date</Label>
              <Input
                id="endDate"
                value={formData.endDate || ""}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, endDate: e.target.value }))
                }
                placeholder="2024-03"
                className="bg-secondary/50"
              />
            </div>
          </div>

          {/* Featured */}
          <div className="flex items-center gap-3">
            <Switch
              id="featured"
              checked={formData.featured}
              onCheckedChange={(checked) =>
                setFormData((prev) => ({ ...prev, featured: checked }))
              }
            />
            <Label htmlFor="featured">Featured on homepage</Label>
          </div>

          {/* Actions */}
          <div className="flex gap-3 pt-4">
            <Button type="button" variant="outline" onClick={onClose} className="flex-1">
              Cancel
            </Button>
            <Button type="submit" className="flex-1">
              {isEditing ? "Update Project" : "Add Project"}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

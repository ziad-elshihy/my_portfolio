import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { Project, ProjectFormData } from "@/types/project";
import { initialProjects } from "@/data/initialProjects";

interface ProjectContextType {
  projects: Project[];
  addProject: (project: ProjectFormData) => void;
  updateProject: (id: string, project: ProjectFormData) => void;
  deleteProject: (id: string) => void;
  getProject: (id: string) => Project | undefined;
  getFeaturedProjects: () => Project[];
}

const ProjectContext = createContext<ProjectContextType | undefined>(undefined);

const STORAGE_KEY = "portfolio_projects";

export function ProjectProvider({ children }: { children: ReactNode }) {
  const [projects, setProjects] = useState<Project[]>(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        try {
          return JSON.parse(stored);
        } catch {
          return initialProjects;
        }
      }
    }
    return initialProjects;
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(projects));
  }, [projects]);

  const addProject = (projectData: ProjectFormData) => {
    const newProject: Project = {
      ...projectData,
      id: Date.now().toString(),
    };
    setProjects((prev) => [...prev, newProject]);
  };

  const updateProject = (id: string, projectData: ProjectFormData) => {
    setProjects((prev) =>
      prev.map((p) => (p.id === id ? { ...projectData, id } : p))
    );
  };

  const deleteProject = (id: string) => {
    setProjects((prev) => prev.filter((p) => p.id !== id));
  };

  const getProject = (id: string) => {
    return projects.find((p) => p.id === id);
  };

  const getFeaturedProjects = () => {
    return projects.filter((p) => p.featured);
  };

  return (
    <ProjectContext.Provider
      value={{
        projects,
        addProject,
        updateProject,
        deleteProject,
        getProject,
        getFeaturedProjects,
      }}
    >
      {children}
    </ProjectContext.Provider>
  );
}

export function useProjects() {
  const context = useContext(ProjectContext);
  if (context === undefined) {
    throw new Error("useProjects must be used within a ProjectProvider");
  }
  return context;
}

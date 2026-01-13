export interface Project {
  id: string;
  title: string;
  type: "Web" | "Mobile" | "API" | "Web & Mobile" | "Full Stack";
  description: string;
  role: string;
  responsibilities: string[];
  tools: string[];
  metrics: {
    testCases?: number;
    bugsFound?: number;
    coverage?: string;
    other?: string;
  };
  startDate: string;
  endDate?: string;
  status: "Completed" | "Ongoing";
  featured?: boolean;
}

export type ProjectFormData = Omit<Project, "id">;

import { Bug, AlertTriangle, CheckCircle, XCircle, ChevronDown } from "lucide-react";
import { useState } from "react";
import ScrollReveal from "./ScrollReveal";
import StaggeredList from "./StaggeredList";
import { SectionHeader } from "./SectionHeader";

interface BugReport {
   id: string;
   title: string;
   severity: "Critical" | "High" | "Medium" | "Low";
   steps: string[];
   expected: string;
   actual: string;
   status: "Fixed" | "Open";
}

const bugSamples: BugReport[] = [
   {
      id: "BUG-001",
      title: "Login form accepts empty credentials",
      severity: "Critical",
      steps: [
         "Navigate to login page",
         "Leave username and password fields empty",
         'Click "Login" button',
      ],
      expected:
         'Validation error should display "Username and password are required"',
      actual: "Form submits with empty fields and shows server error",
      status: "Fixed",
   },
   {
      id: "BUG-002",
      title: "Search results not filtered by date range",
      severity: "High",
      steps: [
         "Navigate to search page",
         "Set date range filter from Jan 1 to Jan 31",
         "Perform search",
      ],
      expected: "Only results within the date range should be displayed",
      actual: "All results are shown regardless of date filter",
      status: "Fixed",
   },
   {
      id: "BUG-003",
      title: "Mobile menu overlaps content",
      severity: "Medium",
      steps: [
         "Open app on mobile device (< 640px)",
         "Open navigation menu",
         "Scroll down the page",
      ],
      expected: "Menu should close when scrolling or stay fixed",
      actual:
         "Menu overlaps page content and becomes unreadable",
      status: "Fixed",
   },
];

const severityStyles = {
   Critical: "text-red-500 bg-red-500/10",
   High: "text-orange-500 bg-orange-500/10",
   Medium: "text-yellow-500 bg-yellow-500/10",
   Low: "text-green-500 bg-green-500/10",
};

const BugSamples = () => {
   const [openBug, setOpenBug] = useState<string | null>(null);

   return (
      <section className="py-16 md:py-24 relative">
         <div className="absolute inset-0 gradient-mesh opacity-20" />

         <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-5xl mx-auto">
               <ScrollReveal>
                  <SectionHeader
                     title="Bug Report Samples"
                     subtitle="Examples of structured, well-documented bug reports"
                  />
               </ScrollReveal>

               <StaggeredList className="space-y-6" staggerDelay={0.1}>
                  {bugSamples.map((bug) => {
                     const isOpen = openBug === bug.id;

                     return (
                        <div
                           key={bug.id}
                           className="glass-card p-6 transition-all duration-normal ease-smooth"
                        >
                           {/* Header */}
                           <button
                              onClick={() =>
                                 setOpenBug(isOpen ? null : bug.id)
                              }
                              className="w-full text-left"
                           >
                              <div className="flex flex-wrap items-start justify-between gap-4 mb-2">
                                 <div className="flex items-center gap-3">
                                    <Bug className="w-5 h-5 text-primary" />
                                    <div>
                                       <span className="text-xs font-mono text-muted-foreground">
                                          {bug.id}
                                       </span>
                                       <h3 className="font-semibold">
                                          {bug.title}
                                       </h3>
                                    </div>
                                 </div>

                                 <div className="flex items-center gap-2">
                                    <span
                                       className={`px-2 py-1 text-xs font-medium rounded ${severityStyles[bug.severity]}`}
                                    >
                                       {bug.severity}
                                    </span>

                                    <span
                                       className={`flex items-center gap-1 px-2 py-1 text-xs font-medium rounded ${bug.status === "Fixed"
                                             ? "text-green-500 bg-green-500/10"
                                             : "text-orange-500 bg-orange-500/10"
                                          }`}
                                    >
                                       {bug.status === "Fixed" ? (
                                          <CheckCircle className="w-3 h-3" />
                                       ) : (
                                          <AlertTriangle className="w-3 h-3" />
                                       )}
                                       {bug.status}
                                    </span>

                                    <ChevronDown
                                       className={`w-4 h-4 text-muted-foreground transition-transform ${isOpen ? "rotate-180" : ""
                                          }`}
                                    />
                                 </div>
                              </div>
                           </button>

                           {/* Details */}
                           {isOpen && (
                              <div className="mt-4 space-y-4">
                                 {/* Steps */}
                                 <div>
                                    <h4 className="text-sm font-medium mb-2">
                                       Steps to Reproduce
                                    </h4>
                                    <ol className="space-y-1 text-sm text-muted-foreground list-decimal list-inside">
                                       {bug.steps.map((step, i) => (
                                          <li key={i}>{step}</li>
                                       ))}
                                    </ol>
                                 </div>

                                 {/* Expected vs Actual */}
                                 <div className="grid sm:grid-cols-2 gap-4">
                                    <div className="p-3 rounded-lg border border-green-500/20 bg-green-500/5">
                                       <div className="flex items-center gap-2 text-green-500 text-sm font-medium mb-1">
                                          <CheckCircle className="w-4 h-4" />
                                          Expected
                                       </div>
                                       <p className="text-sm text-muted-foreground">
                                          {bug.expected}
                                       </p>
                                    </div>

                                    <div className="p-3 rounded-lg border border-red-500/20 bg-red-500/5">
                                       <div className="flex items-center gap-2 text-red-500 text-sm font-medium mb-1">
                                          <XCircle className="w-4 h-4" />
                                          Actual
                                       </div>
                                       <p className="text-sm text-muted-foreground">
                                          {bug.actual}
                                       </p>
                                    </div>
                                 </div>
                              </div>
                           )}
                        </div>
                     );
                  })}
               </StaggeredList>
            </div>
         </div>
      </section>
   );
};

export default BugSamples;

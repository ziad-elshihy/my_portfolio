import { Layout } from "@/components/layout/Layout";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { experience } from "@/config/siteConfig";

const Experience = () => {
  return (
    <Layout>
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Experience"
            subtitle="My journey in software quality assurance"
          />

          <div className="max-w-3xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-0 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-border" />

              {experience.map((exp, index) => (
                <div
                  key={exp.id}
                  className={`relative flex items-start mb-12 last:mb-0 ${
                    index % 2 === 0 ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 timeline-dot" />

                  {/* Content */}
                  <div
                    className={`ml-8 md:ml-0 md:w-1/2 ${
                      index % 2 === 0 ? "md:pl-12" : "md:pr-12 md:text-right"
                    }`}
                  >
                    <div
                      className={`glass-card p-6 hover:border-primary/50 transition-colors animate-fade-in ${
                        index % 2 === 0 ? "" : "md:ml-auto"
                      }`}
                      style={{ animationDelay: `${index * 0.2}s` }}
                    >
                      <span className="text-sm text-primary font-medium">
                        {exp.period}
                      </span>
                      <h3 className="text-xl font-semibold mt-1">{exp.title}</h3>
                      <p className="text-muted-foreground text-sm mb-3">
                        {exp.company}
                      </p>
                      <p className="text-muted-foreground text-sm mb-4">
                        {exp.description}
                      </p>
                      <ul className={`space-y-2 ${index % 2 === 0 ? "" : "md:ml-auto"}`}>
                        {exp.highlights.map((highlight, i) => (
                          <li
                            key={i}
                            className={`flex items-start gap-2 text-sm text-muted-foreground ${
                              index % 2 === 0 ? "" : "md:flex-row-reverse md:text-right"
                            }`}
                          >
                            <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Experience;

import { Layout } from "@/components/layout/Layout";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { certifications } from "@/config/siteConfig";
import { Award, Calendar } from "lucide-react";

const Certifications = () => {
  return (
    <Layout>
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Certifications"
            subtitle="Professional certifications and completed courses"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {certifications.map((cert, index) => (
              <div
                key={cert.id}
                className="glass-card p-6 hover:border-primary/50 transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center mb-4">
                  <Award className="w-7 h-7 text-primary" />
                </div>

                <h3 className="text-lg font-semibold mb-2">{cert.title}</h3>

                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                  <span>{cert.issuer}</span>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {cert.date}
                  </div>
                </div>

                <p className="text-sm text-muted-foreground">
                  {cert.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Certifications;

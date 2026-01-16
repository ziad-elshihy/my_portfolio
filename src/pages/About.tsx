import { Bug, TestTube2, Smartphone, Database } from 'lucide-react';
import { personalData } from '@/data/personalData';
import ScrollReveal from '../components/ui/ScrollReveal';
import StaggeredList from '../components/ui/StaggeredList';
import { SectionHeader } from '@/components/ui/SectionHeader';

const skills = [
  { icon: TestTube2, title: 'Manual Testing', description: 'Functional, Regression, Smoke, Sanity, Usability, Design Testing', color: 'hsl(172, 66%, 50%)' },
  { icon: Bug, title: 'Bug Tracking', description: 'Expert in Jira for bug reporting, tracking, and verification', color: 'hsl(270, 70%, 60%)' },
  { icon: Smartphone, title: 'Mobile Testing', description: 'Cross-platform testing for Android and iOS applications', color: 'hsl(330, 80%, 60%)' },
  { icon: Database, title: 'API & Database', description: 'Postman for API testing, SQL for database validation', color: 'hsl(45, 100%, 60%)' },
];

const About = () => {
  return (
    <section id="about" className="py-24 md:py-32 relative">
      <div className="absolute inset-0 gradient-mesh opacity-50" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}

          <ScrollReveal>
            <SectionHeader
              title="Quality Assurance Expert"
              subtitle="ISTQB CTFL-certified Software Tester dedicated to ensuring 
                high-quality user experiences across all platforms."
            />
          </ScrollReveal>
          {/* Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Text Content */}
            <ScrollReveal delay={0.1}>
              <div className="space-y-6">
                <p className="text-muted-foreground leading-relaxed">
                  {personalData.summary}
                </p>
                
                {/* Experience */}
                {personalData.experience.map((exp, index) => (
                  <div key={index} className="glass-card p-4">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h4 className="font-semibold">{exp.company}</h4>
                        <p className="text-sm text-primary">{exp.role}</p>
                      </div>
                      <span className="text-xs text-muted-foreground">{exp.period}</span>
                    </div>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      {exp.highlights.slice(0, 3).map((highlight, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
                
                {/* Tech Stack */}
                <div className="pt-4">
                  <p className="text-sm font-mono text-primary mb-3">Skills & Tools:</p>
                  <div className="flex flex-wrap gap-2">
                    {personalData.skills.slice(0, 8).map((skill) => (
                      <span 
                        key={skill}
                        className="px-3 py-1 text-sm bg-secondary rounded-full text-muted-foreground hover:text-foreground hover:bg-primary/10 transition-colors"
                      >
                        {skill.includes('(') ? skill.split('(')[0].trim() : skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Image/Visual */}
            <ScrollReveal delay={0.2} direction="right">
              <div className="relative">
                <div className="aspect-square rounded-2xl overflow-hidden glass-card p-1">
                  <div className="w-full h-full rounded-xl bg-gradient-to-br from-primary/20 via-neon-purple/10 to-neon-pink/20 flex items-center justify-center">
                    <div className="text-center p-8">
                      <div className="w-32 h-32 mx-auto mb-6 rounded-full flex items-center justify-center overflow-hidden border-2 border-primary">
                        <img src="/personal_img.jpeg" alt="" />
                      </div>
                      <h3 className="font-semibold mb-2">{personalData.name.split(' ')[0]}</h3>
                      <p className="text-muted-foreground text-sm mb-4">
                        {personalData.location}
                      </p>
                      
                      {/* Certificates */}
                      <div className="space-y-2">
                        {personalData.certificates.slice(0, 2).map((cert, i) => (
                          <span 
                            key={i}
                            className="block text-xs px-3 py-1 bg-primary/10 text-primary rounded-full"
                          >
                            {cert}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Decorative Elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-2xl" />
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-neon-purple/20 rounded-full blur-2xl" />
              </div>
            </ScrollReveal>
          </div>

          {/* Skills Grid */}
          <StaggeredList className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill) => {
              const Icon = skill.icon;
              return (
                <div
                  key={skill.title}
                  className="glass-card p-6 group hover:scale-105 transition-all duration-300"
                  style={{
                    '--glow-color': skill.color,
                  } as React.CSSProperties}
                >
                  <div 
                    className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center mb-4 
                      group-hover:bg-primary/10 transition-colors"
                  >
                    <Icon 
                      className="w-6 h-6 text-foreground/70 group-hover:text-foreground transition-all duration-300
                        group-hover:drop-shadow-[0_0_8px_var(--glow-color)]"
                    />
                  </div>
                  <h3 className="font-semibold mb-2">{skill.title}</h3>
                  <p className="text-sm text-muted-foreground">{skill.description}</p>
                </div>
              );
            })}
          </StaggeredList>
        </div>
      </div>
    </section>

  );
};

export default About;
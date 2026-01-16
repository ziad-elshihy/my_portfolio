import { TestTube2, Wrench, Code, Bug, Smartphone, Database, GitBranch, FileJson, Workflow, Coffee } from 'lucide-react';
import ScrollReveal from '../components/ui/ScrollReveal';
import { personalData } from '@/data/personalData';
import { SectionHeader } from '@/components/ui/SectionHeader';

interface SkillCategory {
  title: string;
  icon: React.ElementType;
  color: string;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    title: 'Testing',
    icon: TestTube2,
    color: 'hsl(172, 66%, 50%)',
    skills: [
      'Manual Testing',
      'Functional Testing',
      'Regression Testing',
      'Smoke Testing',
      'Sanity Testing',
      'Usability Testing',
      'API Testing',
      'Mobile Testing',
    ],
  },
  {
    title: 'Tools',
    icon: Wrench,
    color: 'hsl(270, 70%, 60%)',
    skills: [
      'Postman',
      'Jira',
      'Trello',
      'Zephyr Scale',
      'Git / GitHub',
      'Google Sheets',
    ],
  },
  {
    title: 'Technical',
    icon: Code,
    color: 'hsl(45, 100%, 60%)',
    skills: [
      'SQL',
      'JSON & API Validation',
      'SDLC / STLC',
      'Java & OOP (Basic)',
      'JavaScript (Basic)',
    ],
  },
];

const iconMap: { [key: string]: React.ElementType } = {
  'Manual Testing': TestTube2,
  'Functional Testing': TestTube2,
  'Regression Testing': TestTube2,
  'Smoke Testing': TestTube2,
  'Sanity Testing': TestTube2,
  'Usability Testing': TestTube2,
  'API Testing': FileJson,
  'Mobile Testing': Smartphone,
  'Postman': FileJson,
  'Jira': Bug,
  'Trello': Workflow,
  'Zephyr Scale': Workflow,
  'Git / GitHub': GitBranch,
  'Google Sheets': Database,
  'SQL': Database,
  'JSON & API Validation': FileJson,
  'SDLC / STLC': Workflow,
  'Java & OOP (Basic)': Coffee,
  'JavaScript (Basic)': Code,
};

const Skills = () => {
  return (
    <section id="skills" className="py-12 md:py-32 lg:24 relative">
      <div className="absolute inset-0 gradient-mesh opacity-30 " />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <ScrollReveal>
            <SectionHeader
              title="Skills & Tools"
              subtitle="A comprehensive toolkit for ensuring software quality"
            />
          </ScrollReveal>

          {/* Skills Categories */}
          <div className="grid md:grid-cols-3 gap-8 ">
            {skillCategories.map((category, categoryIndex) => {
              const CategoryIcon = category.icon;
              return (
                <ScrollReveal key={category.title} delay={categoryIndex * 0.1}>
                  <div
                    className="glass-card p-6 h-full group transition-all duration-300
                    text-foreground/70 group-hover:text-foreground 
                        group-hover:drop-shadow-[0_0_8px_var(--glow-color)]
                    "
                    style={{
                      '--glow-color': category.color,
                    } as React.CSSProperties}
                  >
                    {/* Category Header */}
                    <div className="flex items-center gap-3 mb-6 ">
                      <div
                        className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center
                        transition-all duration-300
                    text-foreground/70 group-hover:text-foreground 
                        group-hover:drop-shadow-[0_0_8px_var(--glow-color)]"
                        style={{ background: `${category.color}20` }}
                      >
                        <CategoryIcon
                          className="w-6 h-6"
                          style={{ color: category.color }}
                        />
                      </div>
                      <h3 className="text-xl font-semibold">{category.title}</h3>
                    </div>

                    {/* Skills List */}
                    <ul className="space-y-3">
                      {category.skills.map((skill) => {
                        const SkillIcon = iconMap[skill] || Code;
                        return (
                          <li
                            key={skill}
                            className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors group"
                          >
                            <SkillIcon className="w-4 h-4 text-primary/60 group-hover:text-primary transition-colors" />
                            <span className="text-sm">{skill}</span>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>

          {/* Certifications */}
          <ScrollReveal delay={0.3}>
            <div className="mt-16 text-center">
              <h3 className="text-lg font-semibold mb-6">Certifications</h3>
              <div className="flex flex-wrap justify-center gap-3">
                {personalData.certificates.map((cert) => (
                  <span
                    key={cert}
                    className="px-4 py-2 text-sm bg-primary/10 text-primary rounded-full font-medium"
                  >
                    {cert}
                  </span>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default Skills;
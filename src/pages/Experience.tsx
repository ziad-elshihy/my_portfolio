import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Calendar } from 'lucide-react';
import { personalData } from '@/data/personalData';
import ScrollReveal from '../components/ui/ScrollReveal';
import { SectionHeader } from '@/components/ui/SectionHeader';

interface TimelineItem {
  type: 'work' | 'education';
  title: string;
  subtitle: string;
  period: string;
  description?: string;
  highlights?: string[];
}

const timelineItems: TimelineItem[] = [
  {
    type: 'work',
    title: personalData.experience[0].company,
    subtitle: personalData.experience[0].role,
    period: personalData.experience[0].period,
    highlights: personalData.experience[0].highlights,
  },
  {
    type: 'education',
    title: personalData.education.institution,
    subtitle: personalData.education.degree,
    period: personalData.education.period,
  },
];

const Experience = () => {
  return (
    <section className="py-16 md:py-24 relative">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <SectionHeader
              title="Experience & Education"
              subtitle="Journey through my professional and academic milestones"
            />
          </ScrollReveal>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2" />

            {timelineItems.map((item, index) => {
              const isLeft = index % 2 === 0;
              const Icon = item.type === 'work' ? Briefcase : GraduationCap;
              
              return (
                <ScrollReveal 
                  key={index} 
                  delay={index * 0.15}
                  direction={isLeft ? 'left' : 'right'}
                >
                  <div className={`relative flex items-start mb-12 ${
                    isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}>
                    {/* Timeline Dot */}
                    <div className="absolute left-4 md:left-1/2 w-8 h-8 -translate-x-1/2 rounded-full 
                      bg-background border-2 border-primary flex items-center justify-center z-10">
                      <Icon className="w-4 h-4 text-primary" />
                    </div>

                    {/* Content Card */}
                    <div className={`ml-16 md:ml-0 md:w-[calc(50%-2rem)] ${
                      isLeft ? 'md:pr-8' : 'md:pl-8'
                    }`}>
                      <div className="glass-card p-5  transition-all duration-normal ease-smooth">
                        <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
                          <Calendar className="w-3 h-3" />
                          {item.period}
                        </div>
                        <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
                        <p className="text-primary text-sm mb-3">{item.subtitle}</p>
                        
                        {item.highlights && (
                          <ul className="space-y-1.5">
                            {item.highlights.slice(0, 4).map((highlight, i) => (
                              <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                                <span className="text-primary mt-1">•</span>
                                {highlight}
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
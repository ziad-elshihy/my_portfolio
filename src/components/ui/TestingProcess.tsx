import { motion } from 'framer-motion';
import { FileText, ClipboardList, Play, Bug, RefreshCw, CheckCircle } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import { SectionHeader } from './SectionHeader';

const processSteps = [
   {
      icon: FileText,
      title: 'Requirements',
      description: 'Analyze and understand project requirements',
      color: 'hsl(210, 100%, 60%)',
   },
   {
      icon: ClipboardList,
      title: 'Test Cases',
      description: 'Design comprehensive test scenarios',
      color: 'hsl(270, 70%, 60%)',
   },
   {
      icon: Play,
      title: 'Execution',
      description: 'Execute tests systematically',
      color: 'hsl(142, 70%, 50%)',
   },
   {
      icon: Bug,
      title: 'Bug Reporting',
      description: 'Document and track defects',
      color: 'hsl(0, 80%, 60%)',
   },
   {
      icon: RefreshCw,
      title: 'Retest',
      description: 'Verify bug fixes thoroughly',
      color: 'hsl(25, 95%, 55%)',
   },
   {
      icon: CheckCircle,
      title: 'Regression',
      description: 'Ensure no new issues introduced',
      color: 'hsl(172, 66%, 50%)',
   },
];

const TestingProcess = () => {
   return (
      <section className="py-16 md:py-24 relative overflow-hidden">
         <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-6xl mx-auto">
               <ScrollReveal>
                  <SectionHeader
                     title="Testing Process"
                     subtitle="A systematic approach to ensure software quality."
                  />
               </ScrollReveal>

            {/* Process Flow */}
            <div className="relative">
               {/* Connection Line - Desktop */}
               <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-border -translate-y-1/2" />

               <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                  {processSteps.map((step, index) => {
                     const Icon = step.icon;
                     return (
                        <ScrollReveal key={step.title} delay={index * 0.1}>
                           <div className="relative flex flex-col items-center text-center group">
                              {/* Step Number */}
                              <div
                                 className="absolute -top-2 -right-2 w-6 h-6 rounded-full text-xs font-bold 
                          flex items-center justify-center z-10"
                                 style={{
                                    backgroundColor: step.color,
                                    color: 'hsl(var(--background))',
                                 }}
                              >
                                 {index + 1}
                              </div>

                              {/* Icon Container */}
                              <motion.div
                                 whileHover={{ scale: 1.1 }}
                                 className="w-16 h-16 rounded-2xl bg-secondary flex items-center justify-center 
                          mb-4 relative z-10 group-hover:shadow-lg transition-shadow"
                                 style={{
                                    '--glow-color': step.color,
                                 } as React.CSSProperties}
                              >
                                 <Icon
                                    className="w-7 h-7 transition-all duration-300 group-hover:drop-shadow-[0_0_8px_var(--glow-color)]"
                                    style={{ color: step.color }}
                                 />
                              </motion.div>

                              {/* Title */}
                              <h3 className="font-semibold text-sm mb-1">{step.title}</h3>

                              {/* Description */}
                              <p className="text-xs text-muted-foreground leading-relaxed">
                                 {step.description}
                              </p>

                              {/* Arrow - Desktop Only */}
                              {index < processSteps.length - 1 && (
                                 <div className="hidden lg:block absolute top-8 -right-3 text-border">
                                    →
                                 </div>
                              )}
                           </div>
                        </ScrollReveal>
                     );
                  })}
               </div>
            </div>
         </div>
      </div>
      </section >
   );
};

export default TestingProcess;
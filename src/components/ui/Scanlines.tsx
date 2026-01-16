import { motion } from 'framer-motion';

const Scanlines = () => {
  return (
    <>
      {/* Static scanlines overlay */}
      <div 
        className="fixed inset-0 pointer-events-none z-[90] opacity-[0.02]"
        style={{
          backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, hsl(180 100% 50% / 0.1) 2px, hsl(180 100% 50% / 0.1) 4px)',
        }}
      />

      {/* Moving scan line */}
      <motion.div
        className="fixed left-0 right-0 h-[2px] pointer-events-none z-[91]"
        style={{
          background: 'linear-gradient(90deg, transparent, hsl(180 100% 50% / 0.1), transparent)',
        }}
        animate={{
          top: ['-2px', '100vh'],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'linear',
        }}
      />

      {/* Vignette effect */}
      <div 
        className="fixed inset-0 pointer-events-none z-[89]"
        style={{
          background: 'radial-gradient(ellipse at center, transparent 0%, transparent 60%, hsl(0 0% 0% / 0.3) 100%)',
        }}
      />
    </>
  );
};

export default Scanlines;
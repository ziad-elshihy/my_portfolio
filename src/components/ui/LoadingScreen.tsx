import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { siteConfig } from '@/config/siteConfig';

const bootSequence = [
  { text: '> Initializing system...', delay: 0 },
  { text: '> Loading portfolio modules...', delay: 400 },
  { text: '> Connecting to database...', delay: 800 },
  { text: '> Fetching projects...', delay: 1200 },
  { text: '> Compiling skills matrix...', delay: 1600 },
  { text: '> Rendering UI components...', delay: 2000 },
  { text: '> System ready.', delay: 2400 },
];

const LoadingScreen = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [visibleLines, setVisibleLines] = useState<number[]>([]);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Show lines progressively
    bootSequence.forEach((_, index) => {
      setTimeout(() => {
        setVisibleLines(prev => [...prev, index]);
        setProgress(((index + 1) / bootSequence.length) * 100);
      }, bootSequence[index].delay);
    });

    // Hide loading screen after boot sequence
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.1 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          className="fixed inset-0 z-[100] bg-background flex items-center justify-center"
        >
          {/* Scanlines overlay */}
          <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
            <div className="w-full h-full" style={{
              backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, currentColor 2px, currentColor 4px)',
            }} />
          </div>

          {/* Grid pattern */}
          <div className="absolute inset-0 grid-pattern opacity-20" />

          {/* Glow effect at top */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/20 blur-[100px] rounded-full" />

          <div className="relative z-10 w-full max-w-lg px-6">
            {/* Terminal window */}
            <div className="border border-primary/30 rounded-lg overflow-hidden bg-background/80 backdrop-blur-sm">
              {/* Terminal header */}
              <div className="flex items-center gap-2 px-4 py-3 border-b border-primary/20 bg-primary/5">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/70" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                  <div className="w-3 h-3 rounded-full bg-green-500/70" />
                </div>
                <span className="text-xs font-mono text-muted-foreground ml-2">ziad@portfolio ~ boot</span>
              </div>

              {/* Terminal content */}
              <div className="p-4 font-mono text-sm min-h-[200px]">
                {bootSequence.map((line, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    animate={visibleLines.includes(index) ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.3 }}
                    className={`mb-1 ${
                      index === bootSequence.length - 1 
                        ? 'text-primary' 
                        : 'text-muted-foreground'
                    }`}
                  >
                    {visibleLines.includes(index) && (
                      <>
                        {line.text}
                        {index === visibleLines[visibleLines.length - 1] && index !== bootSequence.length - 1 && (
                          <span className="inline-block w-2 h-4 bg-primary ml-1 animate-pulse" />
                        )}
                      </>
                    )}
                  </motion.div>
                ))}
              </div>

              {/* Progress bar */}
              <div className="px-4 pb-4">
                <div className="h-1 bg-primary/20 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-primary"
                    initial={{ width: 0 }}
                    animate={{ width: `${progress}%` }}
                    transition={{ duration: 0.3 }}
                    style={{ boxShadow: '0 0 10px hsl(180 100% 50% / 0.8)' }}
                  />
                </div>
                <div className="flex justify-between mt-2 text-xs text-muted-foreground font-mono">
                  <span>Loading...</span>
                  <span>{Math.round(progress)}%</span>
                </div>
              </div>
            </div>

            {/* Brand */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-center mt-8"
            >
              <h1 className="text-2xl font-bold neon-text">{siteConfig.name.toUpperCase()}</h1>
              <p className="text-sm text-muted-foreground font-mono mt-1">{siteConfig.title}</p>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
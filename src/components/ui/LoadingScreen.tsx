import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { siteConfig } from "@/config/siteConfig";

const HAS_LOADED_KEY = "portfolio_loaded_once";

const bootSequence = [
  { text: "> Initializing system...", delay: 0 },
  { text: "> Loading portfolio modules...", delay: 400 },
  { text: "> Connecting to database...", delay: 800 },
  { text: "> Fetching projects...", delay: 1200 },
  { text: "> Compiling skills matrix...", delay: 1600 },
  { text: "> Rendering UI components...", delay: 2000 },
  { text: "> System ready.", delay: 2400 },
];

const LoadingScreen = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [visibleLines, setVisibleLines] = useState<number[]>([]);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const alreadyLoaded = sessionStorage.getItem(HAS_LOADED_KEY);

    if (alreadyLoaded) return;

    setIsLoading(true);

    const timers: NodeJS.Timeout[] = [];

    bootSequence.forEach((_, index) => {
      timers.push(
        setTimeout(() => {
          setVisibleLines((prev) => [...prev, index]);
          setProgress(Math.round(((index + 1) / bootSequence.length) * 100));
        }, bootSequence[index].delay)
      );
    });

    timers.push(
      setTimeout(() => {
        sessionStorage.setItem(HAS_LOADED_KEY, "true");
        setIsLoading(false);
      }, 3000)
    );

    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
          className="fixed inset-0 z-[100] bg-background flex items-center justify-center px-4"
        >
          {/* Scanlines (خفيفة) */}
          <div className="absolute inset-0 pointer-events-none opacity-[0.025]">
            <div
              className="w-full h-full"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(0deg, transparent, transparent 2px, currentColor 2px, currentColor 4px)",
              }}
            />
          </div>

          {/* Grid */}
          <div className="absolute inset-0 grid-pattern opacity-15" />

          {/* Blue glow */}
          <div
            className="
              absolute top-0 left-1/2 -translate-x-1/2
              w-[420px] h-[200px]
              md:w-[520px] md:h-[260px]
              bg-primary/20
              blur-[90px] md:blur-[120px]
              rounded-full
            "
          />

          <div className="relative z-10 w-full max-w-md sm:max-w-lg">
            {/* Terminal */}
            <div className="border border-primary/30 rounded-lg overflow-hidden bg-background/85 backdrop-blur-sm">
              {/* Header */}
              <div className="flex items-center gap-2 px-4 py-3 border-b border-primary/20 bg-primary/5">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/70" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                  <div className="w-3 h-3 rounded-full bg-green-500/70" />
                </div>
                <span className="text-xs font-mono text-muted-foreground ml-2 truncate">
                  ziad@portfolio ~ boot
                </span>
              </div>

              {/* Content */}
              <div className="p-4 font-mono text-sm min-h-[160px] sm:min-h-[200px]">
                {bootSequence.map((line, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 6 }}
                    animate={
                      visibleLines.includes(index)
                        ? { opacity: 1, y: 0 }
                        : {}
                    }
                    transition={{ duration: 0.25, ease: "easeOut" }}
                    className={`mb-1 ${
                      index === bootSequence.length - 1
                        ? "text-primary"
                        : "text-muted-foreground"
                    }`}
                  >
                    {visibleLines.includes(index) && (
                      <>
                        {line.text}
                        {index === visibleLines.at(-1) &&
                          index !== bootSequence.length - 1 && (
                            <span className="inline-block w-2 h-4 bg-primary ml-1 animate-pulse" />
                          )}
                      </>
                    )}
                  </motion.div>
                ))}
              </div>

              {/* Progress */}
              <div className="px-4 pb-4">
                <div className="h-1 bg-primary/20 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-primary"
                    animate={{ width: `${progress}%` }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    style={{ boxShadow: "0 0 10px hsl(var(--primary) / 0.6)" }}
                  />
                </div>

                <div className="flex justify-between mt-2 text-xs text-muted-foreground font-mono">
                  <span>Loading…</span>
                  <span>{progress}%</span>
                </div>
              </div>
            </div>

            {/* Brand */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-center mt-6"
            >
              <h1 className="text-xl sm:text-2xl font-bold gradient-text tracking-wide">
                {siteConfig.name.toUpperCase()}
              </h1>
              <p className="text-xs sm:text-sm text-muted-foreground font-mono mt-1">
                {siteConfig.title}
              </p>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;

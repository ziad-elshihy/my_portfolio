import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      onClick={toggleTheme}
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
      className="
        group relative
        w-10 h-10
        flex items-center justify-center
        rounded-full
        transition-all duration-300
      "
    >
      {/* Glow */}
      <span
        className={`
          absolute inset-0 rounded-full
          opacity-0 group-hover:opacity-100
          transition-opacity duration-300 
          ${
            isDark
              ? "shadow-[0_0_18px_rgba(251,191,36,0.8)] bg-[rgba(251,190,36,0.65)]"
              : "shadow-[0_0_18px_rgba(96,165,250,0.8)] bg-[rgba(96,165,250,0.55)]"
          }
        `}
      />

      {/* Icon */}
      <span
        className="
          relative z-10
          transition-all duration-300
          group-hover:scale-110
          
        "
      >
        {isDark ? (
          <Sun className="w-5 h-5 text-foreground group-hover:rotate-12 transition-transform" />
        ) : (
          <Moon className="w-5 h-5 text-foreground group-hover:-rotate-12 transition-transform " />
        )}
      </span>

      {/* Tooltip */}
      <span
        className="
          pointer-events-none
          absolute -bottom-9 left-1/2 -translate-x-1/2
          scale-0 group-hover:scale-100
          transition-transform duration-200
          rounded-md bg-black px-2 py-1
          text-xs text-white whitespace-nowrap
        "
      >
        {isDark ? "Light mode" : "Dark mode"}
      </span>
    </button>
  );
}

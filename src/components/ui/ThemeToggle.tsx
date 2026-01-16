import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className="
        group relative
        w-10 h-10
        rounded-full
        flex items-center justify-center
        transition-all duration-300 ease-smooth
        hover:scale-105
        active:scale-95
      "
    >
      {/* Glow */}
      <span
        className="
          absolute inset-0 rounded-full
          opacity-0 group-hover:opacity-100
          transition-opacity duration-300
        "
        style={{
          boxShadow: isDark
            ? "0 0 14px hsl(50 100% 60% / 0.7)" // dark → soft yellow
            : "0 0 14px hsl(210 90% 55% / 0.7)", // light → blue
        }}
      />

      {/* Icon */}
      <span
        className="
          relative z-10
          transition-transform duration-300 ease-smooth
          group-hover:rotate-12
        "
      >
        {isDark ? (
          <Sun className="w-5 h-5 text-[hsl(50,100%,60%)]" />
        ) : (
          <Moon className="w-5 h-5 text-primary" />
        )}
      </span>
    </button>
  );
}

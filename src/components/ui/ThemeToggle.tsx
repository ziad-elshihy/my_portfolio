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
      {/* Hover glow */}
      <span
        className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          boxShadow: isDark
            ? "0 0 16px hsl(60,100%,50%)"
            : "0 0 16px hsl(210,90%,50%)",
        }}
      />

      {/* Icon wrapper */}
      <span
        className="
          relative z-10
          transition-all duration-300 ease-smooth
          group-hover:rotate-12
        "
      >
        {isDark ? (
          <Sun className="w-5 h-5 text-[hsl(55,100%,50%)]" />
        ) : (
          <Moon className="w-5 h-5 text-[hsl(210,90%,50%)]" />
        )}
      </span>
    </button>
  );
}

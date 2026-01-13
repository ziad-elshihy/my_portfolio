interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}

export function SectionHeader({
  title,
  subtitle,
  align = "center",
}: SectionHeaderProps) {
  return (
    <div
      className={`mb-12 ${
        align === "center" ? "text-center" : "text-left"
      }`}
    >
      <h2 className="section-title">
        {title.split(" ").slice(0, -1).join(" ")}{" "}
        <span className="gradient-text">
          {title.split(" ").slice(-1)}
        </span>
      </h2>
      {subtitle && (
        <p
          className={`section-subtitle ${
            align === "center" ? "mx-auto" : ""
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}

interface SectionHeadingProps {
  eyebrow?: string;
  heading: string;
  subheading?: string;
  align?: "left" | "center";
  dark?: boolean;
  headingAs?: "h1" | "h2" | "h3";
  headingSize?: "display" | "h1";
  className?: string;
}

export function SectionHeading({
  eyebrow,
  heading,
  subheading,
  align = "center",
  dark = false,
  headingAs: Tag = "h2",
  headingSize = "h1",
  className = "",
}: SectionHeadingProps) {
  const alignment = align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <div className={`max-w-2xl ${alignment} ${className}`}>
      {eyebrow && (
        <p
          className={`text-eyebrow mb-4 ${
            dark ? "text-signal-bright" : "text-signal"
          }`}
        >
          {eyebrow}
        </p>
      )}
      <Tag
        className={`${headingSize === "display" ? "text-display" : "text-h1"} ${
          dark ? "!text-white" : "!text-ink"
        }`}
      >
        {heading}
      </Tag>
      {subheading && (
        <p
          className={`mt-4 text-body max-w-xl ${
            align === "center" ? "mx-auto" : ""
          } ${dark ? "!text-ink-400" : "!text-ink-200"}`}
        >
          {subheading}
        </p>
      )}
    </div>
  );
}

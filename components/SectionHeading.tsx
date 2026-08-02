export function SectionHeading({
  eyebrow,
  title,
  intro,
  onDark = false,
  align = "left",
  as: As = "h2",
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
  onDark?: boolean;
  align?: "left" | "center";
  as?: "h2" | "h3";
}) {
  return (
    <div className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-3xl"}>
      {eyebrow && (
        <p className={`eyebrow ${onDark ? "text-primary" : "text-muted-foreground"}`}>{eyebrow}</p>
      )}
      <As className="mt-3 text-3xl leading-[1.1] sm:text-4xl lg:text-[2.75rem]">{title}</As>
      {intro && (
        <p
          className={`mt-5 text-base leading-relaxed ${
            onDark ? "text-ink-foreground/75" : "text-muted-foreground"
          }`}
        >
          {intro}
        </p>
      )}
    </div>
  );
}

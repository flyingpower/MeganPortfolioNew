type Props = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
};

export function SectionHeading({ eyebrow, title, subtitle, align = "left" }: Props) {
  return (
    <div className={align === "center" ? "text-center" : ""}>
      {eyebrow && (
        <div
          className={`flex items-center gap-3 text-xs font-medium uppercase tracking-[0.22em] text-pink-foreground ${
            align === "center" ? "justify-center" : ""
          }`}
        >
          <span className="h-px w-10 bg-pink-strong" />
          {eyebrow}
        </div>
      )}
      <h2 className="font-display mt-4 whitespace-pre-line text-balance text-4xl leading-[0.95] tracking-tight md:text-6xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-5 max-w-2xl text-base text-muted-foreground md:text-lg">{subtitle}</p>
      )}
    </div>
  );
}

// components/Typography.tsx
import { cn } from "@/lib/utils";

type TypographyProps = {
  variant?: "h1" | "h2" | "h3" | "p" | "caption" | "blockquote";
  children: React.ReactNode;
  className?: string;
};

const baseStyles = {
  h1: "text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight tracking-tight",
  h2: "text-2xl sm:text-3xl lg:text-4xl font-semibold leading-snug",
  h3: "text-xl sm:text-2xl lg:text-3xl font-medium",
  p: "text-base sm:text-lg lg:text-xl leading-relaxed",
  caption: "text-sm sm:text-base text-muted-foreground",
  blockquote:
    "text-base sm:text-lg border-l-4 pl-4 italic text-gray-600 dark:text-gray-300",
};

export function Typography({
  variant = "p",
  children,
  className,
}: TypographyProps) {
  const Component = variant;
  return (
    <Component className={cn(baseStyles[variant], className)}>
      {children}
    </Component>
  );
}

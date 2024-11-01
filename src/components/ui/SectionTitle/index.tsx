import { cn } from "@/lib/utils";

type SectionTitleProps = {
  as?: React.ElementType;
  size?: "medium";
  className?: string;
  children: React.ReactNode;
};

const titleSizes = {
  medium: "title-md ",
};

export default function SectionTitle({
  as: Comp = "h1",
  className,
  size = "medium",
  children,
  ...restProps
}: SectionTitleProps) {
  return (
    <Comp
      className={cn("uppercase", titleSizes[size], className)}
      {...restProps}
    >
      {children}
    </Comp>
  );
}

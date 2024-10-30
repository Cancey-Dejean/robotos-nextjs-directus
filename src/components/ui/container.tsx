import { cn } from "@/lib/utils";

const containerSizes = {
  base: "max-w-[1240px]",
};

export default function Container({
  size = "base",
  children,
  className,
}: {
  size?: keyof typeof containerSizes;
  className?: string;
  children: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("mx-auto w-full", containerSizes[size], className)}>
      {children}
    </div>
  );
}

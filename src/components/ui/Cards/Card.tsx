import { cn } from "@/lib/utils";

export default function Card({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "rounded-[24px] border-[4px] border-gray-900 bg-white p-6 text-sm transition-all duration-300 ease-in-out hover:-translate-y-1 hover:translate-x-1 hover:shadow-cardItem sm:text-base md:p-8",
        className,
      )}
    >
      {children}
    </div>
  );
}

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function AccordionGroup({
  type = "single",
  collapsible,
  items = [],
}: {
  type?: "single" | "multiple";
  collapsible: boolean;
  items: {
    value: string;
    title: string;
    children: React.ReactNode;
  }[];
}) {
  return (
    <Accordion type={type} collapsible={collapsible}>
      {items.map(({ value, title, children }) => (
        <AccordionItem value={value} key={value}>
          <AccordionTrigger>{title}</AccordionTrigger>
          <AccordionContent>{children}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}

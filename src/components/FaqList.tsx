import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FaqList = ({ items }: { items: { q: string; a: string }[] }) => (
  <Accordion type="single" collapsible className="border-t border-border">
    {items.map((f, i) => (
      <AccordionItem key={i} value={`f${i}`} className="border-border">
        <AccordionTrigger className="text-left font-serif text-lg sm:text-xl py-5 hover:no-underline">{f.q}</AccordionTrigger>
        <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-5">{f.a}</AccordionContent>
      </AccordionItem>
    ))}
  </Accordion>
);

export default FaqList;

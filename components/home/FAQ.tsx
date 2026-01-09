import React from 'react';
import Section from '../SectionWrapper';
import ScrollReveal from '../ScrollReveal';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "../ui/accordion";

const FAQ: React.FC = () => {
  return (
    <Section variant="dark">
        <ScrollReveal>
          <div className="max-w-3xl mx-auto">
            <h2 className="mb-12 text-3xl font-bold text-white">Frequently Asked Questions</h2>
            <Accordion type="single" collapsible className="w-full space-y-4">
                {[
                    { q: "Who is Vyoma designed for?", a: "Vyoma serves students from Grade 9 through professional career stages, with age-appropriate products targeting specific educational needs at each phase." },
                    { q: "How does Curio differ from traditional tutoring?", a: "Curio provides on-demand concept visualization and AI-driven support, enabling students to resolve doubts independently without waiting for scheduled sessions." },
                    { q: "What boards does Curio support?", a: "Curio content aligns with CBSE, ICSE, and major state board curricula for Class 11–12 science streams." },
                    { q: "How can institutions partner with Vyoma?", a: "Schools, colleges, and educational organizations can contact us for institutional licensing, integration support, and collaborative program development." }
                ].map((faq, i) => (
                    <AccordionItem value={`item-${i}`} key={i} className="border-b border-slate-700">
                        <AccordionTrigger className="text-lg text-white hover:text-blue-300 hover:no-underline">{faq.q}</AccordionTrigger>
                        <AccordionContent className="text-base leading-relaxed text-slate-300">
                            {faq.a}
                        </AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
          </div>
        </ScrollReveal>
      </Section>
  );
};

export default FAQ;

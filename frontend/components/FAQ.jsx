import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import Reveal from "./Reveal";

export default function FAQ() {
  const faqs = [
    {
      question: "What is speech therapy?",
      answer:
        "Speech therapy helps children and adults improve communication, speech, language, and swallowing skills.",
    },
    {
      question: "Who needs speech therapy?",
      answer:
        "People who have difficulties with speech, language, communication, or swallowing may benefit from speech therapy.",
    },
    {
      question: "How do I schedule an appointment?",
      answer:
        "You can contact us through the appointment request form or call our office directly.",
    },
  ];

  return (
    <section className="py-20">
      <div className="max-w-4xl mx-auto px-6">
        <Reveal>
          <p className="eyebrow">FAQ</p>

          <h2 className="font-display font-semibold text-3xl mb-8">
            Frequently Asked Questions
          </h2>
        </Reveal>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <Reveal key={index} delay={index * 60}>
              <AccordionItem
                value={`item-${index}`}
                className="bg-white border border-line rounded-2xl px-6"
              >
                <AccordionTrigger className="text-left font-semibold text-[17px] hover:text-coral-deep">
                  {faq.question}
                </AccordionTrigger>

                <AccordionContent className="text-ink-soft leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            </Reveal>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

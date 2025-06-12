import React from "react";
import { Badge } from "./ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { motion } from "framer-motion";

const FAQ = () => {
  return (
    <section id="faq" className="w-full py-20 md:py-32">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
        >
          <Badge
            className="rounded-full px-4 py-1.5 text-sm font-medium"
            variant="secondary"
          >
            FAQ
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="max-w-[800px] text-muted-foreground md:text-lg">
            Find answers to common questions about our platform.
          </p>
        </motion.div>

        <div className="mx-auto max-w-3xl">
          <Accordion type="single" collapsible className="w-full">
            {[
              {
                question: "What kind of services do you offer?",
                answer:
                  "We build custom digital solutions tailored to your business — from full-stack web apps, internal tools, and workflow automations to SEO optimization and content writing. Whether it's boosting your visibility or powering your operations, we’ve got you covered.",
              },
              {
                question: "How do I know if you're the right fit?",
                answer:
                  "Just reach out. We’ll quickly let you know if what you need aligns with what we do — no fluff, no waiting. If we’re not the right fit, we’ll point you in the right direction.",
              },
              {
                question: "Is the demo really free?",
                answer:
                  "Yes! Once we understand your initial requirements, we’ll build and show you a working demo — tailored to your use case, with no cost or obligation.",
              },
              {
                question:
                  "What do you need from me to get started?",
                answer:
                  "Just a rough idea of what you need. We’ll ask the right questions, fill in the blanks, and suggest improvements where needed.",
              },
              {
                question: "What happens after the demo?",
                answer:
                  "If the solution and pricing work for you, we move straight into development. Simple, transparent, and no hidden surprises.",
              },
              {
                question: "How much visibility will I have into the project?",
                answer:
                  "You’ll have full visibility — always. We provide clear documentation at every step of the way, so you’ll know exactly what’s being done, when, and why. We keep you in the loop, not in the dark.",
              },
              {
                question: "How long does the process take?",
                answer:
                  "Depending on complexity, initial demos can be ready in a few days. We'll provide a clear timeline upfront after reviewing your requirements.",
              },
              {
                question: "How do you ensure the security of my data?",
                answer:
                  "We take your security very seriously. Our platform uses industry-standard encryption protocols (such as SSL/TLS) to protect your data during transmission. Additionally, we implement strict access controls, regular security audits, and data protection measures to keep your information safe from unauthorized access. Your privacy and security are our top priorities.",
              },
            ].map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
              >
                <AccordionItem
                  value={`item-${i}`}
                  className="border-b border-border/40 py-2"
                >
                  <AccordionTrigger className="text-left font-medium hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;

import React from "react";
import { Badge } from "./ui/badge";
import { motion } from "framer-motion";
import { InfiniteMovingCards } from "./infinite-moving-cards";

const testimonials = [
  {
    quote:
      "BeyondTech brought my startup idea to life with a stunning, fully-functional web platform. Their team is responsive, reliable, and truly understands what clients need. Highly recommended!",
    name: "",
    title: "",
  },
  {
    quote:
      "I was struggling with my university project, but BeyondTech stepped in and saved the day. Their assignment help was accurate, well-structured, and delivered on time. A+ service!",
    name: "",
    title: "",
  },
  {
    quote: "As a freelancer, I needed a clean portfolio that actually converts. BeyondTech not only delivered an amazing site, but also handled SEO and content writing like pros.",
    name: "",
    title: "",
  },
  {
    quote:
      "Fast, friendly, and super talented! From the first meeting to deployment, BeyondTech made the whole journey stress-free. I’ll definitely be back for more.",
    name: "",
    title: "",
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="w-full py-20 md:py-32">
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
            Testimonials
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Loved by Teams Worldwide
          </h2>
          <p className="max-w-[800px] text-muted-foreground md:text-lg">
            Don't just take our word for it. See what our customers have to say
            about their experience.
          </p>
        </motion.div>

        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="slow"
        />
      </div>
    </section>
  );
};

export default Testimonials;

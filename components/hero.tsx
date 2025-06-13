import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import React from "react";
import { ContainerTextFlip } from "./ui/container-text-flip";
import { ArrowRight, Check } from "lucide-react";
import { Button } from "./ui/button";

const Hero = () => {
  return (
    <section className="w-full  overflow-hidden">
      <div className="container px-4 md:px-6 relative">
        <div className="absolute inset-0 -z-10 h-full w-full bg-white dark:bg-black bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_40%,transparent_100%)]"></div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-12 py-10 md:py-15 lg:py-20"
        >
          <Badge
            className="mb-4 rounded-full px-4 py-1.5 text-sm font-medium"
            variant="secondary"
          >
            Welcome to Beyond Tech
          </Badge>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
            Where Ideas Evolve Into{" "}
            <ContainerTextFlip
              words={["Better", "Smarter", "Powerful", "Scalable", "Creative"]}
            />{" "}
            Innovation
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            BeyondTech delivers cutting-edge software solutions tailored for
            modern businesses. From seamless automation to collaborative tools,
            we help your team accelerate product development, streamline
            operations, and grow with confidence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#features">
              <Button size="lg" className="rounded-full h-12 px-8 text-base">
                🚀 Start Exploring
                <ArrowRight className="ml-2 size-4" />
              </Button>
            </a>
            <a href="#contact-us">
              <Button
                size="lg"
                variant="outline"
                className="rounded-full h-12 px-8 text-base"
              >
                📅 Book a Demo
              </Button>
            </a>
          </div>
          {/* <div className="flex items-center justify-center gap-4 mt-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <Check className="size-4 text-primary" />
              <span>Fast</span>
            </div>
            <div className="flex items-center gap-1">
              <Check className="size-4 text-primary" />
              <span>Secure </span>
            </div>
            <div className="flex items-center gap-1">
              <Check className="size-4 text-primary" />
              <span>Innovative</span>
            </div>
          </div> */}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

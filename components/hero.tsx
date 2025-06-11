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
            Startup Software Company
          </Badge>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
            Where Ideas Evolve Into{" "}
            <ContainerTextFlip words={["better", "modern", "awesome"]} />{" "}
            Innovation
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            BeyondTech empowers modern startups with scalable, intelligent
            software solutions. From collaboration to automation, we help your
            team focus on building, shipping, and growing — faster.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="rounded-full h-12 px-8 text-base">
              Start Explore
              <ArrowRight className="ml-2 size-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="rounded-full h-12 px-8 text-base"
            >
              Book a Demo
            </Button>
          </div>
          <div className="flex items-center justify-center gap-4 mt-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <Check className="size-4 text-primary" />
              <span>Built for agility and speed</span>
            </div>
            <div className="flex items-center gap-1">
              <Check className="size-4 text-primary" />
              <span>Secure, scalable architecture</span>
            </div>
            <div className="flex items-center gap-1">
              <Check className="size-4 text-primary" />
              <span>Backed by expert support</span>
            </div>
          </div>
        </motion.div>

        {/* <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.2 }}
                  className="relative mx-auto max-w-5xl"
                >
                  <div className="rounded-xl overflow-hidden shadow-2xl border border-border/40 bg-gradient-to-b from-background to-muted/20 mb-20">
                    <Image
                      src="https://cdn.dribbble.com/userupload/12302729/file/original-fa372845e394ee85bebe0389b9d86871.png?resize=1504x1128&vertical=center"
                      width={1280}
                      height={720}
                      alt="SaaSify dashboard"
                      className="w-full h-auto"
                      priority
                    />
                    <div className="absolute inset-0 rounded-xl ring-1 ring-inset ring-black/10 dark:ring-white/10"></div>
                  </div>
                  <div className="absolute -bottom-6 -right-6 -z-10 h-[300px] w-[300px] rounded-full bg-gradient-to-br from-primary/30 to-secondary/30 blur-3xl opacity-70"></div>
                  <div className="absolute -top-6 -left-6 -z-10 h-[300px] w-[300px] rounded-full bg-gradient-to-br from-secondary/30 to-primary/30 blur-3xl opacity-70"></div>
                </motion.div> */}
      </div>
    </section>
  );
};

export default Hero;

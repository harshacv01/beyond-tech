import Image from "next/image";
import React from "react";

const TechStack = () => {
  return (
    <section className="w-full py-12 border-y bg-muted/30">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <p className="text-sm font-medium text-muted-foreground">
            Our Technologies
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 lg:gap-16">
            {[
              {
                src: "/react.svg",
                alt: "React Logo",
                name: "React",
              },
              {
                src: "/node.png",
                alt: "Node.js Logo",
                name: "Node.js",
              },
              {
                src: "/next.png",
                alt: "Next.js Logo",
                name: "Next.js",
              },
              {
                src: "/mongodb.svg",
                alt: "MongoDB Logo",
                name: "MongoDB",
              },
              {
                src: "/mysql.png",
                alt: "MySQL Logo",
                name: "MySQL",
              },
              {
                src: "/redis.svg",
                alt: "Redis Logo",
                name: "Redis",
              },
            ].map((tech) => (
              <div key={tech.src} className="relative group">
                <Image
                  src={tech.src}
                  alt={tech.alt}
                  width={120}
                  height={60}
                  className="h-11 w-auto transition-transform duration-300 hover:scale-110"
                />
                <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-black px-2 py-1 text-xs text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;

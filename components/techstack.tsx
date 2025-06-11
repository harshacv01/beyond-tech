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
              },
              {
                src: "/node.png",
                alt: "Node.js Logo",
              },
              {
                src: "/next.png",
                alt: "Next.js Logo",
              },
              {
                src: "/mongodb.svg",
                alt: "MongoDB Logo",
              },
              {
                src: "/mysql.png",
                alt: "MySQL Logo",
              },
              {
                src: "/redis.svg",
                alt: "Redis Logo",
              },
            ].map((image) => (
              <Image
                key={image.src}
                src={image.src}
                alt={image.alt}
                width={120}
                height={60}
                className="h-8 w-auto opacity-70 grayscale transition-all hover:opacity-100 hover:grayscale-0"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;

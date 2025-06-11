import Link from "next/link";
import Image from "next/image";
import { ExternalLink, Github } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export function ProjectCard({ project }: any) {
  return (
    <>
      <Card className="overflow-hidden bg-gradient-to-b from-background to-muted/10 backdrop-blur transition-all hover:shadow-md h-full flex flex-col ">
        <div className="relative h-48 w-full overflow-hidden">
          <Image
            src={project.imageUrl || "/placeholder.svg"}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>
        <CardContent className="flex flex-col flex-grow p-6">
          <h3 className="text-xl font-bold mb-2">{project.title}</h3>
          <p className="text-muted-foreground mb-4 flex-grow">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.map((tech: any, index: any) => (
              <Badge key={index} variant="secondary" className="rounded-full">
                {tech}
              </Badge>
            ))}
          </div>

          <div className="flex gap-3 mt-auto">
            {project.demoUrl && (
              <Button
                variant="outline"
                size="sm"
                asChild
                className="rounded-full"
              >
                <Link
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Live Demo
                </Link>
              </Button>
            )}
            {project.repoUrl && (
              <Button
                variant="outline"
                size="sm"
                asChild
                className="rounded-full"
              >
                <Link
                  href={project.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="mr-2 h-4 w-4" />
                  Code
                </Link>
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    </>
  );
}

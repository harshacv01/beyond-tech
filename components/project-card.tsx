import Link from "next/link";
import Image from "next/image";
import { ExternalLink, Github } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export function ProjectCard({ project }: any) {
  return (
    <div className="w-full rounded-2xl shadow-lg overflow-hidden flex flex-col">
      {/* Image */}
      <div className="relative h-80 w-full">
        <Image
          src={project.imageUrl || "/placeholder.svg"}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-500 hover:scale-105"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>

      {/* Content below the image */}
      <div className="p-6 flex flex-col gap-3">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          {project.title}
        </h3>
        <p className="text-sm text-gray-700 dark:text-gray-300 line-clamp-3">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech: string, index: number) => (
            <Badge
              key={index}
              variant="secondary"
              className="bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 border-none rounded-full text-xs px-2 py-0.5"
            >
              {tech}
            </Badge>
          ))}
        </div>

        <div className="flex gap-3 mt-2">
          {project.demoUrl && (
            <Button
              variant="ghost"
              size="sm"
              asChild
              className="bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-full"
            >
              <Link
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-900 dark:text-white"
              >
                <ExternalLink className="mr-1 h-4 w-4" />
                Live Demo
              </Link>
            </Button>
          )}
          {project.repoUrl && (
            <Button
              variant="ghost"
              size="sm"
              asChild
              className="bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-full"
            >
              <Link
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-900 dark:text-white"
              >
                <Github className="mr-1 h-4 w-4" />
                Code
              </Link>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}

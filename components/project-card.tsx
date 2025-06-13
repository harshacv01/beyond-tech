import Link from "next/link";
import Image from "next/image";
import { MoveUpRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export function ProjectCard({ project }: any) {
  return (
    <Link
      href={project.demoUrl || "#"}
      target="_blank"
      rel="noopener noreferrer"
      className="block h-full"
    >
      <Card className="group overflow-hidden bg-gradient-to-b from-background to-muted/10 backdrop-blur transition-all hover:shadow-md h-full flex flex-col hover:cursor-pointer">
        <div className="relative h-50 w-full overflow-hidden">
          <Image
            src={project.imageUrl || "/placeholder.svg"}
            alt={project.title}
            width={600}
            height={300}
            className="object-cover"
          />
        </div>
        <CardContent className="flex flex-col flex-grow p-4 pt-0">
          <h3 className="text-md flex items-center gap-2 group-hover:text-blue-500">
            {project.title}
            <MoveUpRight className="size-4" />
          </h3>
          <p className="group-hover:text-blue-500 text-muted-foreground">
            {project.description}
          </p>
        </CardContent>
      </Card>
    </Link>
  );
}

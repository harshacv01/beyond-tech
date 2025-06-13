import { cn } from "@/lib/utils";
import {
  IconAdjustmentsBolt,
  IconCurrencyDollar,
  IconCode,
  IconRobot,
  IconBook,
  IconBriefcase,
  IconTools,
  IconClock,
} from "@tabler/icons-react";

export function FeatureTiles() {
  const features = [
    {
      title: "Full-Stack Software Development",
      description:
        "From web apps to mobile solutions, we build end-to-end software that meets your needs — on time and on budget.",
      icon: <IconCode />,
    },
    {
      title: "Custom AI Agents",
      description:
        "Need a custom AI agent? We design and deploy intelligent bots that automate tasks, answer questions, and enhance user experiences.",
      icon: <IconRobot />,
    },
    {
      title: "Assignment & Academic Help",
      description:
        "Whether it's a tough code lab or a full research paper, we help you get it done (and understand it too).",
      icon: <IconBook />,
    },
    {
      title: "Job Support & Task Help",
      description:
        "Stuck on a job task or freelance gig? We’ll step in and get it done — with explanations if needed.",
      icon: <IconBriefcase />,
    },
    {
      title: "Tech Services Galore",
      description:
        "Debugging, consulting, deployments, APIs, automation, tech stack migration — we’re your on-call tech partner.",
      icon: <IconTools />,
    },
    {
      title: "Always-On Support",
      description:
        "Need help fast? Our team is available 24/7 to tackle urgent issues and keep your projects moving.",
      icon: <IconClock />,
    },
    {
      title: "Premium work, friendly pricing.",
      description:
        "Transparent rates, no hidden fees — plus discounts for bulk services or ongoing partnerships.",
      icon: <IconCurrencyDollar />,
    },
    {
      title: "The Everything Else Dept.",
      description:
        "We take on special requests too — just ask. You dream it, we’ll scope it.",
      icon: <IconAdjustmentsBolt />,
    },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  relative z-10 py-10 max-w-7xl mx-auto">
      {features.map((feature, index) => (
        <Feature key={feature.title} {...feature} index={index} />
      ))}
    </div>
  );
}

const Feature = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r  py-10 relative group/feature dark:border-neutral-800",
        (index === 0 || index === 4) && "lg:border-l dark:border-neutral-800",
        index < 4 && "lg:border-b dark:border-neutral-800"
      )}
    >
      {index < 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10 text-neutral-600 dark:text-neutral-400">
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-blue-500 transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100">
          {title}
        </span>
      </div>
      <p className="text-sm text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-10">
        {description}
      </p>
    </div>
  );
};

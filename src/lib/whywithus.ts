import {
  BatteryCharging,
  GitPullRequest,
  Layers,
  RadioTower,
  SquareKanban,
  WandSparkles,
} from "lucide-react";

interface Reason {
  title: string;
  description: string;
  icon: React.ReactNode;
}

interface withUS {
  heading: string;
  reasons: Reason[];
}

export const withUS = {
  heading: "WHY WITH US",
  reasons: [
    {
      title: "Quality",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe est aliquid exercitationem, quos explicabo repellat?",
      icon: GitPullRequest,
    },
    {
      title: "Experience",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe est aliquid exercitationem, quos explicabo repellat?",
      icon: SquareKanban,
    },
    {
      title: "Support",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe est aliquid exercitationem, quos explicabo repellat?",
      icon: RadioTower,
    },
    {
      title: "Innovation",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe est aliquid exercitationem, quos explicabo repellat?",
      icon: WandSparkles,
    },
    {
      title: "Results",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe est aliquid exercitationem, quos explicabo repellat?",
      icon: Layers,
    },
    {
      title: "Efficiency",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe est aliquid exercitationem, quos explicabo repellat?",
      icon: BatteryCharging,
    },
  ],
};

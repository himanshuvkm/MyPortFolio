"use client";

import { HoverCardContent } from "@/components/ui/hover-card";
import { Button } from "@/components/ui/button";
import Image, { StaticImageData } from "next/image";

type ProjectHoverCardProps = {
  demo: string;
  repo: string;
   image: string | StaticImageData;
  title: string;
};

export default function ProjectHoverCard({
  demo,
  repo,
  image,
  title,
}: ProjectHoverCardProps) {
  return (
    <HoverCardContent className="w-80 p-4 space-y-3">
      <div className="space-y-3">
        <Image
          src={image}
          alt={`${title} preview`}
          width={320}
          height={200}
          className="rounded-md object-cover"
        />

        <div className="flex gap-2">
          <Button
            className="w-1/2"
            size="sm"
            onClick={() => window.open(demo, "_blank")}
          >
            View Demo
          </Button>

          <Button
            className="w-1/2"
            size="sm"
            variant="outline"
            onClick={() => window.open(repo, "_blank")}
          >
            Repo Link
          </Button>
        </div>
      </div>
    </HoverCardContent>
  );
}

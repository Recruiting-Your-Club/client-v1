"use client";

import { useRouter } from "next/navigation";
import { ChevronRight } from "lucide-react";
import type { Club } from "@/types/club";
import DefaultButton from "./DefaultButton";

interface ClubButtonProps {
  club: Club;
}

const ClubButton = ({ club }: ClubButtonProps) => {
  const router = useRouter();

  return (
    <DefaultButton
      variant="ghost"
      className="w-full py-3 px-4 flex items-center justify-between"
      onClick={() => router.push(`/channels/${club.id}`)}
    >
      <div className="flex items-center gap-3 text-black">
        <div className="relative w-10 h-10 rounded-2xl overflow-hidden">
          <img
            src={club.imageUrl}
            alt={club.name}
            className="w-full h-full object-cover"
          ></img>
        </div>
        <div className="text-left">
          <div className="text-lg">{club.name}</div>
          <div className="text-sm text-gray-500">{club.description}</div>
        </div>
      </div>
      <ChevronRight className="h-5 w-5 text-gray-500" />
    </DefaultButton>
  );
};

export default ClubButton;

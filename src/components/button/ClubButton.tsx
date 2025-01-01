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
        <div className=" relative w-10 h-10 rounded-full overflow-hidden">
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
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5 text-gray-400"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
          clipRule="evenodd"
        />
      </svg>
    </DefaultButton>
  );
};

export default ClubButton;

import React, { useState } from "react";

import { Club } from "@/types/club";
import ClubButton from "../button/ClubButton";
import CreateClubButton from "../button/CreateClubButton";

const clubs: Club[] = [
  {
    id: "1",
    name: "엔샵",
    description: "세종대학교 SW동아리",
    imageUrl: "/placeholder.svg?height=40&width=40",
  },
  {
    id: "2",
    name: "그리디",
    description: "세종대학교 SW동아리",
    imageUrl: "/placeholder.svg?height=40&width=40",
  },
  {
    id: "3",
    name: "EnSharp",
    description: "제로베이스 SW 개발동아리 EnSharp 입니다.",
    imageUrl: "/placeholder.svg?height=40&width=40",
  },
];

const ClubList = () => {
  return (
    <div className="max-w-md w-full ">
      <div className="">
        <h2 className="pb-6 text-2xl font-pretendard-semiBold text-black">
          내 채널 목록
        </h2>
        <div className="space-y-2">
          {clubs.map((club) => (
            <ClubButton key={club.id} club={club} />
          ))}
          <CreateClubButton />
        </div>
      </div>
    </div>
  );
};

export default ClubList;

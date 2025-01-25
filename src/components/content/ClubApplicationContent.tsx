"use client";

import React from "react";
import { useApplication } from "@/features/useApplication";
import RecruitmentDetailCard from "@/components/card/detail/RecruitmentDetailCard";
import QuestionList from "@/components/list/QuestionList";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ClubApplicationContentProps } from "@/types/club";
import { useFavorites } from "@/features/useFavorites";

//동아리 지원 페이지 컨텐츠 렌더링
export const ClubApplicationContent: React.FC<ClubApplicationContentProps> = ({
  club,
  questions,
  maxAnswerLength,
}) => {
  const { answers, openIndices, handleInputChange, toggleCollapsible, handleSubmit } = useApplication();
  const { favorites, toggleFavorite } = useFavorites();  

  return (
    <div>
      <div className="p-5 text-2xl font-pretendard-extraBold">동아리 지원</div>

      <RecruitmentDetailCard
        id={club.id}
        imageSrc={club.imageSrc}
        logoSrc={club.logoSrc}
        title={club.title}
        description={club.description}
        tag={club.tag}
        school={club.school}
        daysLeft={club.daysLeft}
        isFavorited={favorites.includes(club.id)}  
        onToggleFavorite={toggleFavorite}  
        showButton={false}
      />

      <div className="w-full max-w-6xl bg-white border-t border-gray-300 p-6 mt-10">
        <QuestionList
          questions={questions}
          openIndices={openIndices}
          onToggle={toggleCollapsible}
          answers={answers}
          onChangeAnswer={handleInputChange}
        />
      </div>

      <div className="flex justify-center space-x-4 mb-10">
        <Link href="/" passHref>
          <Button variant="default" onClick={handleSubmit}>
            지원서 제출
          </Button>
        </Link>
      </div>
      
    </div>
  );
};

export default ClubApplicationContent;

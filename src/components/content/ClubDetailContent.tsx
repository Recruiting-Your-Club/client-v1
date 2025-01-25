"use client"

import React from "react";
import DetailHeader from "@/components/header/DetailHeader";
import RecruitmentDetailCard from "@/components/card/detail/RecruitmentDetailCard";
import ClubSections from "@/components/section/ClubSections";
import { useFavorites } from "@/features/useFavorites";
import { useScroll } from "@/features/useScroll";

const HEADER_DATA = ["모집상세", "모집기간", "동아리정보"];
const REF_DATA = ["details", "period", "info"];

//동아리 상세 페이지 컨텐츠 렌더링
const ClubDetailContent = ({ club }) => {
  const { favorites, toggleFavorite } = useFavorites();
  const { sectionsRef, scrollToSection } = useScroll(REF_DATA);

  return (
    <> 
      <div className="p-5 text-2xl font-pretendard-extraBold">모집공고</div>
 
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
         buttonText="지원하기"
         buttonLink={`/club-application/${club.id}`}
         showButton={true}
      />

 
      <div className="pt-10">
        <DetailHeader
          headerData={HEADER_DATA}
          onHeaderClick={(index) => scrollToSection(REF_DATA[index])}
        />
      </div>
 
      <ClubSections club={club} sectionsRef={sectionsRef} />
 
      <div className="pb-20"></div>
    </>
  );
};

export default ClubDetailContent;

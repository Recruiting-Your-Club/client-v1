"use client";

import { useParams } from "next/navigation";
<<<<<<< Updated upstream
import React from "react";
import MainHeader from "../../../components/header/MainHeader"; 
=======
import React, { useEffect, useRef, useState } from "react";
import MainHeader from "../../../components/header/MainHeader";
>>>>>>> Stashed changes
import RecruitmentDetailCard from "../../../components/card/RecruitmentDetailCard";
import clubData from "../../../data/clubData"; 
import DetailHeader from "../../../components/header/detailHeader";
import DetailImageCard from "../../../components/card/DetailImageCard";
import DetailPeriodCard from "../../../components/card/DetailPeriodCard";
import DetailQuestionsCard from "@/components/card/DetailQuestionsCard";
import DetailClubIntroCard from "@/components/card/DetailClubIntroCard";

const ClubDetailPage = () => {
  const params = useParams();
  const id = params.id;
  const club = clubData.find((item) => item.id === id);

  if (!club) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <h1>해당 공고를 찾을 수 없습니다.</h1>
      </div>
    );
  }
 
  const [favorites, setFavorites] = useState<string[]>([]);

  // 로컬 스토리지 로드
  useEffect(() => {
    const savedFavorites = JSON.parse(localStorage.getItem("favorites") || "[]");
    setFavorites(savedFavorites);
  }, []);
 
  const toggleFavorite = (id: string) => {
    const updatedFavorites = favorites.includes(id)
      ? favorites.filter((favId: string) => favId !== id)  
      : [...favorites, id];  

    setFavorites(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));  
  };

  //헤더 버튼 누를 시 위치 이동 위한 sectionsRef
  const sectionsRef = {
    details: useRef<HTMLDivElement>(null),
    period: useRef<HTMLDivElement>(null),
    questions: useRef<HTMLDivElement>(null),
    info: useRef<HTMLDivElement>(null),
  };

  const handleHeaderClick = (index: number) => {
    const sectionKeys = ["details", "period", "questions", "info"];
    const selectedSection = sectionsRef[sectionKeys[index]];
    if (selectedSection?.current) {
      selectedSection.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="bg-white min-h-screen">
      <MainHeader />

      <main className="flex flex-col items-center justify-start mt-6">
        <div className="w-full max-w-6xl bg-white rounded-lg p-4">
          <div className="p-5 text-2xl font-semibold">모집공고</div>
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
          />
          <div className="pt-10">
            <DetailHeader
<<<<<<< Updated upstream
              headerData={["상세요강", "접수기간/방법", "자소서항목", "동아리정보"]}
=======
              headerData={["상세요강", "접수기간", "자소서항목", "동아리정보"]}
>>>>>>> Stashed changes
              onHeaderClick={handleHeaderClick}
            />

            <div ref={sectionsRef.details}>
              <DetailImageCard imageSrc={club.posterImageSrc} />
            </div>

            <div ref={sectionsRef.period} className="pt-5">
              <div className="pt-10 p-3 text-2xl font-semibold">접수기간</div>
              <DetailPeriodCard
                startDate="2024.12.23(월)"
                endDate="2025.01.23(목)"
              />
            </div>

            <div ref={sectionsRef.questions} className="pt-5">
              <div className="pt-10 p-3 text-2xl font-semibold">자소서항목</div>
              <DetailQuestionsCard questions={club.questions} />
            </div>

            <div ref={sectionsRef.info} className="pt-5">
              <div className="pt-10 p-3 text-2xl font-semibold">동아리정보</div>
              <DetailClubIntroCard
                title={club.title}
                foundationDate={club.foundationDate}
                memberCount={club.memberCount}
                awards={club.awards}
                logoSrc={club.logoSrc}
              />
            </div>

            <div className="pb-20"></div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ClubDetailPage;

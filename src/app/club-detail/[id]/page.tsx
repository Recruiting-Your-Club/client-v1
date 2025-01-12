"use client";

import { useParams } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";
import MainHeader from "../../../components/header/MainHeader";
import RecruitmentDetailCard from "../../../components/card/RecruitmentDetailCard";
import clubData from "../../../data/clubData";
import DetailHeader from "../../../components/header/detailHeader";
import DetailImageCard from "../../../components/card/DetailImageCard";
import DetailPeriodCard from "../../../components/card/DetailPeriodCard";
import DetailQuestionsCard from "@/components/card/DetailQuestionsCard";
import DetailClubIntroCard from "@/components/card/DetailClubIntroCard";

const HEADER_DATA = ["상세요강", "접수기간", "자소서항목", "동아리정보"];

const ClubDetailPage = () => {
  const params = useParams();
  const id = params.id;
  const club = clubData.find((item) => item.id === id);

  const [favorites, setFavorites] = useState<string[]>([]);

  const sectionsRef = useRef<Record<string, HTMLDivElement | null>>({
    details: null,
    period: null,
    questions: null,
    info: null,
  });

  useEffect(() => {
    setFavorites(getSavedFavorites());
  }, []);

  const getSavedFavorites = () => {
    return JSON.parse(localStorage.getItem("favorites") || "[]");
  };

  const toggleFavorite = (id: string) => {
    const updatedFavorites = favorites.includes(id)
      ? favorites.filter((favId) => favId !== id)
      : [...favorites, id];
    setFavorites(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };

  const scrollToSection = (key: string) => {
    const section = sectionsRef.current[key];
    section?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  if (!club) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <h1>해당 공고를 찾을 수 없습니다.</h1>
      </div>
    );
  }

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
            <DetailHeader headerData={HEADER_DATA} onHeaderClick={(index) => scrollToSection(HEADER_DATA[index])} />

            <div ref={(el) => (sectionsRef.current.details = el)}>
              <DetailImageCard imageSrc={club.posterImageSrc} />
            </div>

            <div ref={(el) => (sectionsRef.current.period = el)} className="pt-5">
              <div className="pt-10 p-3 text-2xl font-semibold">접수기간</div>
              <DetailPeriodCard startDate={club.startDate} endDate={club.endDate} />
            </div>

            <div ref={(el) => (sectionsRef.current.questions = el)} className="pt-5">
              <div className="pt-10 p-3 text-2xl font-semibold">자소서항목</div>
              <DetailQuestionsCard questions={club.questions} />
            </div>

            <div ref={(el) => (sectionsRef.current.info = el)} className="pt-5">
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

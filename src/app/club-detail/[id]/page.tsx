"use client";

import { useParams } from "next/navigation";
import React from "react";
import MainHeader from "../../../components/header/MainHeader";
import RecruitmentDetailCard from "../../../components/card/RecruitmentDetailCard";
import clubData from "../../../data/clubData";
import DetailHeader from "../../../components/header/DetailHeader";
import DetailImageCard from "../../../components/card/DetailImageCard";

const ClubDetailPage = () => {
  const params = useParams(); // URL 파라미터 추출
  const id = params.id; // id 추출

  // id에 해당하는 데이터 찾기
  const club = clubData.find((item) => item.id === id);

  // 데이터가 없는 경우 처리
  if (!club) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <h1>해당 공고를 찾을 수 없습니다.</h1>
      </div>
    );
  }

  const handleHeaderClick = (index: number) => {
    console.log(`버튼 ${index} 클릭됨`);
  };

  return (
    <div className="bg-white min-h-screen">
      {/* 상단 고정 영역 */}
      <MainHeader />

      {/* 페이지 콘텐츠 영역 */}
      <main className="flex flex-col items-center justify-start mt-6">
        <div className="w-full max-w-6xl bg-white rounded-lg p-4">
          <div className="p-5 text-2xl font-semibold">모집공고</div>
          <RecruitmentDetailCard
            imageSrc={club.imageSrc}
            logoSrc={club.logoSrc}
            title={club.title}
            description={club.description}
            tag={club.tag}
            school={club.school}
            daysLeft={club.daysLeft}
          />
          {/* DetailHeader 컴포넌트에 배열로 데이터 전달 */}
          <div className="pt-5">
            <DetailHeader
              headerData={[
                "상세요강",
                "접수기간/방법",
                "자소서항목",
                "동아리정보",
              ]}
              onHeaderClick={handleHeaderClick}
            />
            <DetailImageCard imageSrc={club.posterImageSrc} />
          </div>
        </div>
      </main>
    </div>
  );
};

export default ClubDetailPage;

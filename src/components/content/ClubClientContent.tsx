"use client";

import React from "react";
import GridLayout from "@/components/layout/GridLayout";
import TagCheckBox from "@/components/checkbox/TagCheckBox";
import { useFavorites } from "@/features/useFavorites";

//동아리 메인 페이지 컨텐츠 렌더링
const ClubClientContent = ({ clubData, majors }: { clubData: any[]; majors: string[] }) => {
  const { favorites, toggleFavorite } = useFavorites(); // 전역 상태 사용
  const [selectedMajors, setSelectedMajors] = React.useState<string[]>([]);

  const handleMajorChange = (selected: string[]) => {
    setSelectedMajors(selected);
  };

  return (
    <>
      {/* 왼쪽 체크박스 영역 */}
      <aside className="w-[200px] h-full pt-9 pl-3">
        <TagCheckBox title="분야별" major={majors} onChange={handleMajorChange} />
      </aside>

      {/* 오른쪽 콘텐츠 영역 */}
      <section className="flex-1 pt-9">
        <GridLayout
          clubData={clubData}
          selectedMajors={selectedMajors}
          favorites={favorites} // 전역 상태 전달
          onToggleFavorite={toggleFavorite} // 전역 함수 전달
        />
      </section>
    </>
  );
};

export default ClubClientContent;

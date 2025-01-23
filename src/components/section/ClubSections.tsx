import React from "react";
import PosterCardSlider from "@/components/card/detail/PosterCardSlider";
import RemainingTimeCard from "@/components/card/detail/RemainingTimeCard";
//import QuestionsCard from "@/components/card/detail/QuestionsCard";
import ClubInfoCard from "@/components/card/detail/ClubInfoCard";
import TextCard from "@/components/card/detail/TextCard";

// 동아리 상세 정보를 여러 섹션으로 나누어 렌더링하는 컴포넌트
const ClubSections = ({ club, sectionsRef }) => (
  <>


    <div ref={(el) => (sectionsRef.current.details = el)}> 
    <PosterCardSlider
        images={club.posterImageSrc}  
      /> 
    <div className="flex justify-end text-sm pt-1 pr-3 font-pretendard-regular  text-gray-500 ">이미지를 클릭하여 크게 보기</div>
    <div className="pt-7 p-3 text-xl font-pretendard-bold">모집 상세</div>
     <TextCard text={club.recruitmentNotice} />
    </div>



    <div ref={(el) => (sectionsRef.current.period = el)}>
      <div className="pt-10 p-3 text-xl font-pretendard-bold">접수 기간</div>
      <RemainingTimeCard startDate={club.startDate} endDate={club.endDate} />
    </div>

     

    <div ref={(el) => (sectionsRef.current.info = el)}>
      <div className="pt-10 p-3 text-xl font-pretendard-bold">동아리 정보</div>
      <ClubInfoCard
        title={club.title}
        foundationDate={club.foundationDate}
        memberCount={club.memberCount}
        awards={club.awards}
        logoSrc={club.logoSrc}
      />
    </div>
  </>
);

export default ClubSections;

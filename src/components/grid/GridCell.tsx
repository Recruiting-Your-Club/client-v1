import React, { useState } from "react";
import Link from "next/link";
import FavoriteButton from "../button/FavoriteButton";
import { ClubProps } from "@/types/club";
import { Button } from "../ui/button";
import {TextLabel} from "@/components/label/TextLabel";  
 
//각 공고 정보를 보여주는 셀 컴포넌트
const GridCell: React.FC<ClubProps> = ({
  id,
  imageSrc,
  logoSrc,
  title,
  daysLeft,
  description,
  school,
  tag,
  isFavorited,
  onToggleFavorite,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        height: "30vh",
      }}
    >
      <div
        className={`bg-white border border-gray-300 rounded-lg flex flex-col cursor-pointer transition-all duration-300 ${
          isHovered ? "absolute top-0 left-0 w-full z-10 shadow-lg" : ""
        }`}
        style={{
          height: isHovered ? "650px" : "300px",
          position: isHovered ? "absolute" : "relative",
        }}
      >
        {/* 이미지 영역 */}
        <div className="relative w-full">
          <div
            className={`w-full transition-all duration-300 ${
              isHovered ? "h-80" : "h-40"
            }`}
            style={{ aspectRatio: "16 / 9" }}
          >
            <img
              src={imageSrc}
              alt={title}
              className="w-full h-full object-cover rounded-t-lg"
            />
          </div>

          {/* 로고 컴포넌트 */}
          <div
            className="absolute bottom-0 left-5 bg-white flex items-center justify-center"
            style={{
              width: "40%",
              height: "50px",
              borderTopLeftRadius: "8px",
              borderTopRightRadius: "8px",
            }}
          >
            <img
              src={logoSrc}
              alt={`${title} Logo`}
              className="object-contain w-3/4 h-3/4"
            />
          </div>
        </div>

        {/* 즐겨찾기 버튼 */}
        <FavoriteButton
          isFavorited={isFavorited}
          onClick={() => onToggleFavorite(id)}
        />

        {/* 텍스트 설명 영역 */}
        <div className="flex-1 flex flex-col justify-start mt-5 mb-5 ml-5 mr-6">
          <h3 className="text-lg font-pretendard-bold mb-1 ml-[2px]">{title}</h3>
          <div className="flex flex-wrap items-center gap-2 ml-1">
            <div className="text-sm text-gray-500">{daysLeft}</div>
          </div>

          <div className="pt-3 pb-3">
          <TextLabel
              text={tag}
            />
            </div>
          {/* 추가 텍스트 영역 (hover 시에만 표시) */}
          {isHovered && (
            <div className="flex flex-col items-start gap-3 mt-1">
              <div className="w-full border-b border-gray-300" />

              <span className="block text-base font-pretendard-regular">
                {school}
              </span>
              <div className="flex flex-col space-y-[3px]">
                {description.map((text, index) => (
                  <span key={index} className="text-sm text-gray-500">
                    {text}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* 버튼 영역 */}
        {isHovered && (
          <div className="absolute bottom-3.5 left-5 right-5 flex flex-col items-center gap-3">
            <Link href={`club-detail/${id}`}>
              <Button className="px-4 py-2  text-white hover:bg-[#5A45E0]">
                공고 바로가기
              </Button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default GridCell;

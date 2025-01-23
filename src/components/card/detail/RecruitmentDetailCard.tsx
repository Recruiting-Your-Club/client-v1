import React from "react";
import FavoriteButton from "../../button/FavoriteButton";
import { Button } from "../../ui/button";
import { RecruitmentDetailCardProps } from "@/types/club";
import Link from "next/link";
import { TextLabel } from "@/components/label/TextLabel";

const RecruitmentDetailCard: React.FC<RecruitmentDetailCardProps> = ({
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
  buttonText,
  buttonLink,
  showButton,
}) => {
  return (
    <div className="relative flex flex-col lg:flex-row bg-white border border-gray-300 rounded-lg shadow-md overflow-hidden max-w-6xl mx-auto">
      {/* 로고 및 배경 이미지 */}
      <div className="relative w-full lg:w-4/5">
        <img
          src={imageSrc}
          alt={`${title} Background Image`}
          className="w-full h-full object-cover aspect-[16/10.8]"
        />
        <div
          className="absolute bottom-4 left-4 bg-white flex items-center justify-center rounded-lg shadow-md"
          style={{ width: "120px", height: "60px" }}
        >
          <img
            src={logoSrc}
            alt={`${title} Logo`}
            className="object-contain w-3/4 h-3/4"
          />
        </div>
      </div>

      {/* 콘텐츠 영역 */}
      <div className="flex flex-col w-full lg:w-3/5 p-6 space-y-6">
        <div className="flex justify-end">
          <FavoriteButton
            isFavorited={isFavorited}
            onClick={() => onToggleFavorite(id)}
          />
        </div>

        <div>
          <h3 className="text-2xl font-pretendard-extraBold mb-2">{title}</h3>
          <p className="text-lg font-pretendard-regular text-gray-500 ml-1">
            {daysLeft}
          </p> 
          
          <div className={`mt-2 ${!showButton ? "mb-10" : "mb-4"}`}>
            <TextLabel text={tag} />
          </div>
        </div>

        <div className="border-t border-gray-300" />

        <p className="text-lg font-pretendard-semiBold text-gray-700">{school}</p>

        <div className="text-md font-pretendard-regular text-gray-500 space-y-2">
          {description.map((text, index) => (
            <p key={index}>{text}</p>
          ))}
        </div>

        {/* 버튼 */}
        {showButton && buttonText && buttonLink && (
          <div>
            <Link href={buttonLink}>
              <Button className="w-full mt-3 py-2 font-pretendard-semiBold text-md">
                {buttonText}
              </Button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default RecruitmentDetailCard;

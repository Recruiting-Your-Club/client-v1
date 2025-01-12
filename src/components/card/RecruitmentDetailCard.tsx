import React from "react";
import FavoriteButton from "../button/FavoriteButton";

interface RecruitmentDetailCardProps {
  id: string;
  imageSrc: string;
  logoSrc: string;
  title: string;
  daysLeft: string;
  description: string[];
  school: string;
  tag: string;
  isFavorited: boolean;
  onToggleFavorite: (id: string) => void;
}

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
}) => {
  return (
    <div className="relative flex flex-col lg:flex-row bg-white border border-gray-300 rounded-lg shadow-md overflow-hidden max-w-6xl mx-auto">
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

      <div className="flex flex-col w-full lg:w-3/5 p-6 space-y-6">
        <div className="flex justify-end">
          <FavoriteButton
            isFavorited={isFavorited}
            onClick={() => onToggleFavorite(id)}
          />
        </div>

        <div>
          <h3 className="text-2xl font-bold mb-2">{title}</h3>
          <p className="text-md text-gray-500">{daysLeft}</p>
          <p className="text-lg font-medium text-gray-700">{school}</p>
          <p className="text-md font-medium text-green-600 mb-4">{tag}</p>
        </div>

        <div className="border-t border-gray-300 my-4" />
        <div className="text-md space-y-2">
          {description.map((text, index) => (
            <p key={index}>{text}</p>
          ))}
        </div>

        <div>
          <button className="w-full bg-[#02255A] text-white py-2 rounded-lg text-sm font-semibold hover:bg-[#014080] transition">
            지원하기
          </button>
        </div>
      </div>
    </div>
  );
};

export default RecruitmentDetailCard;

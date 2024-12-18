import React, { useState } from "react";

interface RecruitmentDetailCardProps {
  imageSrc: string;
  logoSrc: string;
  title: string;
  daysLeft: string;
  description: string[];
  school: string;
  tag: string;
}

const RecruitmentDetailCard: React.FC<RecruitmentDetailCardProps> = ({
  imageSrc,
  logoSrc,
  title,
  daysLeft,
  description,
  school,
  tag,
}) => {
  const [isFavorited, setIsFavorited] = useState(false);

  return (
    <div className="relative flex flex-col lg:flex-row bg-white border border-gray-300 rounded-lg shadow-lg overflow-hidden max-w-6xl mx-auto">
      {/* 이미지 영역 */}
      <div className="relative w-full lg:w-4/5">
        <div className="relative w-full" style={{ aspectRatio: "16 / 10.8" }}>
          <img
            src={imageSrc}
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>
        {/* 로고 영역 */}
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

      {/* 텍스트 영역 */}
      <div className="flex flex-col w-full lg:w-3/5 p-6 space-y-6">
        {/* 즐겨찾기 버튼 */}
        <div className="flex justify-end">
          <button
            className={`p-3 rounded-full shadow-md transition-colors duration-300 ${
              isFavorited ? "bg-yellow-400" : "bg-gray-300"
            }`}
            onClick={() => setIsFavorited(!isFavorited)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6 text-white"
            >
              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
            </svg>
          </button>
        </div>

        {/* 텍스트 내용 */}
        <div>
          <h3 className="text-2xl font-bold mb-4">{title}</h3>
          <div className="text-md text-gray-500 mb-2">{daysLeft}</div>
          <div className="text-lg font-medium text-gray-700">{school}</div>
          <div className="text-md font-medium text-green-600 mb-4">{tag}</div>
          <div className="border-t border-gray-300 my-4" />
          <div className="text-md space-y-1">
            {description.map((text, index) => (
              <p key={index}>{text}</p>
            ))}
          </div>
        </div>

        {/* 지원하기 버튼 */}
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

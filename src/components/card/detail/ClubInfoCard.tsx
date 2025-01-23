import React from "react";
import { ClubInfoCardProps } from "@/types/club";

// 동아리 정보를 표시하는 카드 컴포넌트
const ClubInfoCard: React.FC<ClubInfoCardProps> = ({
  title,            
  foundationDate,   
  memberCount,      
  awards = [],      
  logoSrc,          
}) => {
  return (
    <div className="p-5 w-full h-full border border-gray-300 flex items-start">
      {/* 동아리 로고 이미지 */}
      <img
        src={logoSrc}
        alt={`${title} 로고`}
        className="w-24 h-24 mr-5 object-cover rounded-md"
      />

      <div>
        {/* 동아리 이름 */}
        <h2 className="text-xl font-bold mb-2">{title}</h2>

        {/* 설립일자 */}
        <p className="text-gray-700 mb-1">
          <span className="font-pretendard-semiBold">설립일자:</span> {foundationDate}
        </p>

        {/* 동아리원 수 */}
        <p className="text-gray-700 mb-1">
          <span className="font-pretendard-semiBold">동아리원 수:</span> {memberCount}명
        </p>

        {/* 수상이력 */}
        <div>
          <p className="text-gray-700 font-pretendard-semiBold">수상이력:</p>
          {awards.length > 0 ? (
            // 수상이력이 있을 경우 
            <ul className="list-disc pl-5 mt-1 space-y-1">
              {awards.map((award, index) => (
                <li key={index} className="text-gray-600">
                  {award}
                </li>
              ))}
            </ul>
          ) : (
            // 수상이력이 없을 경우  
            <p className="text-gray-600 mt-1">수상이력이 없습니다.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ClubInfoCard;

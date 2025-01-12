import React from "react";

interface DetailClubIntroCardProps {
  title: string;
  foundationDate: string;
  memberCount: number;
  awards: string[];
  logoSrc: string;
}

const DetailClubIntroCard: React.FC<DetailClubIntroCardProps> = ({
  title,
  foundationDate,
  memberCount,
  awards = [],
  logoSrc,
}) => {
  return (
    <div className="p-5 w-full h-full border border-gray-300 rounded-md flex items-start">
      <img
        src={logoSrc}
        alt={`${title} 로고`}
        className="w-24 h-24 mr-5 object-cover rounded-md"
      />
      <div>
        <h2 className="text-xl font-bold mb-2">{title}</h2>
        <p className="text-gray-700 mb-1">
          <span className="font-semibold">설립일자:</span> {foundationDate}
        </p>
        <p className="text-gray-700 mb-1">
          <span className="font-semibold">동아리원 수:</span> {memberCount}명
        </p>
        <div>
          <p className="text-gray-700 font-semibold">수상이력:</p>
          {awards.length > 0 ? (
            <ul className="list-disc pl-5 mt-1 space-y-1">
              {awards.map((award, index) => (
                <li key={index} className="text-gray-600">
                  {award}
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-600 mt-1">수상이력이 없습니다.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default DetailClubIntroCard;

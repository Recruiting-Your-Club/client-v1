import React from "react";
 
interface DetailClubIntroCardProps {
  title: string; 
  foundationDate: string;
  memberCount: number;
  awards: string[];
  logoSrc: string;
}

const DetailClubIntroCard: React.FC<DetailClubIntroCardProps> = ({ title, foundationDate, memberCount, awards = [], logoSrc }) => {
    return (
      <div className="p-5 w-full h-full border border-gray-300 rounded-md flex">
        <img src={logoSrc} alt={title} className="w-24 h-24 mr-5 object-cover rounded-md" />
        <div>
          <h2 className="text-xl font-bold mb-2">{title}</h2>
          <p className="text-gray-700 mb-1"><strong>설립일자:</strong> {foundationDate}</p>
          <p className="text-gray-700 mb-1"><strong>동아리원 수:</strong> {memberCount}명</p>
          <div>
            <strong className="text-gray-700">수상이력:</strong>
            <ul className="list-disc pl-5 mt-1">
              {awards.length > 0 ? (
                awards.map((award, index) => (
                  <li key={index} className="text-gray-600">{award}</li>
                ))
              ) : (
                <li className="text-gray-600">수상이력이 없습니다.</li>
              )}
            </ul>
          </div>
        </div>
      </div>
    );
  };
  
  

export default DetailClubIntroCard;

import React, { useState } from 'react';
import Link from 'next/link';

interface GridCellProps {
  id: string;  
  imageSrc: string;
  logoSrc: string;
  title: string;
  daysLeft: string;
  description: string[];
  school: string; 
  tag: string;
}

const GridCell: React.FC<GridCellProps> = ({
  id,
  imageSrc,
  logoSrc,
  title,
  daysLeft,
  description,
  school, 
  tag,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isFavorited, setIsFavorited] = useState(false);

  return (
    <div
      className="relative group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        height: '30vh',
      }}
    >
      <div
        className={`bg-white border border-gray-300 rounded-lg flex flex-col cursor-pointer transition-all duration-300 ${
          isHovered ? 'absolute top-0 left-0 w-full z-10 shadow-lg' : ''
        }`}
        style={{
          height: isHovered ? '60vh' : '30vh',
          position: isHovered ? 'absolute' : 'relative',
        }}
      >
        {/* 이미지 영역 */}
        <div className="relative w-full">
          <div
            className={`w-full transition-all duration-300 ${
              isHovered ? 'h-80' : 'h-40'
            }`}
            style={{ aspectRatio: '16 / 9' }}
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
              width: '40%',
              height: '50px',
              borderTopLeftRadius: '8px',
              borderTopRightRadius: '8px',
            }}
          >
            <img
              src={logoSrc}
              alt={`${title} Logo`}
              className="object-contain w-3/4 h-3/4"
            />
          </div>
        </div>

        {/* 즐겨찾기 */}
        <button
          className={`absolute top-2 right-2 p-2 rounded-full shadow-lg transition-colors duration-300 ${
            isFavorited ? 'bg-yellow-400' : 'bg-gray-300'
          }`}
          onClick={(e) => {
            e.stopPropagation();
            setIsFavorited(!isFavorited);
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-5 h-5 text-white"
          >
            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
          </svg>
        </button>

        {/* 텍스트 설명 영역 */}
        <div className="flex-1 flex flex-col justify-start mt-5 mb-5 ml-5 mr-6">
          <h3 className="text-md font-semibold mb-1">{title}</h3>
          <div className="flex flex-wrap items-center gap-2">
            <div className="text-sm text-gray-500">{daysLeft}</div>
          </div>

          {/* 추가 텍스트 영역 */}
          {isHovered && (
            <div className="flex flex-col items-start gap-3 mt-1">
              <span className="block text-base text-green-600 font-medium font-bold">{tag}</span>

              <div className="w-full border-b border-gray-300" />

              <span className="block text-base font-medium">{school}</span>
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
          <div className="absolute bottom-6 left-5 right-5 flex flex-col items-center gap-3">
            <Link href={`club-detail/${id}`}>
              <button className="bg-[#02255A] text-white px-4 py-2 rounded-lg shadow-lg hover:bg-[#014080] transition">
                공고 바로가기
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default GridCell;

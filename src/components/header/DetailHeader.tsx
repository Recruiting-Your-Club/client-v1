import React from "react";

interface DetailHeaderProps {
  headerData: string[]; // 헤더에 표시할 데이터 배열
  onHeaderClick?: (index: number) => void; // 버튼 클릭 이벤트 핸들러
}

const DetailHeader: React.FC<DetailHeaderProps> = ({ headerData, onHeaderClick }) => {
  return (
    <div className="flex w-full border border-gray-300 bg-white">
      {headerData.map((item, index) => (
        <React.Fragment key={index}>
          {/* 버튼 형태로 데이터 항목 */}
          <button
            className={`flex-1 flex items-center justify-center px-4 py-2 text-sm font-medium text-gray-800 hover:bg-gray-100 focus:outline-none transition ${
              index > 0 ? "border-l border-gray-300" : ""
            }`} // index > 0인 경우에만 border-l 추가
            onClick={() => onHeaderClick && onHeaderClick(index)} // 클릭 이벤트
          >
            {item}
          </button>
        </React.Fragment>
      ))}
    </div>
  );
};

export default DetailHeader;

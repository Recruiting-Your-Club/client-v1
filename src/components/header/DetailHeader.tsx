

import React from "react";
import { DetailHeaderProps } from "@/types/shared";  

//세부 섹션으로 스크롤 이동을 위한 헤더 버튼을 렌더링하는 컴포넌트
const DetailHeader: React.FC<DetailHeaderProps> = ({ headerData, onHeaderClick }) => {
  return (
    <div className="flex w-full border border-gray-300 bg-white">
      {headerData.map((item, index) => (
        <React.Fragment key={index}> 
          <button
            className={`flex-1 flex items-center justify-center px-4 py-2 text-sm font-medium text-gray-800 hover:bg-gray-100 focus:outline-none transition ${
              index > 0 ? "border-l border-gray-300" : ""
            }`}  
            onClick={() => onHeaderClick && onHeaderClick(index)}  
          >
            {item}
          </button>
        </React.Fragment>
      ))}
    </div>
  );
};

export default DetailHeader;

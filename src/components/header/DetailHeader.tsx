import React from "react";

interface DetailHeaderProps {
  headerData: string[];  
  onHeaderClick?: (index: number) => void;  
}

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

import React from 'react';
import Link from 'next/link';

interface GridCellProps {
  imageSrc: string;
  title: string;
  description: string[];
  urlSrc: string;  
}

const GridCell: React.FC<GridCellProps> = ({ imageSrc, title, description, urlSrc }) => {
  return (
    <Link href={urlSrc}>
      <div className="bg-white p-5 border rounded-lg flex flex-col h-full cursor-pointer">
        <div className="relative mb-5">
          <img 
            src={imageSrc} 
            alt={title} 
            className="w-full h-full object-cover"
          />
        </div>

        <div className="flex-1 flex flex-col justify-start">
          <h3 className="text-md font-semibold mb-1">{title}</h3>
          <div className="flex flex-wrap items-center gap-2">
            {description.map((text, index) => (
              <span key={index} className="text-md text-gray-700">{text}</span>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default GridCell;

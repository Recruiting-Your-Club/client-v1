import React from "react";

interface ImageProps {
  imageSrc: string; // 이미지 소스
  altText?: string; // 대체 텍스트 (선택 사항)
}

const DetailImageCard: React.FC<ImageProps> = ({ imageSrc, altText }) => {
  return (
    <div className="w-full h-full border border-gray-300">
      <img
        src={imageSrc}
        alt={altText || "Image"}
        className="w-full h-full object-cover"
      />
    </div>
  );
};

export default DetailImageCard;

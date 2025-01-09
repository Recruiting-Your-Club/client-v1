import React from "react";

interface ImageProps {
  imageSrc: string;  
  altText?: string;  
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

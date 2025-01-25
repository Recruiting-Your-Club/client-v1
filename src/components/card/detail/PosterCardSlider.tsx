"use client"

import React, { useState } from "react";
import { ImageProps } from "@/types/shared";
import { ImageSliderProps } from "@/types/shared";  
import ImageModal from "@/components/modal/ImageModal"; 
import SliderButton from "@/components/button/SliderButton";  
 
// 동아리 이미지를 슬라이더로 보여주는 컴포넌트 
const PosterCardSlider: React.FC<ImageSliderProps> = ({ images }) => {
  const [startIndex, setStartIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState<ImageProps | null>(null);
  const visibleImagesCount = 3; // Number of images to display at once

  const handlePrev = () => {
    setStartIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const handleNext = () => {
    setStartIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className="flex items-center w-full relative"> 
      <SliderButton onClick={handlePrev} position="left" />

      {/* 이미지 슬라이더 */}
      <div className="overflow-hidden w-full">
        <div
          className="flex transition-transform duration-500"
          style={{
            transform: `translateX(-${(startIndex * 100) / visibleImagesCount}%)`,
          }}
        >
          {images.map((image, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-1/3 h-60 border border-gray-300 bg-gray-300 flex items-center justify-center cursor-pointer"
              onClick={() => setSelectedImage(image)}
            >
              <img
                src={image.imageSrc}
                alt={image.altText || `Image ${index + 1}`}
                className="max-w-full max-h-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
 
      <SliderButton onClick={handleNext} position="right" />

      {/* 클릭한 이미지에 대해 모달 띄우기 */}
      {selectedImage && <ImageModal image={selectedImage} onClose={() => setSelectedImage(null)} />}
    </div>
  );
};

export default PosterCardSlider;

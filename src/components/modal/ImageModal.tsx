"use client";

import React from "react"; 
import { ImageModalProps } from "@/types/shared";  
 

//이미지를 팝업 형태로 표시하는 모달 
const ImageModal: React.FC<ImageModalProps> = ({ image, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
      <div className="relative w-3/4 h-3/4 bg-white p-4">
        <button
          className="absolute top-2 right-2 text-white bg-black rounded-full p-2"
          onClick={onClose}
        >
          ✕
        </button>
        <img
          src={image.imageSrc}
          alt={image.altText || "Modal Image"}
          className="w-full h-full object-contain"
        />
      </div>
    </div>
  );
};

export default ImageModal;

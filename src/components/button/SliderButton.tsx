import React from "react";
import { ButtonProps } from "@/types/shared";  
//import {Button} from "@/components/ui/button";
 
//props position에 따라 < 또는 > 으로 표시 
const SliderButton: React.FC<ButtonProps> = ({ onClick, position }) => {
  const isLeft = position === "left";
  return (
    <button
      className={`absolute ${isLeft ? "left-0" : "right-0"} z-10 p-3 bg-gray-300 hover:bg-gray-400 text-black rounded-full`}
      onClick={onClick}
      style={{ transform: "translateY(-50%)", top: "50%" }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d={isLeft ? "M15 19l-7-7 7-7" : "M9 5l7 7-7 7"}  
        />
      </svg>
    </button>
  );
};

export default SliderButton;

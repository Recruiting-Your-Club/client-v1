import React from "react";
import { TextProps } from "@/types/shared";  

//텍스트만 들어가는 카드 컴포넌트 
const TextCard: React.FC<TextProps> = ({ text }) => {
  return (
    <div className="p-5 w-full h-full border border-gray-300"> 
      {text}
    </div>
  );
};

export default TextCard;

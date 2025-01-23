import React from "react"; 
import { TextProps } from "@/types/shared";  


export const TextLabel: React.FC<TextProps> = ({ text }) => {
  return (
    <div
      className="inline-flex items-center px-3 py-1 rounded-full"
      style={{
        backgroundColor: "#F0E8FF",  
        color: "#6E58F6",  
        width: "fit-content",  
      }}
    >
      <span className="text-sm font-semibold">{text}</span>
    </div>
  );
};

 
import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  d: string; // SVG 경로를 props로 받음
}

export const Icon: React.FC<IconProps> = ({ d, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="#6E58F6"
    className="w-5 h-5"
    {...props} 
  >
    <path strokeLinecap="round" strokeLinejoin="round" d={d} />
  </svg>
);
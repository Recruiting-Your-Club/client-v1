import React from "react";
import Link from "next/link";

export const LogoButton: React.FC = () => {
  return (
    <Link
      href="/"
      className="flex items-center justify-center px-6 py-2 rounded-full font-pretendard-extraBold text-3xl"
    >
      <span style={{ color: "#5A45E0"}}>HANDY</span> 
    </Link>
  );
};

export default LogoButton;

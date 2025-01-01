import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "ghost";
  className?: string;
}

const DefaultButton: React.FC<ButtonProps> = ({
  children, //버튼 내부 컨텐츠 받아오기(텍스트, 아이콘 등)
  variant = "default",
  className = "",
  ...props //기타 속성(onClick, type, disabled 등)
}) => {
  const baseStyles =
    "px-4 py-2 rounded-md transition-colors font-pretendard-regular";
  const variantStyles = {
    default: "bg-indigo-500 text-white hover:bg-indigo-600",
    ghost: "bg-transparent hover:bg-gray-100",
  };

  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

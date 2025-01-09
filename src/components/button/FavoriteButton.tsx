import React from "react";

interface FavoriteButtonProps {
  id: string;
  isFavorited: boolean;  
  onClick: () => void;  
}

const FavoriteButton: React.FC<FavoriteButtonProps> = ({
  isFavorited,
  onClick,
}) => {
  return (
    <button
      className={`absolute top-4 right-4 p-2 rounded-full shadow-lg transition-colors duration-300 ${
        isFavorited ? "bg-yellow-400" : "bg-gray-300"
      }`}
      onClick={onClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-5 h-5 text-white"
      >
        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
      </svg>
    </button>
  );
};

export default FavoriteButton;

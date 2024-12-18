import React from "react";
import SearchBar from "../search/SearchBar";

const MainHeader: React.FC = () => {
  return (
    <header className="sticky top-0 bg-white z-[1000] shadow-md">
      <div className="flex items-center justify-between p-4">
        <SearchBar />
        <button className="bg-[#02255A] text-white px-4 py-2 rounded-lg shadow-lg hover:bg-[#014080] transition">
          마이 프로필
        </button>
      </div>
    </header>
  );
};

export default MainHeader;

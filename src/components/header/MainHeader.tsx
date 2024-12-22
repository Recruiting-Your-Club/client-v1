import React, { useState } from "react";
import SearchBar from "../search/SearchBar";
import Link from "next/link";

const MainHeader: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true);
  return (
    <header className="sticky top-0 bg-white z-[1000] shadow-md">
      <div className="flex items-center justify-between p-4">
        <SearchBar />
        <Link
          className="bg-[#02255A] text-white px-4 py-2 rounded-lg shadow-lg hover:bg-[#014080] transition"
          href={"/login"}
        >
          {isLogin ? "로그인" : "내 동아리 목록"}
        </Link>
      </div>
    </header>
  );
};

export default MainHeader;

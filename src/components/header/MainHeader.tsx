"use client";
import React /*useEffect*/ from "react";
import SearchBar from "../search/SearchBar";
import Link from "next/link";
import { /*userInfoType,*/ useUserInfo } from "@/hooks/useUserInfo";
import LogoButton from "@/components/button/LogoButton"; // LogoButton 불러오기

//동아리 메인 페이지의 헤더 컴포넌트
const MainHeader: React.FC = () => {
  const { userInfo, setUserInfo } = useUserInfo();
  const isLogin = !userInfo.accessToken;

  // //더미 데이터 삽입 로직
  // const accessToken = "a";
  // const username = "b";

  // useEffect(() => {
  //   // 더미 데이터를 상태에 한 번만 설정
  //   const userInfoType: userInfoType = {
  //     accessToken: accessToken,
  //     username: username,
  //   };
  //   setUserInfo(userInfoType);
  // }, [setUserInfo]);
  // //여기까지 더미데이터 설정 코드

  return (
    <header className="sticky top-0 bg-white z-[1000] shadow-md">
      <div className="flex items-center justify-between p-4">
        {/* LogoButton 컴포넌트 최좌측에 추가 */}
        <div className="flex items-center space-x-4">
          <LogoButton />
          <SearchBar />
        </div>
        <Link
          className="bg-[#02255A] text-white px-4 py-2 rounded-lg shadow-lg hover:bg-[#014080] transition"
          href={isLogin ? "/channels" : "/channels"}
        >
          {isLogin ? "로그인" : "내 동아리 목록"}
        </Link>
      </div>
    </header>
  );
};

export default MainHeader;

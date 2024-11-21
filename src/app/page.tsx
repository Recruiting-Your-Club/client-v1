"use client";

import React from "react";
import GridLayout from "../components/layout/GridLayout";
import TagCheckBox from "../components/checkbox/TagCheckBox";
import SearchBar from "../components/search/SearchBar";
import Link from "next/link";
export default function Home() {
  return (
    <div className="bg-white min-h-screen relative">
      <main className="p-4 flex">
        <div className="flex flex-col w-[200px] h-full  ">
          <div className="flex-1 pt-9 pl-3">
            <TagCheckBox title="분야" />
          </div>
        </div>

        <div className="flex-1 pt-9">
          <div className="pl-9">
            <SearchBar />
            <Link href={"/login"}>
              <button className="bg-main-color hover:bg-main-color-hover text-white font-pretendard-regular py-2 px-4 rounded-md">
                로그인
              </button>
            </Link>
          </div>
          <GridLayout />
        </div>
      </main>
    </div>
  );
}

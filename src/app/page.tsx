"use client";

import React from 'react'; 
import GridLayout from '../components/layout/GridLayout'; 
import TagCheckBox from '../components/checkbox/TagCheckBox';
import SearchBar from '../components/search/SearchBar';
import MainHeader from "../components/header/MainHeader"; 

export default function Home() {  
  return (
    <div className="bg-white min-h-screen min-w-screen relative">
      <MainHeader />
      <main className="p-4 flex">

        {/* 왼쪽 체크박스 영역 */}
        <div className="flex flex-col w-[200px] h-full">
          <div className="flex-1 pt-9 pl-3">
            <TagCheckBox title="분야" />
          </div> 
        </div>

        {/* 오른쪽 콘텐츠 영역 */}
        <div className="flex-1 pt-9"> 

          {/* Grid Layout */}
          <GridLayout />
        </div>
        
      </main>
    </div>
  );
}

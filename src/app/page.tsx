"use client";

<<<<<<< Updated upstream
import React from 'react'; 
import GridLayout from '../components/layout/GridLayout'; 
import TagCheckBox from '../components/checkbox/TagCheckBox';
import SearchBar from '../components/search/SearchBar';
import MainHeader from "../components/header/MainHeader"; 

export default function Home() {  
=======
import React, { useEffect, useState } from "react";
import GridLayout from "../components/layout/GridLayout";
import TagCheckBox from "../components/checkbox/TagCheckBox";
import MainHeader from "../components/header/MainHeader";
import clubData from "../data/clubData";

export default function Home() { 
  const [selectedMajors, setSelectedMajors] = useState<string[]>([]);
  const major = Array.from(new Set(clubData.map((club) => club.major)));
  
  const handleMajorChange = (selected: string[]) => {
    setSelectedMajors(selected);
  };


  const [favorites, setFavorites] = useState<string[]>([]); 
   
  useEffect(() => {
    const savedFavorites = JSON.parse(localStorage.getItem("favorites") || "[]");
    setFavorites(savedFavorites);
  }, []);
 
  const toggleFavorite = (id: string) => {
    const updatedFavorites = favorites.includes(id)
      ? favorites.filter((favId) => favId !== id)
      : [...favorites, id];

    setFavorites(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };


>>>>>>> Stashed changes
  return (
    <div className="bg-white min-h-screen min-w-screen relative">
      <MainHeader />
      <main className="p-4 flex">

        {/* 왼쪽 체크박스 영역 */}
        <div className="flex flex-col w-[200px] h-full">
          <div className="flex-1 pt-9 pl-3">
<<<<<<< Updated upstream
            <TagCheckBox title="분야" />
          </div> 
        </div>

        {/* 오른쪽 콘텐츠 영역 */}
        <div className="flex-1 pt-9"> 

          {/* Grid Layout */}
          <GridLayout />
=======
            <TagCheckBox
              title="분야"
              major={major}
              onChange={handleMajorChange}
            />
          </div>
        </div>

        {/* 오른쪽 콘텐츠 영역 */}
        <div className="flex-1 pt-9">
          <GridLayout
            clubData={clubData}
            selectedMajors={selectedMajors}
            favorites={favorites}  
            onToggleFavorite={toggleFavorite}  
          />
>>>>>>> Stashed changes
        </div>
        
      </main>
    </div>
  );
}

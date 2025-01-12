"use client";

import React, { useEffect, useState } from "react";
import GridLayout from "../components/layout/GridLayout";
import TagCheckBox from "../components/checkbox/TagCheckBox";
import MainHeader from "../components/header/MainHeader";
import clubData from "../data/clubData";

const Home = () => {
  const [selectedMajors, setSelectedMajors] = useState<string[]>([]);
  const [favorites, setFavorites] = useState<string[]>([]);
 
  const majors = Array.from(new Set(clubData.map((club) => club.major)));
 
  useEffect(() => {
    setFavorites(getSavedFavorites());
  }, []);

  const getSavedFavorites = (): string[] => {
    return JSON.parse(localStorage.getItem("favorites") || "[]");
  };

  const handleMajorChange = (selected: string[]) => {
    setSelectedMajors(selected);
  };

  const toggleFavorite = (id: string) => {
    const updatedFavorites = favorites.includes(id)
      ? favorites.filter((favId) => favId !== id)
      : [...favorites, id];

    setFavorites(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };

  return (
    <div className="bg-white min-h-screen min-w-screen">
      <MainHeader />
      <main className="p-4 flex">
        {/* 왼쪽 체크박스 영역 */}
        <aside className="w-[200px] h-full pt-9 pl-3">
          <TagCheckBox title="분야" major={majors} onChange={handleMajorChange} />
        </aside>

        {/* 오른쪽 콘텐츠 영역 */}
        <section className="flex-1 pt-9">
          <GridLayout
            clubData={clubData}
            selectedMajors={selectedMajors}
            favorites={favorites}
            onToggleFavorite={toggleFavorite}
          />
        </section>
      </main>
    </div>
  );
};

export default Home;

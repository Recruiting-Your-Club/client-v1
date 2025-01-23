import React from "react";
import MainHeader from "../components/header/MainHeader";
import ClubContent from "../components/content/ClubClientContent";  
import clubData from "../data/clubData";
import { FavoritesProvider } from "@/features/useFavorites";
 

const Home = () => {
  const majors = Array.from(new Set(clubData.map((club) => club.major)));

  return (
    <div className="bg-white min-h-screen min-w-screen">
      <MainHeader />
      <FavoritesProvider> 
        <main className="p-4 flex">
          <ClubContent clubData={clubData} majors={majors} />
        </main>
      </FavoritesProvider>
    </div>
  );
};

export default Home;

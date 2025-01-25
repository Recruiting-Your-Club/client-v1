import React from "react";
import MainHeader from "@/components/header/MainHeader";
import ClubDetailContent from "@/components/content/ClubDetailContent";
import clubData from "@/data/clubData";
import NotFoundMessage from "@/utils/NotFoundMessage";  
import { FavoritesProvider } from "@/features/useFavorites";

const ClubDetailPage = ({ params }: { params: { id: string } }) => {
  const club = clubData.find((item) => item.id === params.id);

  if (!club) {
    return <NotFoundMessage message="해당 동아리를 찾을 수 없습니다." />;
  }

  return (
    <div className="bg-white min-h-screen">
      <MainHeader /> 
      <FavoritesProvider> 
        <main className="flex flex-col items-center justify-start mt-6">
          <div className="w-full max-w-6xl bg-white rounded-lg p-4">
            <ClubDetailContent club={club} />
          </div> 
        </main> 
      </FavoritesProvider>
    </div>
  );
};

export default ClubDetailPage;

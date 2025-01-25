import React from "react";
import ClubApplicationContent from "@/components/content/ClubApplicationContent";
import clubData from "@/data/clubData";
import MainHeader from "@/components/header/MainHeader";
import NotFoundMessage from "@/utils/NotFoundMessage";
import { FavoritesProvider } from "@/features/useFavorites";

const ClubApplicationPage = ({ params }: { params: { id: string } }) => {
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
            <ClubApplicationContent club={club} questions={club.questions} />
          </div>
        </main>
      </FavoritesProvider>
    </div>
  );
};

export default ClubApplicationPage;

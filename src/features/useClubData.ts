import clubData from "@/data/clubData";

export const useClubData = (id: string) => {
  return clubData.find((item) => item.id === id) || null;
};

"use client";
import { FavoritesContextType } from "@/types/club";  
import React, { createContext, useContext, useState, useEffect } from "react";
  
//즐겨찾기 상태 관리 컴포넌트
const FavoritesContext = createContext<FavoritesContextType | undefined>(undefined);
 
export const FavoritesProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
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

  // Provider 반환
  return (
    <FavoritesContext.Provider value={{ favorites, toggleFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
};

// Context를 사용하기 위한 커스텀 훅
export const useFavorites = (): FavoritesContextType => {
  const context = useContext(FavoritesContext);
  if (!context) {
    throw new Error("FavoritesProvider로 상단 컴포넌트 감싸서 사용하기");
  }
  return context;
};

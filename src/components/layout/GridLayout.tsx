import React, { useState } from "react";
import GridCell from "../grid/GridCell";
import PaginationComponent from "../pagination/Pagination";
import gridItems from "../../data/clubData";
import { FavoritesProps } from "@/types/club";

//GridCell을 그리드 형태로 렌더링하는 레이아웃 컴포넌트 (필터링, 즐겨찾기, 페이징 기능 포함)
const GridLayout: React.FC<FavoritesProps> = ({
  selectedMajors,
  favorites,
  onToggleFavorite,
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;
 
  const filteredItems = gridItems.filter(
    (item) => selectedMajors.length === 0 || selectedMajors.includes(item.major)
  );
 
  const totalPages = Math.ceil(filteredItems.length / itemsPerPage);
  if (currentPage > totalPages && totalPages > 0) {
    setCurrentPage(totalPages);
  }
  if (currentPage < 1) {
    setCurrentPage(1);
  }
 
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredItems.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="w-full min-h-screen">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-7 gap-y-[130px] w-full">
        {currentItems.map((item, index) => (
          <GridCell
            key={index}
            id={item.id}
            imageSrc={item.imageSrc}
            logoSrc={item.logoSrc}
            title={item.title}
            description={item.description}
            tag={item.tag}
            school={item.school}
            daysLeft={item.daysLeft}
            isFavorited={favorites.includes(item.id)}
            onToggleFavorite={onToggleFavorite}
          />
        ))}
      </div>
      {filteredItems.length > 0 && (
        <div className="pt-20">
          <PaginationComponent
            currentPage={currentPage}
            itemsPerPage={itemsPerPage}
            totalItems={filteredItems.length}  
            onPageChange={handlePageChange}
          />
        </div>
      )}
    </div>
  );
};

export default GridLayout;

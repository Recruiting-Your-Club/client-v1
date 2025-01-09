import React, { useState } from "react";
import GridCell from "../grid/GridCell";

interface GridLayoutProps {
  clubData: typeof import("../../data/clubData").default;
  selectedMajors: string[];
  favorites: string[];  
  onToggleFavorite: (id: string) => void;  
}

const GridLayout: React.FC<GridLayoutProps> = ({
  clubData,
  selectedMajors,
  favorites,
  onToggleFavorite,
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;
 
  const filteredItems = selectedMajors.length
    ? clubData.filter((item) => selectedMajors.includes(item.major))
    : clubData;
 
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredItems.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(filteredItems.length / itemsPerPage);

  return (
    <div className="p-9 w-full min-h-screen">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-4 w-full">
        {currentItems.map((item) => (
          <GridCell
            key={item.id}
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

      {/* Pagination */}
      <div className="flex justify-center mt-6 space-x-2">
        <button
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1}
          className="pagination-btn"
        >
          &lt;
        </button>
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            onClick={() => setCurrentPage(index + 1)}
            className={`pagination-btn ${
              currentPage === index + 1 ? "active" : ""
            }`}
          >
            {index + 1}
          </button>
        ))}
        <button
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="pagination-btn"
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default GridLayout;

import React, { useState } from 'react';
import GridCell from '../grid/GridCell';
import gridItems from '../../data/clubData'; 

const GridLayout: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  // 현재 페이지의 데이터 슬라이싱
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = gridItems.slice(indexOfFirstItem, indexOfLastItem);

  // 페이지 변경 핸들러
  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  // 전체 페이지 수 계산
  const totalPages = Math.ceil(gridItems.length / itemsPerPage);

  return (
    <div className="p-9 w-full min-h-screen">
      {/* Grid Cells */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
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
          />
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-6 space-x-2">
        {/* 이전 버튼 */}
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className={`px-4 py-2 rounded ${
            currentPage === 1 ? 'bg-gray-300' : 'bg-[#02255A] text-white'
          }`}
        >
          이전
        </button>

        {/* 페이지 번호 */}
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            onClick={() => handlePageChange(index + 1)}
            className={`px-3 py-1 rounded ${
              currentPage === index + 1 ? 'bg-[#ffffff] text-black' : 'bg-gray-200'
            }`}
          >
            {index + 1}
          </button>
        ))}

        {/* 다음 버튼 */}
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className={`px-4 py-2 rounded ${
            currentPage === totalPages ? 'bg-gray-300' : 'bg-[#02255A] text-white'
          }`}
        >
          다음
        </button>
      </div>
    </div>
  );
};

export default GridLayout;

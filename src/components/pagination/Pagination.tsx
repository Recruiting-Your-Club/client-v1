import React from "react";
import Pagination from "react-js-pagination";

//페이지네이션을 처리하는 컴포넌트 
const PaginationComponent: React.FC<{
  currentPage: number;
  itemsPerPage: number;
  totalItems: number;
  onPageChange: (page: number) => void;
}> = ({ currentPage, itemsPerPage, totalItems, onPageChange }) => {
  return (
    <div className="flex justify-center mt-6">
      <Pagination
        activePage={currentPage}
        itemsCountPerPage={itemsPerPage}
        totalItemsCount={totalItems}
        pageRangeDisplayed={5}
        onChange={onPageChange}
        innerClass="flex items-center space-x-2"
        itemClass="px-3 py-2 border border-gray-300 rounded-lg text-blue-500 hover:bg-gray-50 cursor-pointer"
        activeClass="bg-white-500 text-gray-400 border-gray-300"
        disabledClass="text-gray-400 border-gray-200 cursor-not-allowed"
        firstPageText="«"
        lastPageText="»"
        prevPageText="‹"
        nextPageText="›"
      />
    </div>
  );
};

export default PaginationComponent;

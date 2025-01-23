"use client";

import React, { useEffect, useState } from "react";
import { RemainingTimeCardProps } from "@/types/club";
import { calculateRemainingTime } from "@/utils/dateUtils";  

//마감일-지원일 남은 시간을 표시하는 카드 컴포넌트
const RemainingTimeCard: React.FC<RemainingTimeCardProps> = ({
  startDate,
  endDate,
}) => {
  const [remainingTime, setRemainingTime] = useState<string>("");

  useEffect(() => {
    const timer = setInterval(() => {
      setRemainingTime(calculateRemainingTime(endDate));  
    }, 1000);

    return () => clearInterval(timer); 
  }, [endDate]);

  const isExpired = remainingTime === "지원 마감";

  return (
    <div className="p-6 w-full border border-gray-300 bg-white">
      <div className="flex items-center space-x-4">
        {/* 달력 아이콘 */}
        <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gray-200">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-8 h-8 text-gray-500"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 3v1.5m7.5-1.5v1.5M3 8.25h18M4.5 6.75h15a1.5 1.5 0 011.5 1.5v10.5a1.5 1.5 0 01-1.5 1.5H4.5a1.5 1.5 0 01-1.5-1.5V8.25a1.5 1.5 0 011.5-1.5z"
            />
          </svg>
        </div>

        {/* 남은 시간 정보 */}
        <div className="w-full">
          <div
            className={`text-3xl font-pretendard-bold ${
              isExpired ? "text-gray-500" : "text-red-500"
            }`}
          >
            {remainingTime}
          </div>
          <div
            className={`text-lg font-pretendard-regular mt-1 ${
              isExpired ? "text-gray-500" : "text-gray-600"
            }`}
          >
            {isExpired ? "접수마감" : "남은시간"}
          </div>
        </div>
      </div>

      {/* 시작일/마감일 */}
      <div className="mt-6 text-lg text-gray-600">
        <div className="flex justify-between">
          <span>시작일</span>
          <span className="font-pretendard-regular text-gray-900">
            {startDate}
          </span>
        </div>
        <div className="flex justify-between mt-3">
          <span>마감일</span>
          <span className="font-pretendard-regular text-gray-900">
            {endDate}
          </span>
        </div>
      </div>
    </div>
  );
};

export default RemainingTimeCard;

"use client";

import React, { useState } from "react";
import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from "@/components/ui/collapsible";
import { Textarea } from "@/components/ui/textarea";
import { QuestionCardProps } from "@/types/club";  

const QuestionCard: React.FC<QuestionCardProps> = ({
  question,
  isOpen,
  onToggle,
  answer,
  onChangeAnswer,
  maxAnswerLength,
}) => {
  const [warning, setWarning] = useState("");

  const handleAnswerChange = (value: string) => {
    if (value.length > maxAnswerLength) {
      setWarning(`답변은 최대 ${maxAnswerLength}자까지 입력할 수 있습니다.`);
    } else {
      setWarning("");
      onChangeAnswer(value);
    }
  };

  return (
    <Collapsible open={isOpen} onOpenChange={onToggle}>

      <CollapsibleTrigger
        className={`w-full flex justify-between items-center px-4 py-2 cursor-pointer rounded-md transition-all duration-300 ${
          isOpen
            ? "bg-gray-200 border border-gray-500 text-black font-pretendard-semiBold shadow-lg"
            : "bg-white border border-gray-300 text-gray-800 font-pretendard-regular"
        }`}
      >
        <span>{question}</span>
        <span>{isOpen ? "▲" : "▼"}</span>
      </CollapsibleTrigger>

      <CollapsibleContent className="p-4 bg-white border-t border-gray-300">
        <Textarea
          value={answer}
          onChange={(e) => handleAnswerChange(e.target.value)}
          placeholder="답변을 입력하세요."
          rows={6}
        />
        {warning && <p className="text-red-500 text-sm mt-2">{warning}</p>}
        <p className="text-gray-500 text-sm mt-2">
          {answer.length}/{maxAnswerLength} 자
        </p>
      </CollapsibleContent>
      
    </Collapsible>
  );
};

export default QuestionCard;

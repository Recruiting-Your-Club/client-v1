"use client";

import React from "react";
import QuestionCard from "@/components/card/application/QuestionCard";
import { QuestionListProps } from "@/types/club";  

//자기소개서 리스트를 렌더링하는 컴포넌트
const QuestionList: React.FC<QuestionListProps> = ({
  questions,
  openIndices,
  onToggle,
  answers,
  onChangeAnswer,
}) => {
  return (
    <div className="w-full max-w-7xl space-y-4">
      {questions.map((question, index) => (
        <QuestionCard
          key={index}
          question={question.text}  
          isOpen={openIndices.includes(index)}
          onToggle={() => onToggle(index)}
          answer={answers[index]}
          onChangeAnswer={(value) => onChangeAnswer(index, value)}
          maxAnswerLength={question.maxAnswerLength}  
        />
      ))}
    </div>
  );
};

export default QuestionList;

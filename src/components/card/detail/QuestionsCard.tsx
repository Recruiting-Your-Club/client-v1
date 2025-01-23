import React from "react";
import { QuestionsProps } from "@/types/club"; 

//자기소개서 항목을 보여주는 컴포넌트
const QuestionsCard: React.FC< QuestionsProps> = ({ questions }) => {
  return (
    <div className="p-5 w-full h-full border border-gray-300"> 
      <ul className="list-decimal pl-5">
        {questions.map((question) => (
          <li key={question.id} className="mb-2">
            {question.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default QuestionsCard;
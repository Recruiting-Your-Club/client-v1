import React from "react";
 
interface Question {
  id: number;
  text: string;
}
 
interface QuestionsProps {
  questions: Question[];
}

const DetailQuestionsCard: React.FC< QuestionsProps> = ({ questions }) => {
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

export default DetailQuestionsCard;
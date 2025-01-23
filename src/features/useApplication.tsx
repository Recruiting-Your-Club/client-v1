"use client";

import { useState } from "react";

export const useApplication = () => {
  const [answers, setAnswers] = useState<string[]>(["", "", "", ""]);
  const [openIndices, setOpenIndices] = useState<number[]>([]);

  const handleInputChange = (index: number, value: string) => {
    const updatedAnswers = [...answers];
    updatedAnswers[index] = value;
    setAnswers(updatedAnswers);
  };

  const toggleCollapsible = (index: number) => {
    setOpenIndices((prevIndices) =>
      prevIndices.includes(index)
        ? prevIndices.filter((i) => i !== index)
        : [...prevIndices, index]
    );
  };

  const handleSave = () => {
    console.log("임시 저장된 데이터:", answers);
    alert("지원서가 임시 저장되었습니다.");
  };

  const handleSubmit = () => {
    console.log("제출된 데이터:", answers);
    alert("지원서가 제출되었습니다.");
  };

  return {
    answers,
    openIndices,
    handleInputChange,
    toggleCollapsible,
    handleSave,
    handleSubmit,
  };
};

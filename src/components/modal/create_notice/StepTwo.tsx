"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { NoticeInfoStepTwo } from "@/types/notice";
import { PlusCircle, X } from "lucide-react";
import { useState } from "react";

const StepTwo = ({ formData, onFormChange, showError }: NoticeInfoStepTwo) => {
  const [questions, setQuestions] = useState(
    formData?.question.length > 0
      ? formData.question
      : [{ question: "", maxWords: 0 }]
  );

  const handleQuestionChange = (
    index: number,
    field: "question" | "maxWords",
    value: string | number
  ) => {
    const newQuestions = [...questions];
    newQuestions[index] = { ...newQuestions[index], [field]: value };
    setQuestions(newQuestions);
    //onFormChange({ question: newQuestions });
  };

  const addQuestion = () => {
    setQuestions([...questions, { question: "", maxWords: 0 }]);
  };

  const removeQuestion = (index: number) => {
    const newQuestions = questions.filter((_, i) => i !== index);
    setQuestions(newQuestions);
    //onFormChange({ question: newQuestions });
  };

  return (
    <div className="space-y-4">
      <div className="mb-4 p-4 bg-blue-50 rounded-md">
        <p className="text-blue-700 font-pretendard-semiBold">
          다음 정보는 필수 입력 사항입니다: 이름, 이메일, 학번, 전화번호
        </p>
      </div>
      <div>
        <Label className="font-pretendard-semiBold mb-3">사전 질문</Label>
        {questions.map((q, index) => (
          <div key={index} className="space-y-2 mt-4">
            <div className="flex items-end gap-2">
              <div className="flex-grow">
                <Input
                  value={q.question}
                  onChange={(e) =>
                    handleQuestionChange(index, "question", e.target.value)
                  }
                  placeholder="질문을 입력하세요"
                />
              </div>
              <div className="w-24">
                <Input
                  type="number"
                  value={q.maxWords}
                  onChange={(e) =>
                    handleQuestionChange(
                      index,
                      "maxWords",
                      parseInt(e.target.value)
                    )
                  }
                  placeholder="최대 단어 수"
                />
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => removeQuestion(index)}
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          </div>
        ))}
        <Button
          variant="outline"
          size="sm"
          onClick={addQuestion}
          className="mt-2"
        >
          <PlusCircle className="h-4 w-4 mr-2" />
          질문 추가
        </Button>
      </div>
    </div>
  );
};

export default StepTwo;

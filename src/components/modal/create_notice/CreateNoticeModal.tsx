"use client";

import { INITIAL_NOTICE_FORM_DATA } from "@/data/notices";
import { NoticeModalCreationProps } from "@/types/notice";
import { useState } from "react";
import validateFields from "@/utils/validateFields";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "../../ui/dialog";
import { toast } from "@/hooks/use-toast";
import StepOne from "./StepOne";
import { Button } from "@/components/ui/button";
import StepTwo from "./StepTwo";

const CreateNoticeModal = ({
  isOpen,
  onOpenChange,
}: NoticeModalCreationProps) => {
  const [step, setStep] = useState(1);
  const [showErrors, setShowErrors] = useState(false);
  const [formData, setFormData] = useState(INITIAL_NOTICE_FORM_DATA);

  const handleFormChange = (newData: Partial<typeof formData>) => {
    setFormData((prev) => ({ ...prev, ...newData }));
  };

  const handleNextStep = () => {
    setShowErrors(true);
    if (step === 1) {
      const isValide = validateStepOne();
      if (isValide) {
        setStep(step + 1);
        setShowErrors(false);
      }
    }
  };

  const validateStepOne = (): boolean => {
    const { title, startDate, endDate, details } = formData;
    if (!title.trim() || !startDate || !endDate || !details.trim()) {
      toast({
        title: "입력 오류",
        description: "모든 필수 사항을 입력해주세요",
        variant: "destructive",
      });
      return false;
    }
    return true;
  };

  //자기소개서 문항 에러사항 검증 로직 (나중에 추가해야됨)
  const validateStepTwo = () => {};

  const handlePrevStep = () => {
    setStep(step - 1);
    setShowErrors(false);
  };

  //최종 제출 로직
  const handleSubmit = () => {};

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-[80vw] max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="font-pretendard-semiBold">
            공고 생성
          </DialogTitle>
          <DialogDescription className="font-pretendard-regular">
            새로운 공고를 생성하고 지원서 양식을 제작합니다.
          </DialogDescription>
        </DialogHeader>
        {step === 1 ? (
          <StepOne
            formData={formData}
            onFormChange={handleFormChange}
            onNext={handleNextStep}
            showError={showErrors}
          />
        ) : (
          <StepTwo
            formData={formData}
            onFormChange={handleFormChange}
            showError={showErrors}
          />
        )}
        <div className="mt-4 flex justify-between">
          {step === 2 && <Button onClick={handlePrevStep}>이전</Button>}
          {step === 1 ? (
            <Button onClick={handleNextStep}>다음</Button>
          ) : (
            <Button>제출</Button>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CreateNoticeModal;

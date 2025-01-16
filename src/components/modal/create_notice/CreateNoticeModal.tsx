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
    }
  };

  const validateStepOne = () => {
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

  const validateStepTwo = () => {};

  const handlePrevStep = () => {
    setStep(step - 1);
    setShowErrors(false);
  };

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
          <div></div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default CreateNoticeModal;

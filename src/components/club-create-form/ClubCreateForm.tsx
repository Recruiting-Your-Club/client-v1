"use client";

import React, { useState } from "react";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";

interface FormData {
  clubName: string;
  clubTag: string;
  image: string | null;
  description: string;
}

const initialFormData: FormData = {
  clubName: "",
  clubTag: "",
  image: null,
  description: "",
};

const ClubCreateForm = () => {
  //동아리 생성 step 관리리
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<FormData>(initialFormData);

  const handleUpdateFormData = (data: Partial<FormData>) => {
    setFormData((prev) => ({ ...prev, ...data }));
  };

  //서버 연결 폼
  const handleSubmit = () => {};

  return (
    <div className="max-w-lg w-full">
      {step === 1 ? (
        <StepOne
          formData={formData}
          onUpdateForm={handleUpdateFormData}
          onNext={() => setStep(2)}
        />
      ) : (
        <StepTwo
          formData={formData}
          onUpdateForm={handleUpdateFormData}
          onPrevious={() => setStep(1)}
          onSubmit={handleSubmit}
        />
      )}
    </div>
  );
};

export default ClubCreateForm;

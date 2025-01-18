"use client";

import DatePickerWithRange from "@/components/calendar/DatePickerWithRange";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { NoticeInfoStepOne } from "@/types/notice";
import { useState } from "react";
import { DateRange } from "react-day-picker";

const StepOne = ({
  formData,
  onFormChange,
  onNext,
  showError,
}: NoticeInfoStepOne) => {
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [dateRange, setDateRange] = useState<DateRange>({
    from: formData.startDate ? new Date(formData.startDate) : undefined,
    to: formData.endDate ? new Date(formData.endDate) : undefined,
  });

  const handleDateRangeChange = (newDateRange: DateRange | undefined) => {
    setDateRange(newDateRange || { from: undefined, to: undefined });
    onFormChange({
      startDate: newDateRange?.from?.toISOString() || "",
      endDate: newDateRange?.to?.toISOString() || "",
    });
  };

  return (
    <div className="space-y-4">
      <div className="mt-3 mb-3">
        <Label
          htmlFor="title"
          className="flex items-center font-pretendard-semiBold mb-3"
        >
          공고 제목 <span className="text-red-500 ml-1">*</span>
        </Label>
        <Input
          id="title"
          value={formData.title}
          onChange={(e) => onFormChange({ title: e.target.value })}
          placeholder="공고 제목을 입력하세요"
          className={showError && errors.title ? "border-red-500" : ""}
        />
      </div>
      <div className="">
        <Label className="flex items-center mb-3 font-pretendard-semiBold">
          모집 일자 <span className="text-red-500 ml-1">*</span>
        </Label>
        <DatePickerWithRange date={dateRange} setDate={handleDateRangeChange} />
        {showError && errors.date && (
          <p className="text-red-500 text-sm mt-1">{errors.date}</p>
        )}
      </div>
      <div>
        <Label className="flex item-center mb-3 font-pretendard-semiBold">
          상세 정보 <span className="text-red-500 ml-1">*</span>
        </Label>
      </div>
    </div>
  );
};

export default StepOne;

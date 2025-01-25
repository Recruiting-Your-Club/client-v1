"use client";

import DatePickerWithRange from "@/components/calendar/DatePickerWithRange";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { NoticeInfoStepOne } from "@/types/notice";
import { X } from "lucide-react";
import { ChangeEvent, useEffect, useState } from "react";
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
  const [details, setDetails] = useState(formData.details);
  const [images, setImages] = useState<File[]>(formData.images);
  const [imagePreviews, setImagePreviews] = useState<string[]>([]);

  const handleDateRangeChange = (newDateRange: DateRange | undefined) => {
    setDateRange(newDateRange || { from: undefined, to: undefined });
    onFormChange({
      startDate: newDateRange?.from?.toISOString() || "",
      endDate: newDateRange?.to?.toISOString() || "",
    });
  };

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newImages = Array.from(e.target.files);
      setImages([...images, ...newImages]);
      onFormChange({ images: [...images, ...newImages] });
    }
  };

  const removeImage = (index: number) => {
    const newImages = images.filter((_, i) => i !== index);
    setImages(newImages);
    onFormChange({ images: newImages });
  };

  useEffect(() => {
    const previews = images.map((file) => URL.createObjectURL(file));
    setImagePreviews(previews);
    return () => {
      previews.forEach(URL.revokeObjectURL);
    };
  }, [images]);

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
        <Label
          htmlFor="details"
          className="flex item-center mb-3 font-pretendard-semiBold"
        >
          상세 정보 <span className="text-red-500 ml-1">*</span>
        </Label>
        <Textarea
          id="details"
          value={formData.details}
          onChange={(e) => {
            setDetails(e.target.value);
            onFormChange({ details: e.target.value });
          }}
          placeholder="공고 상세 정보를 입력해주세요"
          className="min-h-[200px]"
        />
      </div>
      <div>
        <Label
          htmlFor="images"
          className="flex item-center mb-3 font-pretendard-semiBold"
        >
          공고 이미지
        </Label>
        <Input
          id="images"
          type="file"
          accept="image/*"
          className="cursor-pointer"
          onChange={handleImageChange}
          multiple
        />
        <div className="mt-2 grid grid-cols-3 gap-2">
          {imagePreviews.map((preview, index) => (
            <div key={index} className="relative">
              <img
                src={preview || "/placeholder.svg"}
                alt={`Preview ${index + 1}`}
                className="w-full h-32 object-cover rounded"
              />
              <Button
                variant="destructive"
                size="icon"
                className="absolute top-1 right-1 h-6 w-6"
                onClick={() => removeImage(index)}
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StepOne;

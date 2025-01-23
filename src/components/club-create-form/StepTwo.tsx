import { useState, ChangeEvent } from "react";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Button } from "../ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Textarea } from "../ui/textarea";
import { ImagePlus } from "lucide-react";

interface StepTwoProps {
  formData: {
    description: string;
    image: string | null;
  };
  onUpdateForm: (
    data: Partial<{ description: string; image: string | null }>
  ) => void;
  onPrevious: () => void;
  onSubmit: () => void;
}

const StepTwo = ({
  formData,
  onUpdateForm,
  onPrevious,
  onSubmit,
}: StepTwoProps) => {
  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        onUpdateForm({ image: reader.result as string });
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl font-pretendard-bold text-center">
          동아리 정보를 입력해주세요
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-2">
          <Label>동아리 로고</Label>
          <div className="flex justify-center">
            <div className="relative w-32 h-32">
              <label className="block w-full h-full cursor-pointer">
                {formData.image ? (
                  <img
                    src={formData.image}
                    alt="club preview"
                    className="object-cover rounded-lg"
                  />
                ) : (
                  <div className="w-full h-full border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center bg-gray-50 hover:bg-gray-100 transition-colors">
                    <ImagePlus className="w-8 h-8 text-gray-400" />
                  </div>
                )}
                <input
                  type="file"
                  className="hidden"
                  accept="image/*"
                  onChange={handleImageChange}
                />
              </label>
            </div>
          </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="description">상세 설명</Label>
          <Textarea
            id="description"
            placeholder="동아리에 대한 상세 설명을 입력해주세요"
            value={formData.description}
            onChange={(e) => onUpdateForm({ description: e.target.value })}
            rows={4}
          />
        </div>
        <div className="space-y-3">
          <Button
            className="w-full bg-indigo-500 hover:bg-indigo-600"
            onClick={onSubmit}
          >
            동아리 생성하기
          </Button>
          <Button
            variant="ghost"
            className="w-full text-gray-500"
            onClick={onPrevious}
          >
            이전 단계로
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default StepTwo;

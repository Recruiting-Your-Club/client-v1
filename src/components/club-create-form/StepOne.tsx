import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Button } from "../ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

interface StepOneProps {
  formData: {
    clubName: string;
    clubTag: string;
  };
  onUpdateForm: (data: Partial<{ clubName: string; clubTag: string }>) => void;
  onNext: () => void;
}

const StepOne = ({ formData, onUpdateForm, onNext }: StepOneProps) => {
  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl font-pretendard-bold text-center">
          새 동아리를 만들어 주세요.
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="clubName">동아리 명</Label>
          <Input
            id="clubName"
            placeholder="동아리 명을 입력해 주세요"
            value={formData.clubName}
            onChange={(e) => onUpdateForm({ clubName: e.target.value })}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="clubTag">분야</Label>
          <Select
            value={formData.clubTag}
            onValueChange={(value) => onUpdateForm({ clubTag: value })}
          >
            <SelectTrigger>
              <SelectValue placeholder="분야를 선택해주세요" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="it">IT/소프트웨어</SelectItem>
              <SelectItem value="sports">스포츠</SelectItem>
              <SelectItem value="leisure">여가</SelectItem>
              <SelectItem value="culture">문화/예술</SelectItem>
              <SelectItem value="study">학습/교육</SelectItem>
              <SelectItem value="social">사교/친목</SelectItem>
              <SelectItem value="game">게임</SelectItem>
              <SelectItem value="other">기타</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <Button
          className="w-full bg-indigo-500 hover:bg-indigo-600"
          onClick={onNext}
        >
          다음 단계로
        </Button>
      </CardContent>
    </Card>
  );
};

export default StepOne;

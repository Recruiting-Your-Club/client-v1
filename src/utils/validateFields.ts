import { toast } from "@/hooks/use-toast";

const validateFields = (
  formData: Record<string, any>,
  fields: string[]
): boolean => {
  const missingField = fields.find(
    (field) => !formData[field]?.toString().trim()
  );
  if (missingField) {
    toast({
      title: "입력 오류",
      description: "모든 항목을 입력해주세요",
      variant: "destructive",
    });
    return false;
  }
  return true;
};

export default validateFields;

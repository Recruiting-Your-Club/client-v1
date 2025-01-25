import { LucideIcon } from "lucide-react";

/**
 * 사이드 바 <공고 관리> 타입 지정
 */
export interface Notice {
  title: string;
  url: string;
  icon?: LucideIcon;
  isActive?: boolean;
  items?: {
    title: string;
    url: string;
  }[];
}

/**
 * 모집 공고 시 현재 공고 카드 표시해주는 타입
 */
export interface NoticeCardProps {
  id: number;
  title: string;
  date: string;
  progress: string;
  stats: {
    total: number;
    inProgress: number;
    completed: number;
    joined: number;
  };
}

/**
 * 공고 생성 Modal창 띄우는 props
 */
export interface NoticeModalCreationProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}

/**
 * 모집 공고 기입 정보 타입
 */
export interface NoticeInfoProps {
  title: string;
  startDate: string;
  endDate: string;
  details: string;
  images: File[];
  question: Array<{ question: string; maxWords: number }>;
}

export interface DefaultFormData {
  title: string;
  startDate: string;
  endDate: string;
  details: string;
  images: File[];
}

/**
 * Step One 에서 받을 정보
 */
export interface NoticeInfoStepOne {
  formData: DefaultFormData;
  onFormChange: (newData: Partial<DefaultFormData>) => void;
  onNext: () => void;
  showError: boolean;
}

/**
 * Step Two 에서 받을 정보보
 */
export interface NoticeInfoStepTwo {
  formData: {
    question: Array<{ question: string; maxWords: number }>;
  };
  onFormChange: (
    newData: Partial<{
      question: Array<{ question: string; maxWords: number }>;
    }>
  ) => void;
  showError: boolean;
}

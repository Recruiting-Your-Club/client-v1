/**
 * 사이드 바 <공고 관리> 타입 지정
 */

import { LucideIcon } from "lucide-react";

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
  title: string;
  date: string;
  stats: {
    total: number;
    inProgress: number;
    completed: number;
    joined: number;
  };
}

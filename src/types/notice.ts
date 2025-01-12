/**
 * 공고 관리 타입 지정
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

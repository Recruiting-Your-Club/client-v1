// src/data/notices.ts
import {
  SquareTerminal,
  Bot,
  BookOpen,
  Settings2,
  Users,
  UserRoundX,
  Clipboard,
  Speech,
  UserRoundCheck,
} from "lucide-react";
import { Notice, NoticeCardProps } from "@/types/notice";

export const notices: Notice[] = [
  {
    title: "지원자 관리",
    url: "#",
    icon: Users,
    isActive: true,
    items: [
      { title: "단계별 통합 관리", url: "#" },
      { title: "개별 관리", url: "#" },
    ],
  },
  {
    title: "불합격자 관리",
    url: "#",
    icon: UserRoundX,
    items: [{ title: "단계별 통합 관리", url: "#" }],
  },
  {
    title: "최종 합격자 관리",
    url: "#",
    icon: UserRoundCheck,
    items: [{ title: "단계별 통합 관리", url: "#" }],
  },

  {
    title: "모집 과정 관리",
    url: "#",
    icon: BookOpen,
    items: [{ title: "모집 프로세스 추가 및 수정", url: "#" }],
  },
  {
    title: "공고 편집",
    url: "#",
    icon: Clipboard,
    items: [
      { title: "모집 공고 편집", url: "#" },
      { title: "지원서 편집", url: "#" },
    ],
  },
  {
    title: "면접 관리",
    url: "#",
    icon: Speech,
    items: [
      { title: "시간대 별 지원자 편성", url: "#" },
      { title: "면접 질문 정리", url: "#" },
      { title: "면접 타임 별 평가표 조회", url: "#" },
    ],
  },
];

export const noticeCardProps: NoticeCardProps[] = [
  {
    id: 1,
    title: "[IT/소프트웨어] 동아리 En# 신입 부원 모집",
    date: "25.01.16",
    progress: "모집 진행 중",
    stats: {
      total: 1,
      inProgress: 1,
      completed: 0,
      joined: 0,
    },
  },
  {
    id: 2,
    title: "test",
    date: "25.01.31",
    progress: "모집 진행 중",
    stats: {
      total: 0,
      inProgress: 0,
      completed: 0,
      joined: 0,
    },
  },
];

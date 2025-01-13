"use client";

import { NoticeCardProps } from "@/types/notice";
import { Card, CardFooter, CardHeader } from "../ui/card";
import { Badge } from "../ui/badge";
import { Separator } from "../ui/separator";
import { CalendarClock } from "lucide-react";

const NoticeCard = ({
  noticeCardProp,
}: {
  noticeCardProp: NoticeCardProps;
}) => {
  return (
    <Card className="w-[400px] h-[200px] max-w-[500px] cursor-pointer transition-all duration-200 hover:shadow-lg hover:-translate-y-1">
      <CardHeader className="h-[130px] flex flex-col justify-between">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-pretendard-semiBold max-w-[70%]">
            {noticeCardProp.title}
          </h3>
          <Badge
            variant="secondary"
            className="bg-pink-100 text-pink-700 hover:bg-pink-100 ml-2"
          >
            {noticeCardProp.progress}
          </Badge>
        </div>
        <time className="flex text-sm font-pretendard-semiBold text-sidebar-foreground/70 ">
          <CalendarClock className="mr-2" />
          {noticeCardProp.date}
        </time>
      </CardHeader>
      <CardFooter className="border-t pt-4">
        <div className="flex gap-4 text-sm font-pretendard-semiBold text-sidebar-foreground/70">
          <div>전체 {noticeCardProp.stats.total}</div>
          <div>평가 대상 {noticeCardProp.stats.inProgress}</div>
          <div>불합격 {noticeCardProp.stats.completed}</div>
          <div>합격 {noticeCardProp.stats.joined}</div>
        </div>
      </CardFooter>
    </Card>
  );
};

export default NoticeCard;

import { noticeCardProps } from "@/data/notices";
import NoticeCard from "./NoticeCard";
import AddNoticeCard from "./AddNoticeCard";

const TotalNoticeCard = () => {
  return (
    <div className="container py-8">
      <h1 className="font-pretendard-semiBold text-4xl">모집 공고</h1>
      <h3 className="mt-3 font-pretendard-bold text-xl text-sidebar-foreground/70 ">
        현재 진행 중인 공고를 관리하세요
      </h3>
      <div className="border-b border-gray-200 mt-6 mb-6 w-full mr-4"></div>
      <div className="mt-3 flex flex-wrap gap-4">
        {noticeCardProps.map((notice) => (
          <NoticeCard key={notice.id} noticeCardProp={notice} />
        ))}
        <AddNoticeCard />
      </div>
    </div>
  );
};

export default TotalNoticeCard;

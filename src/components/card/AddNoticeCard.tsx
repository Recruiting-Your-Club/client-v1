"use client";

import { Plus } from "lucide-react";
import { Card } from "../ui/card";
import { useState } from "react";
import CreateNoticeModal from "../modal/create_notice/CreateNoticeModal";

const AddNoticeCard = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenChange = (open: boolean) => {
    setIsOpen(open);
  };

  return (
    <div>
      <Card
        onClick={() => setIsOpen(true)}
        className="flex w-[400px] h-[200px] cursor-pointer items-center justify-center border-2 border-dashed transition-all duration-200 hover:border-primary hover:bg-accent hover:shadow-lg hover:-translate-y-1 hover:bg-gray-100"
      >
        <div className="flex flex-col items-center gap-2 text-sidebar-foreground/70 font-pretendard-semiBold">
          <Plus className="h-6 w-6" />
          <span>새 공고 추가</span>
        </div>
      </Card>

      <CreateNoticeModal isOpen={isOpen} onOpenChange={handleOpenChange} />
    </div>
  );
};

export default AddNoticeCard;

"use client";

import { useRouter } from "next/navigation";
import { Plus } from "lucide-react";
import DefaultButton from "../ui/DefaultButton";
import { Button } from "../ui/button";

const CreateClubButton = () => {
  const router = useRouter();

  return (
    <Button
      variant="ghost"
      className="w-full items-center flex gap-3 text-indigo-500 hover:text-indigo-500 justify-start text-xl"
      onClick={() => router.push("/channels/create")}
    >
      <Plus className="h-7 w-7 rounded-2xl bg-indigo-200 text-indigo-500 " />
      <span>새 채널 만들기</span>
    </Button>
  );
};

export default CreateClubButton;

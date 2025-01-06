"use client";

import { useRouter } from "next/navigation";
import { Plus } from "lucide-react";
import DefaultButton from "../ui/DefaultButton";

const CreateClubButton = () => {
  const router = useRouter();

  return (
    <DefaultButton
      variant="ghost"
      className="w-full items-center flex gap-3 text-indigo-500 justify-start text-xl"
      onClick={() => router.push("/channels/create")}
    >
      <Plus size={40} className="rounded-2xl bg-indigo-200 text-indigo-500" />
      <span>새 채널 만들기</span>
    </DefaultButton>
  );
};

export default CreateClubButton;

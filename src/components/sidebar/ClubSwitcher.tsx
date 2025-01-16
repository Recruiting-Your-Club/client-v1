"use client";

import { useState } from "react";
import { ChevronsUpDown, Plus } from "lucide-react";
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "../ui/sidebar";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuItem,
  DropdownMenuShortcut,
  DropdownMenuSeparator,
} from "../ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Club } from "@/types/club";
import { useParams, useRouter } from "next/navigation";

const getClubInformation = (clubs: Club[]): Club | undefined => {
  const params = useParams();
  const clubId = params?.id;

  const selectedClub = clubs.find((club) => club.id === clubId);
  return selectedClub;
};

const ClubSwitcher = ({ clubs }: { clubs: Club[] }) => {
  const { isMobile } = useSidebar();
  const router = useRouter();

  const selectedClub = getClubInformation(clubs);
  if (!selectedClub) {
    {
      /*여기는 나중에 에러 페이지 컴포넌트 따로 만들어서 추가하기 */
    }
    return <div>해당 동아리 정보를 찾을 수 없습니다.</div>;
  }

  const [activeClub, setActiveClub] = useState(selectedClub);

  const handleActiveClub = (club: Club) => {
    setActiveClub(club);
    router.push(`/channels/${club.id}`);
  };

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton
              size="lg"
              className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
            >
              <Avatar className="h-10 w-10 rounded-lg">
                <AvatarImage src={activeClub.imageUrl} alt={activeClub.name} />
                <AvatarFallback className="rounded-lg">CN</AvatarFallback>
              </Avatar>
              <div className="grid flex-1 text-left text-lg leading-tight">
                <span className="truncate font-pretendard-semiBold">
                  {activeClub.name}
                </span>
                <span className="truncate text-sm font-pretendard-regular">
                  {activeClub.description}
                </span>
              </div>
              <ChevronsUpDown className="ml-auto" />
            </SidebarMenuButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg"
            align="start"
            side={isMobile ? "bottom" : "right"}
            sideOffset={4}
          >
            <DropdownMenuLabel className="text-xs text-sidebar-accent-foreground font-pretendard-semiBold">
              내 동아리
            </DropdownMenuLabel>
            {clubs.map((club, index) => (
              <DropdownMenuItem
                key={club.name}
                onClick={() => handleActiveClub(club)}
                className="gap-2 p-2 cursor-pointer"
              >
                <Avatar className="h-6 w-6 rounded-lg">
                  <AvatarImage src={club.imageUrl} alt={club.name} />
                  <AvatarFallback className="rounded-lg">CN</AvatarFallback>
                </Avatar>
                <span className="font-pretendard-regular">{club.name}</span>

                <DropdownMenuShortcut>⌘{index + 1}</DropdownMenuShortcut>
              </DropdownMenuItem>
            ))}
            <DropdownMenuSeparator />
            <DropdownMenuItem className="gap-2 p-2">
              <div className="flex size-6 items-center justify-center rounded-md border bg-background">
                <Plus className="size-5" />
              </div>
              <div
                className="font-pretendard-regular text-muted-foreground cursor-pointer"
                onClick={() => router.push("/channels/create")}
              >
                새 동아리 추가하기
              </div>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  );
};

export default ClubSwitcher;

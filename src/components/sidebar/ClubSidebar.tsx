"use client";

import { ChevronDown, ChevronRight, Home, SquareTerminal } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "../ui/dropdown-menu";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarSeparator,
  useSidebar,
} from "../ui/sidebar";
import { Club } from "@/types/club";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import ClubSwitcher from "./ClubSwitcher";
import { notices } from "@/data/notices";
import { userData } from "@/data/userData";
import NoticeManager from "./NoticeManager";
import NavUser from "./NavUser";

//백에 동아리의 id값과 이름, 정보 넘겨달라고 얘기

const clubs: Club[] = [
  {
    id: "1",
    name: "엔샵",
    description: "세종대학교 SW동아리",
    imageUrl: "../img/club_image_example1.jpeg",
  },
  {
    id: "2",
    name: "그리디",
    description: "세종대학교 SW동아리",
    imageUrl: "../img/club_image_example1.jpeg",
  },
  {
    id: "3",
    name: "EnSharp",
    description: "제로베이스 SW 개발동아리 EnSharp 입니다.",
    imageUrl: "../img/club_image_example1.jpeg",
  },
];

const ClubSidebar = ({ ...props }: React.ComponentProps<typeof Sidebar>) => {
  const router = useRouter();
  const { state } = useSidebar();

  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <ClubSwitcher clubs={clubs} />
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton className="h-16" tooltip="모집 공고" asChild>
                <Link href="#">
                  <Home />

                  <span className="font-pretendard-semiBold text-xl ml-2">
                    모집 공고
                  </span>
                </Link>
              </SidebarMenuButton>
              <SidebarSeparator />
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroup>
        <NoticeManager notices={notices} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={userData} />
      </SidebarFooter>
    </Sidebar>
  );
};

export default ClubSidebar;

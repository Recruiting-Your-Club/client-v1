import { ChevronDown } from "lucide-react";
import { DropdownMenu, DropdownMenuTrigger } from "../ui/dropdown-menu";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "../ui/sidebar";

const ClubSidebar = () => {
  return (
    <Sidebar>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuButton size="lg">
                  <div className="flex aspect-square size-12 items-center justify-center rounded-lg bg-sidebar-primary">
                    <span className="text-2xl text-sidebar-primary-foreground">
                      E
                      {/** 여기는 동아리 이니셜 아니면 이미지 박는게 좋을 듯? */}
                    </span>
                  </div>
                  <div className="flex flex-col gap-0.5 pl-2">
                    <span className="text-xl font-pretendard-semiBold">
                      En#
                    </span>
                    <span className="text-sm font-pretendard-regular text-gray-600">
                      it/소프트웨어
                    </span>
                  </div>
                  <ChevronDown className="ml-auto size-10 " />
                </SidebarMenuButton>
              </DropdownMenuTrigger>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent></SidebarContent>
    </Sidebar>
  );
};

export default ClubSidebar;

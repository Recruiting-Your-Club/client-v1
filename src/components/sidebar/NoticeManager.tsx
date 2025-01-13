"use client";

import { ChevronRight, type LucideIcon } from "lucide-react";
import { Notice } from "@/types/notice";
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  useSidebar,
} from "../ui/sidebar";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "../ui/collapsible";
import Link from "next/link";

const NoticeManager = ({ notices }: { notices: Notice[] }) => {
  const { state } = useSidebar();
  return (
    <SidebarGroup>
      {state === "expanded" ? (
        <SidebarGroupLabel className="font-pretendard-semiBold text-sm">
          공고 관리
        </SidebarGroupLabel>
      ) : null}

      <SidebarMenu>
        {notices.map((notice) => (
          <Collapsible
            key={notice.title}
            asChild
            defaultOpen={notice.isActive}
            className="group/collapsible"
          >
            <SidebarMenuItem>
              <CollapsibleTrigger asChild>
                <SidebarMenuButton tooltip={notice.title}>
                  {notice.icon && <notice.icon />}
                  <span>{notice.title}</span>
                  <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                </SidebarMenuButton>
              </CollapsibleTrigger>
              <CollapsibleContent>
                <SidebarMenuSub>
                  {notice.items?.map((subItem) => (
                    <SidebarMenuSubItem key={subItem.title}>
                      <SidebarMenuSubButton asChild>
                        <Link href={subItem.url}>
                          <span>{subItem.title}</span>
                        </Link>
                      </SidebarMenuSubButton>
                    </SidebarMenuSubItem>
                  ))}
                </SidebarMenuSub>
              </CollapsibleContent>
            </SidebarMenuItem>
          </Collapsible>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  );
};

export default NoticeManager;

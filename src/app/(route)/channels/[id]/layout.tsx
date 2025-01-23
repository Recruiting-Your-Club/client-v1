import React from "react";
import Mainboard from "@/components/dashboard/Mainboard";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import ClubSidebar from "@/components/sidebar/ClubSidebar";
import { Separator } from "@/components/ui/separator";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
} from "@/components/ui/breadcrumb";

const clubDashBoard = ({ children }: { children: React.ReactNode }) => {
  return (
    <SidebarProvider>
      <ClubSidebar />
      <main>
        <SidebarTrigger />
        <div className="ml-4">{children}</div>
      </main>
    </SidebarProvider>
  );
};

export default clubDashBoard;

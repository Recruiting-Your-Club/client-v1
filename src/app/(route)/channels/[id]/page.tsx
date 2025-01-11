import React from "react";
import Mainboard from "@/components/dashboard/Mainboard";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import ClubSidebar from "@/components/sidebar/ClubSidebar";

const clubDashBoard = ({ children }: { children: React.ReactNode }) => {
  return (
    <SidebarProvider>
      <ClubSidebar />
      <main>
        <SidebarTrigger />
        {children}
      </main>
    </SidebarProvider>
  );
};

export default clubDashBoard;

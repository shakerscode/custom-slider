import Sidebar from "@/component/dashboard/Sidebar";
import TopBar from "@/component/dashboard/TopBar";
import React from "react"; 

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen w-full bg-[#E5E7EB]">
         <TopBar /> 
      

      {/* 2. Main Scrollable Area */}
      <div className="">
        <Sidebar />   
        {/* Dynamic Page Content */}
        <main className="ml-20 bg-[#F3F4F6] min-h-[calc(100vh-80px)] p-6">
          {children}
        </main>
      </div>
    </div>
  );
}
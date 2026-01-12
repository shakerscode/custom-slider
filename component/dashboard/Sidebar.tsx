"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Home,
  Users,
  Briefcase,
  MessageSquare,
  PieChart,
  Settings,
  SlidersHorizontal,
  ShoppingCart,
} from "lucide-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const SidebarItem = ({
  Icon,
  href,
}: {
  Icon: React.ElementType;
  href: string;
}) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={cn(
        "relative group flex items-center justify-center w-full cursor-pointer py-5 transition-colors duration-200",
        isActive
          ? "text-blue-600"
          : "text-gray-900 hover:text-gray-600 hover:bg-gray-50"
      )}
    >
      {isActive && (
        <div className="absolute left-0 top-1/2 -translate-y-1/2 h-6 w-1 bg-blue-600 rounded-r-full" />
      )}
      <Icon size={22} strokeWidth={2.5} />
    </Link>
  );
};

export default function Sidebar() {
  return (
    <aside className="hidden md:flex flex-col w-20 bg-white border-r border-gray-200 min-h-[calc(100vh-80px)] fixed left-0 top-20 z-50 shadow-[1px_0_20px_0_rgba(0,0,0,0.02)]">
      <nav className="w-full flex flex-col gap-1">
        {/* You can update hrefs to real routes later */}
        <SidebarItem Icon={Home} href="/dashboard/home" />
        <SidebarItem Icon={Users} href="/dashboard/users" />
        <SidebarItem Icon={Briefcase} href="/dashboard/projects" />
        <SidebarItem Icon={MessageSquare} href="/dashboard/messages" />

        {/* This is the active page in your design */}
        <SidebarItem Icon={PieChart} href="/dashboard" />

        <SidebarItem Icon={Settings} href="/dashboard/settings" />
        <SidebarItem Icon={SlidersHorizontal} href="/dashboard/filters" />
        <SidebarItem Icon={ShoppingCart} href="/dashboard/shop" />
      </nav>
    </aside>
  );
}

"use client";

import React from "react";
import Image from "next/image";
import { Users } from "lucide-react";

export default function TopBar() {
  return (
    <header className="h-20 w-full bg-white border-b border-gray-200 flex items-center justify-between px-8 md:px-12 sticky top-0 z-40">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <div className="text-yellow-400 flex items-center">
          <Users size={30} className="fill-yellow-400 text-yellow-400" />
        </div>
        <span className="text-xl font-bold text-blue-600 tracking-tight">
          Kumele
        </span>
      </div>

      {/* Profile */}
      <div className="h-10 w-10 rounded-full overflow-hidden border border-gray-200 relative">
        <Image
          src="https://i.pravatar.cc/150?img=11"
          alt="Profile"
          fill
          className="object-cover"
        />
      </div>
    </header>
  );
}
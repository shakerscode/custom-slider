"use client";

import Rewards from "@/component/dashboard/Rewords";
import MoneyEarned from "@/component/dashboard/MoneyEarned";

export default function HistoryPage() {
  return (
    <div className="bg-white rounded-lg shadow-sm min-h-[600px] overflow-hidden">
      {/* Full Width Header inside Card */}
      <div className="border-b border-gray-100 px-8 py-6">
        <h1 className="text-xl font-bold text-black tracking-tight">
          History & Statistics
        </h1>
      </div>

      {/* Card Body */}
      <div className="p-8">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          {/* Left: Reward Rings */}
          <Rewards />

          {/* Right: Money Earned */}
          <MoneyEarned />
        </div>
      </div>
    </div>
  );
}

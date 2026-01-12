import React from "react";
import { Info } from "lucide-react";
import { ResponsiveContainer, Cell, PieChart, Pie } from "recharts";
import Award from "../icons/Award";

// Data config
const ringData = [
  { name: "Gold", value: 22, color: "#D1A534" },
  { name: "Silver", value: 21, color: "#C0C0C0" }, // Adjusted silver to standard gray
  { name: "Bronze", value: 31, color: "#CD7F32" },
];

function Rewards() {
  return (
    <div className=" bg-white rounded-xl w-full max-w-lg font-sans">
      {/* Injecting styles locally for the pendulum animation.
        This swings 15 degrees left and right.
      */}

      {/* Header Section */}
      <div className="flex items-start gap-3 mb-8">
        <h2 className="text-2xl font-normal text-black leading-none">
          Reward Rings
        </h2>
        {/* Animated Icon */}
        <Award size={32} className="animate-pendulum"/>
      </div>

      <div className="flex items-center gap-10">
        {/* Chart Section */}
        {/* Note: innerRadius={0} makes it a Pie (solid), not a Ring (donut) */}
        <div className="w-52 h-52 relative shrink-0">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={ringData}
                cx="50%"
                cy="50%"
                innerRadius={0}
                outerRadius={96}  
                dataKey="value"
                startAngle={90}
                endAngle={-270}
                stroke="none"
              >
                {ringData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Legend Section */}
        <div className="flex flex-col gap-5">
          {ringData.map((item) => (
            <div key={item.name} className="flex items-start gap-3">
              {/* Large colored circle */}
              <div
                className="w-6 h-6 rounded-full shrink-0 mt-0.5"
                style={{ backgroundColor: item.color }}
              />

              <div className="flex flex-col">
                <div className="flex items-center gap-1">
                  <span className="text-xl text-gray-900 font-normal leading-tight">
                    {item.name}
                  </span>
                  {/* Small Info Icon */}
                  <Info
                    size={10}
                    strokeWidth={3}
                    className="text-black opacity-80 mt-1"
                  />
                </div>
                <p className="text-[15px] text-gray-800 font-light mt-0.5">
                  Achieved {item.value} medal{item.value > 1 ? "s" : ""}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Rewards;

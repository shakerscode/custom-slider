import { ElementType, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  ResponsiveContainer,
  Cell,
  Tooltip,
} from "recharts";
import {
  Check,
  Wind,
  PartyPopper,
  ChevronDown,
  ChevronUp,
  Snowflake,
  Utensils,
  Leaf,
  Briefcase,
  Music,
  Sun,
  Heart,
  Dumbbell,
  Coffee,
} from "lucide-react";

// --- 1. Data Structure ---
// We update the 'Jun' entry to hold an 'events' array containing both items.
const barData = [
  {
    name: "Jan",
    value: 50,
    active: false,
    events: [
      {
        title: "New Year Bash",
        price: "$120",
        sub: "Party",
        icon: PartyPopper,
      },
      { title: "Ski Trip", price: "$300", sub: "Travel", icon: Snowflake },
    ],
  },
  {
    name: "Feb",
    value: 60,
    active: false,
    events: [
      {
        title: "Valentine's Dinner",
        price: "$150",
        sub: "Dining",
        icon: Heart,
      },
      { title: "Jazz Club", price: "$45", sub: "Music", icon: Music },
    ],
  },
  {
    name: "Mar",
    value: 65,
    active: false,
    events: [
      { title: "Spring Cleaning", price: "$30", sub: "Home", icon: Leaf },
      { title: "Coffee Chat", price: "$15", sub: "Networking", icon: Coffee },
    ],
  },
  {
    name: "Apr",
    value: 45,
    active: false,
    events: [
      { title: "Gym Membership", price: "$50", sub: "Fitness", icon: Dumbbell },
      {
        title: "Indie Concert",
        price: "$85",
        sub: "Entertainment",
        icon: Music,
      },
    ],
  },
  {
    name: "May",
    value: 68,
    active: false,
    events: [
      { title: "Freelance Gig", price: "$500", sub: "Work", icon: Briefcase },
      { title: "Mother's Day", price: "$90", sub: "Family", icon: Heart },
    ],
  },
  {
    name: "Jun",
    value: 60,
    active: true, // Yellow bar
    events: [
      {
        title: "Group meditation",
        price: "$305",
        sub: "Spirituality",
        icon: Wind,
      },
      {
        title: "90's Hip-Hop",
        price: "$100",
        sub: "House Party",
        icon: PartyPopper,
      },
    ],
  },
  {
    name: "Jul",
    value: 80,
    active: false,
    events: [
      { title: "Beach Day", price: "$40", sub: "Travel", icon: Sun },
      { title: "Pool Party", price: "$25", sub: "Social", icon: PartyPopper },
    ],
  },
  {
    name: "Aug",
    value: 75,
    active: false,
    events: [
      { title: "Music Festival", price: "$250", sub: "Concert", icon: Music },
      { title: "Road Trip", price: "$120", sub: "Travel", icon: Wind },
    ],
  },
  {
    name: "Sep",
    value: 40,
    active: false,
    events: [
      {
        title: "Tech Conference",
        price: "$150",
        sub: "Education",
        icon: Briefcase,
      },
      { title: "Vegan Dinner", price: "$80", sub: "Dining", icon: Utensils },
    ],
  },
  {
    name: "Oct",
    value: 72,
    active: false,
    events: [
      {
        title: "Halloween Bash",
        price: "$90",
        sub: "Party",
        icon: PartyPopper,
      },
      { title: "Pumpkins", price: "$20", sub: "Home", icon: Leaf },
    ],
  },
  {
    name: "Nov",
    value: 50,
    active: false,
    events: [
      { title: "Charity Run", price: "$30", sub: "Community", icon: Wind },
      { title: "Harvest Feast", price: "$110", sub: "Dining", icon: Utensils },
    ],
  },
  {
    name: "Dec",
    value: 85,
    active: false,
    events: [
      {
        title: "Holiday Gifts",
        price: "$400",
        sub: "Shopping",
        icon: Snowflake,
      },
      { title: "NYE Gala", price: "$200", sub: "Party", icon: PartyPopper },
    ],
  },
];

const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

interface EventItem {
  title: string;
  price: string;
  sub: string;
  icon: ElementType;
}

// 2. Update BarDataItem to include the optional 'events' array
interface BarDataItem {
  name: string;
  value: number;
  active: boolean;
  events?: EventItem[];
}

// 3. Define strict props for the Tooltip (No 'any'!)
interface CustomTooltipProps {
  active?: boolean;
  // The payload is an array of objects, where each object
  // has a nested 'payload' property matching our BarDataItem
  payload?: { payload: BarDataItem }[];
  label?: string;
}

// --- 2. Custom Tooltip Component ---
const CustomTooltip = ({ active, payload }: CustomTooltipProps) => {
  // Guard clause: Only render if we have data AND the 'events' array exists
  if (!active || !payload || !payload.length || !payload[0].payload.events) {
    return null;
  }

  const { events } = payload[0].payload;
  const [event1, event2] = events;

  return (
    <div className="flex flex-col items-center transform -translate-y-2">
      {/* Tooltip Card */}
      <div className="flex items-stretch bg-gray-50/95 rounded-lg shadow-xl border border-gray-100 overflow-hidden">
        {/* Left Side: Meditation */}
        <div className="px-3 py-2">
          <p className="text-[11px] font-bold text-gray-900 leading-tight mb-0.5">
            {event1.title}
          </p>
          <div className="flex items-center gap-1.5 text-[10px] text-gray-500">
            <span className="font-bold text-gray-600">{event1.price}</span>
            <event1.icon size={10} className="text-gray-400" />
            <span>{event1.sub}</span>
          </div>
        </div>

        {/* Vertical Divider */}
        <div className="w-[1px] bg-gray-200 my-1"></div>

        {/* Right Side: Hip-Hop */}
        <div className="px-3 py-2">
          <p className="text-[11px] font-bold text-gray-900 leading-tight mb-0.5">
            {event2.title}
          </p>
          <div className="flex items-center gap-1.5 text-[10px] text-gray-500">
            <span className="font-bold text-gray-600">{event2.price}</span>
            <event2.icon size={10} className="text-gray-400" />
            <span>{event2.sub}</span>
          </div>
        </div>
      </div>

      {/* Dashed Connector Line */}
      <div className="h-8 border-l-2 border-dashed border-gray-300"></div>
    </div>
  );
};

function MoneyEarned() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div className="w-full max-w-2xl mx-auto p-6 bg-white rounded-xl">
      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>

      {/* Header */}
      <div className="flex justify-between items-start mb-8 relative">
        <div className="flex items-center gap-2">
          <span className="text-xl text-gray-800 font-normal">
            Money Earned <span className="font-bold text-black">$905</span>
          </span>
        </div>

        <div className="relative">
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="flex items-center gap-2 bg-gray-100 px-3 py-1.5 rounded-lg hover:bg-gray-200 transition-colors"
          >
            <span className="text-sm font-medium text-gray-900">2022</span>
            {isDropdownOpen ? (
              <ChevronUp size={16} />
            ) : (
              <ChevronDown size={16} />
            )}
          </button>
          {isDropdownOpen && (
            <div className="absolute top-full right-0 mt-2 w-24 bg-white rounded-lg shadow-xl border border-gray-100 py-2 z-10 max-h-60 overflow-y-auto no-scrollbar">
              {months.map((m) => (
                <p
                  key={m}
                  className="px-4 py-1.5 text-xs font-medium text-gray-700 hover:bg-blue-50 cursor-pointer text-center"
                  onClick={() => setIsDropdownOpen(false)}
                >
                  {m}
                </p>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Chart */}
      <div className="w-full h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={barData}
            margin={{ top: 20, right: 0, left: 0, bottom: 20 }}
            barSize={32}
            barGap={10}
          >
            <XAxis
              dataKey="name"
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#000", fontSize: 14, dy: 15 }}
            />

            {/* Tooltip Configuration */}
            <Tooltip
              content={<CustomTooltip />}
              cursor={false} // Hides the gray hover bar
              allowEscapeViewBox={{ y: true }} // Allows tooltip to float above chart
            />

            <Bar dataKey="value" radius={[6, 6, 6, 6]} isAnimationActive={true}>
              {barData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={entry.active ? "#FACC15" : "#2563EB"}
                  className="hover:opacity-90 transition-opacity cursor-pointer"
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default MoneyEarned;

 
import StackedSlider from "@/component/EventSlider"; 
import { Home, BookOpen, ShoppingBag, LayoutGrid, User } from "lucide-react";

export default function Page() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col justify-end overflow-hidden">
      
      {/* Dynamic Background or Content Area */}
      <div className="flex-1 flex items-center justify-center p-4">
        <StackedSlider />
      </div>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-black border-t border-zinc-800 px-6 py-4">
        <div className="max-w-md mx-auto flex justify-between items-center">
          <NavItem icon={<Home size={24} />} label="Home" active />
          <NavItem icon={<BookOpen size={24} />} label="Blog" />
          <NavItem icon={<ShoppingBag size={24} />} label="Shop" />
          <NavItem icon={<LayoutGrid size={24} />} label="More" />
          <NavItem icon={<User size={24} />} label="Profile" />
        </div>
      </nav>
    </main>
  );
}

function NavItem({ icon, label, active = false }: { icon: React.ReactNode, label: string, active?: boolean }) {
  return (
    <div className={`flex flex-col items-center gap-1 cursor-pointer ${active ? 'text-blue-500' : 'text-zinc-500'}`}>
      <div className={active ? 'bg-blue-600/10 p-2 rounded-xl text-blue-500' : ''}>
        {icon}
      </div>
      <span className="text-[10px] font-medium uppercase tracking-wider">{label}</span>
    </div>
  );
}
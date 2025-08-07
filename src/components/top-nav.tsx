import ProfileMenu from "./profile-menu";
import { SidebarTrigger } from "./ui/sidebar";

export default function TopNavBar() {
  return (
    <header className="p-3 flex gap-2 bg-[#283040] text-black justify-between items-center shadow-xs">
      <div className="flex items-center gap-2 text-white">
        <SidebarTrigger />
        <span className="text-xl font-semibold">Evolve GCP</span>
      </div>
      <ProfileMenu />
    </header>
  );
}

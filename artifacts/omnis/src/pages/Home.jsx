import HomeHeader from "@/components/home/HomeHeader";
import SplitScreen from "@/components/home/SplitScreen";
import ImpactStats from "@/components/home/ImpactStats";
import SelectedWork from "@/components/home/SelectedWork";
import HomeFooter from "@/components/home/HomeFooter";
function Home() {
  return <div className="flex flex-col min-h-[100dvh] w-full bg-[#0a0a0a] text-white">
      <HomeHeader />
      <SplitScreen />
      <ImpactStats />
      <SelectedWork />
      <HomeFooter />
    </div>;
}
export {
  Home as default
};

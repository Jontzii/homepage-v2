import DetailsComponent from "@/app/components/detailsComponent";
import InfoComponent from "@/app/components/infoComponent";
import LandingComponent from "@/app/components/landingComponent";
import CursorComponent from "@/app/components/cursorComponent";
import BottomButton from "./components/bottomButton";

export default function Home() {
  return (
    <main className="w-full min-h-screen relative bg-slate-900 text-slate-300 selection:bg-teal-600">
      <CursorComponent />
      <div className="w-full h-full flex flex-col items-center justify-between">
        <LandingComponent />
        <InfoComponent />
        <DetailsComponent />
      </div>
      <BottomButton />
    </main>
  );
}

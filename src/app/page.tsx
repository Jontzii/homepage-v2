import CursorComponent from "@/app/components/cursorComponent";
import LandingComponent from "@/app/components/landingComponent";
import InfoComponent from "@/app/components/infoComponent";
import DetailsComponent from "@/app/components/detailsComponent";
import BottomButton from "@/app/components/bottomButton";
import { inter } from "@/app/components/fonts";

export default function Home() {
  return (
    <main className="w-full min-h-screen relative bg-slate-900 text-slate-300 selection:bg-teal-600 scroll-smooth">
      <CursorComponent />
      <div
        className={`w-full h-full flex flex-col items-center justify-between ${inter.variable} font-inter`}
      >
        <LandingComponent />
        <InfoComponent />
        <DetailsComponent />
      </div>
      <BottomButton />
    </main>
  );
}

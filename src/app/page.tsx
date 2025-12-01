import { inter } from "@/app/components/common/fonts";
import { AboutComponent } from "./components/about";
import { BottomButton, BottomText, CursorComponent } from "./components/common";
import { ExperienceComponent } from "./components/experience";
import { LandingComponent } from "./components/landing";

export default async function Home() {
  return (
    <main className="w-full min-h-screen relative bg-slate-900 text-slate-300 selection:bg-teal-600 scroll-smooth">
      <CursorComponent />
      <div
        className={`w-full h-full flex flex-col items-center justify-between ${inter.variable} font-inter`}
      >
        <LandingComponent />
        <AboutComponent />
        <ExperienceComponent />
      </div>
      <BottomButton />
      <BottomText />
    </main>
  );
}

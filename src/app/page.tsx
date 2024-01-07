import CursorComponent from "@/app/components/common/cursorComponent";
import LandingComponent from "@/app/components/landing/landingComponent";
import AboutComponent from "@/app/components/about/aboutComponent";
import ExperienceComponent from "@/app/components/experience/experienceComponent";
import BottomButton from "@/app/components/common/bottomButton";
import BottomText from "./components/common/bottomText";
import { inter } from "@/app/components/common/fonts";

export default function Home() {
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

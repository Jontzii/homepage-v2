import { inter } from '@/app/components/common/fonts';
import { AboutComponent } from './components/about';
import { BottomButton, BottomText, CursorComponent } from './components/common';
import { ExperienceComponent } from './components/experience';
import { LandingComponent } from './components/landing';

export default async function Home() {
  return (
    <main className="relative min-h-screen w-full scroll-smooth bg-slate-900 text-slate-300 selection:bg-teal-600">
      <CursorComponent />
      <div
        className={`flex h-full w-full flex-col items-center justify-between ${inter.variable} font-inter`}
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

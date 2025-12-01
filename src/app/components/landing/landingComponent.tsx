import { inter, rubik } from '@/app/components/common/fonts';
import { ScrollToAbout } from './scrollToAbout';

export async function LandingComponent() {
  const emphasizeWord = 'text-teal-500 font-bold selection:text-slate-900';

  return (
    <div id="top" className="relative h-screen w-full">
      <div
        id="landing-text-holder"
        className="flex h-full w-full flex-col items-center justify-center pr-4 pl-4 text-left md:pr-0 md:pl-0"
      >
        <div className={`${rubik.variable} font-rubik`}>
          <p className="mb-1 text-xl md:text-3xl lg:text-4xl 2xl:text-5xl">
            HEY THERE,
            <br />
            MY NAME IS{' '}
            <span className="text-teal-500 selection:text-slate-900">
              JOONAS HILTUNEN
            </span>
            .
          </p>
          <p className="text-md md:text-xl lg:text-2xl 2xl:text-3xl">
            I LIKE TO CREATE ALL KINDS OF SOFTWARE.
          </p>
          <p
            className={`md:text-md pt-2 text-xs sm:text-sm lg:text-lg 2xl:text-xl ${inter.variable} font-inter`}
          >
            My specialities are{' '}
            <span className={emphasizeWord}>full-stack</span> and{' '}
            <span className={emphasizeWord}>backend</span> development
            <br />
            with <span className={emphasizeWord}>TypeScript</span> and{' '}
            <span className={emphasizeWord}>C#</span>{' '}
          </p>
        </div>
      </div>

      <div className="absolute bottom-32 flex w-full items-center justify-center text-slate-400 md:bottom-8">
        <ScrollToAbout />
      </div>
    </div>
  );
}

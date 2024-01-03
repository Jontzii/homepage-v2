import { inter, rubik } from "@/app/components/fonts";
import ScrollToAbout from "@/app/components/scrollToAbout";

export default function LandingComponent() {
  const emphasizeWord = "text-teal-500 font-bold selection:text-slate-900";

  return (
    <div id="top" className="w-full h-screen relative">
      <div
        id="landing-text-holder"
        className="h-full w-full flex flex-col justify-center items-center text-left pl-4 md:pl-0 pr-4 md:pr-0"
      >
        <div className={`${rubik.variable} font-rubik`}>
          <p className="text-xl md:text-3xl lg:text-4xl 2xl:text-5xl mb-1">
            HEY THERE,
            <br />
            MY NAME IS{" "}
            <span className="text-teal-500 selection:text-slate-900">
              JOONAS HILTUNEN
            </span>
            .
          </p>
          <p className="text-md md:text-xl lg:text-2xl 2xl:text-3xl">
            I LIKE TO CREATE ALL KINDS OF SOFTWARE.
          </p>
          <p
            className={`pt-2 text-xs sm:text-sm md:text-md lg:text-lg 2xl:text-xl ${inter.variable} font-inter`}
          >
            My specialities are{" "}
            <span className={emphasizeWord}>full-stack</span> and{" "}
            <span className={emphasizeWord}>backend</span> development
            <br />
            with <span className={emphasizeWord}>TypeScript</span> and{" "}
            <span className={emphasizeWord}>C#</span>{" "}
          </p>
        </div>
      </div>

      <div className="w-full absolute bottom-8 flex justify-center items-center text-slate-400">
        <ScrollToAbout />
      </div>
    </div>
  );
}

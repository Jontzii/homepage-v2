import Image from "next/image";
import profilePic from "@/public/img/profilepic.webp";

export default function InfoComponent() {
  return (
    <div id="about" className="w-full h-full text-center pt-24 pb-24 flex flex-col md:flex-row">
      <div className="w-full md:w-2/5 h-full m-0 md:m-4 pl-0 md:pl-16 lg:pl-32 pr-0 md:pr-8 lg:pr-16 flex justify-center md:justify-end items-center md:items-end">
        <div className="h-3/5 sm:h-2/5 md:h-full lg:h-4/5 xl:h-3/5 2xl:h-3/5 3xl:h-1/2 4xl:h-1/3 w-3/5 sm:w-2/5 md:w-full lg:w-4/5 xl:w-3/5 2xl:w-3/5 3xl:w-1/2 4xl:w-1/2 overflow-hidden rounded-full">
          <Image
            src={profilePic}
            alt="Picture of Joonas Hiltunen"
            placeholder="blur"
            priority
          />
        </div>
      </div>
      <div
        className={`w-full md:w-4/5 xl:w-3/5 3xl:w-2/5 h-full p-4 pt-8 md:pt-0 md:pl-8 md:pr-16 lg:pr-16 m-0 md:m-auto text-center md:text-left items-center`}
      >
        <p className="text-sm md:text-md lg:text-lg 2xl:text-xl 3xl:text-3xl">
          My name is Joonas Hiltunen, but I&apos;m also known as
          &quot;Jontzi&quot; online. I am a versatile full-stack software
          developer with around five years of comprehensive experience in
          various projects, from small one-man apps to large enterprise
          software. I excel in C# and JS/TS-based projects while being adaptable
          and quickly grasping new technologies as required. Currently, I am
          interested in expanding my expertise in cloud technologies.
        </p>
      </div>
    </div>
  );
}

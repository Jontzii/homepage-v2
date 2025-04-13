import Image from "next/image";
import LinkIconWrapper from "@/app/components/about/linkIconWrapper";
import profilePic from "@/public/img/profilepic.webp";
import IconGitHub from "@/app/assets/icon/iconGithub";
import IconLinkedIn from "@/app/assets/icon/iconLinkedIn";

export default function AboutComponent() {
  return (
    <div
      id="about"
      className="w-full h-full text-center pt-12 lg:pt-24 pb-12 lg:pb-24 flex flex-col lg:flex-row justify-center items-center"
    >
      <div className="w-full lg:w-1/2 p-4 flex justify-center lg:justify-end">
        <div className="w-full md:w-4/5 lg:w-full xl:w-4/5 2xl:w-4/5 mr-0 lg:ml-8 lg:mr-4 xl:ml-16 xl:mr-16 flex flex-row justify-center">
          <div className="w-2/3 overflow-hidden rounded-full">
            <Image
              src={profilePic}
              alt="Picture of Joonas Hiltunen"
              placeholder="blur"
              priority={false}
              sizes="(max-width: 1024px) 66vw, 33vw"
              quality={50}
            />
          </div>
        </div>
      </div>
      <div className="w-full lg:w-1/2 p-4 flex justify-center lg:justify-start">
        <div className="w-full md:w-4/5 lg:w-full xl:w-4/5 4xl:w-3/5 ml-0 lg:ml-4 lg:mr-8 xl:ml-16 xl:mr-16 flex flex-col justify-center lg:text-left">
          <p className="text-sm md:text-md lg:text-lg 2xl:text-xl 3xl:text-3xl">
            My name is Joonas Hiltunen, but I&apos;m also known as
            &quot;Jontzi&quot; online. I am a versatile full-stack software
            developer with over six years of comprehensive experience in various
            projects, from small one-man apps to large enterprise software. I
            excel in C# and JS/TS-based projects, where I have consistently
            demonstrated my ability to build complex but reliable applications,
            while being adaptable and quickly grasping new technologies as
            required. In the future, I am interested in taking on a more
            significant role in some larger projects, learning more about
            different e-commerce solutions, and in expanding my expertise in
            different cloud technologies.
          </p>
          <div className="pt-8 flex flex-col justify-center lg:justify-start">
            <p className="text-sm md:text-md lg:text-lg 2xl:text-xl 3xl:text-3xl">
              Lets get in touch
            </p>
            <div className="flex justify-center lg:justify-start">
              <LinkIconWrapper
                params={{
                  href: "https://www.github.com/jontzii",
                  icon: <IconGitHub />,
                }}
              />
              <LinkIconWrapper
                params={{
                  href: "https://www.linkedin.com/in/joohiltunen/",
                  icon: <IconLinkedIn />,
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

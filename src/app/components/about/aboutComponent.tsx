import IconGitHub from '@/app/assets/icon/iconGithub';
import IconLinkedIn from '@/app/assets/icon/iconLinkedIn';
import profilePic from '@/public/img/profilepic.webp';
import Image from 'next/image';
import { LinkIconWrapper } from './linkIconWrapper';

export async function AboutComponent() {
  return (
    <div
      id="about"
      className="flex h-full w-full flex-col items-center justify-center pt-12 pb-12 text-center lg:flex-row lg:pt-24 lg:pb-24"
    >
      <div className="flex w-full justify-center p-4 lg:w-1/2 lg:justify-end">
        <div className="mr-0 flex w-full flex-row justify-center md:w-4/5 lg:mr-4 lg:ml-8 lg:w-full xl:mr-16 xl:ml-16 xl:w-4/5 2xl:w-4/5">
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
      <div className="flex w-full justify-center p-4 lg:w-1/2 lg:justify-start">
        <div className="4xl:w-3/5 ml-0 flex w-full flex-col justify-center md:w-4/5 lg:mr-8 lg:ml-4 lg:w-full lg:text-left xl:mr-16 xl:ml-16 xl:w-4/5">
          <p className="md:text-md 3xl:text-3xl text-sm lg:text-lg 2xl:text-xl">
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
          <div className="flex flex-col justify-center pt-8 lg:justify-start">
            <p className="md:text-md 3xl:text-3xl text-sm lg:text-lg 2xl:text-xl">
              Lets get in touch
            </p>
            <div className="flex justify-center lg:justify-start">
              <LinkIconWrapper
                params={{
                  href: 'https://www.github.com/jontzii',
                  icon: <IconGitHub />,
                }}
              />
              <LinkIconWrapper
                params={{
                  href: 'https://www.linkedin.com/in/joohiltunen/',
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

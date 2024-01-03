import Image from "next/image";
import profilePic from "@/../public/img/profilepic.webp"

export default function InfoComponent() {
  return (
    <div className="w-full h-full text-center pt-24 pb-24 flex flex-col md:flex-row">
      <div className="w-full md:w-2/5 h-full m-0 md:m-4 pl-0 md:pl-32 pr-0 md:pr-16 flex justify-center md:justify-end items-center md:items-end">
        <div className="h-3/5 w-3/5 overflow-hidden rounded-full">
          <Image
            src={profilePic}
            alt="Picture of Joonas Hiltunen"
            placeholder="blur"
            className=""
            priority
          />
        </div>
      </div>
      <div className="w-full md:w-3/5 h-full p-4 pt-8 md:pt-0 md:pl-8 md:pr-32 m-0 md:m-auto text-center md:text-left items-center">
        <p>
          My name is Joonas Hiltunen and I am a versatile full-stack developer
          with around five years of comprehensive experience in various projects
          of different scales. I excel in C# and JavaScript/TypeScript based
          projects while being adaptable and quickly grasping new technologies
          as required. In the future, I am looking to expand my expertise in
          cloud technologies.
        </p>
      </div>
    </div>
  );
}

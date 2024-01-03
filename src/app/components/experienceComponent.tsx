import ExperienceBox from "@/app/components/experienceBox";
import { workDescription } from "../assets/content/workDescription";
import EducationBox from "./educationBox";
import HobbyBox from "./hobbyBox";
import Link from "next/link";

export default function ExperienceComponent() {
  const workExperience = workDescription();

  return (
    <div className="w-full h-full text-center justify-center flex flex-col md:flex-row">
      <div className="w-full md:w-1/2 p-4 flex justify-end">
        <div className="w-full md:w-3/5 mr-0 md:mr-16 flex flex-col ">
          <p className="text-sm md:text-md lg:text-lg 2xl:text-xl 3xl:text-3xl pb-4">
            Work experience
          </p>
          <ExperienceBox params={{ content: workExperience.work.vincit }} />
          <ExperienceBox params={{ content: workExperience.work.nomicam1 }} />
          <ExperienceBox params={{ content: workExperience.work.nomicam2 }} />
          <ExperienceBox params={{ content: workExperience.work.nomicam3 }} />
        </div>
      </div>
      <div className="w-full md:w-1/2 p-4 flex justify-start">
        <div className="w-full md:w-1/2 ml-0 md:ml-16 flex flex-col ">
          <p className="text-sm md:text-md lg:text-lg 2xl:text-xl 3xl:text-3xl text-bold pb-4">
            Education
          </p>
          <EducationBox
            params={{ content: workExperience.education.masters }}
          />
          <EducationBox
            params={{ content: workExperience.education.bachelors }}
          />

          <p className="text-sm md:text-md lg:text-lg 2xl:text-xl 3xl:text-3xl pt-8 pb-4">
            Hobbies / Other Interests
          </p>
          <HobbyBox params={{ content: workExperience.other.hobbies }} />

          <p className="text-sm md:text-md lg:text-lg 2xl:text-xl 3xl:text-3xl pt-8">
            <Link
              href="/Resume.pdf"
              aria-description=""
              target="_blank"
              className="text-teal-500 selection:text-slate-900"
            >
              You can view my full resume here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

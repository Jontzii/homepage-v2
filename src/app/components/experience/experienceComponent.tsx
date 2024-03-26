import Link from "next/link";
import ExperienceBox from "@/app/components/experience/experienceBox";
import EducationBox from "@/app/components/experience/educationBox";
import HobbyBox from "@/app/components/experience/hobbyBox";
import { workDescription } from "@/app/assets/content/workDescription";
import CertificationBox from "./certificationBox";
import ProjectBox from "./projectBox";

export default function ExperienceComponent() {
  const workExperience = workDescription();

  return (
    <div className="w-full h-full text-center justify-center flex flex-col lg:flex-row">
      <div className="w-full lg:w-1/2 p-4 flex justify-center lg:justify-end">
        <div className="w-full md:w-4/5 lg:w-full xl:w-4/5 2xl:w-3/5 mr-0 lg:ml-8 lg:mr-4 xl:ml-16 xl:mr-16 flex flex-col">
          <p className="text-md lg:text-lg 2xl:text-xl 3xl:text-3xl pb-4">
            Work experience
          </p>
          <ExperienceBox params={{ content: workExperience.work.vincit }} />
          <ExperienceBox params={{ content: workExperience.work.nomicam1 }} />
          <ExperienceBox params={{ content: workExperience.work.nomicam2 }} />
          <ExperienceBox params={{ content: workExperience.work.nomicam3 }} />
        </div>
      </div>
      <div className="w-full lg:w-1/2 p-4 flex justify-center lg:justify-start">
        <div className="w-full md:w-4/5 lg:w-full xl:w-4/5 2xl:w-3/5 ml-0 lg:ml-4 lg:mr-8 xl:ml-16 xl:mr-16 flex flex-col">
          <p className="text-md lg:text-lg 2xl:text-xl 3xl:text-3xl text-bold pb-4">
            Certifications
          </p>

          <CertificationBox
            params={{ content: workExperience.certification.azureFundamentals }}
          />

          <p className="text-md lg:text-lg 2xl:text-xl 3xl:text-3xl pt-8 pb-4">
            Education
          </p>
          <EducationBox
            params={{ content: workExperience.education.masters }}
          />
          <EducationBox
            params={{ content: workExperience.education.bachelors }}
          />

          <p className="text-md lg:text-lg 2xl:text-xl 3xl:text-3xl pt-8 pb-4">
            Other Projects
          </p>
          <ProjectBox
            params={{ content: workExperience.project.flightrandomizer }}
          />
          <ProjectBox
            params={{ content: workExperience.project.getaroom }}
          />

          <p className="text-md lg:text-lg 2xl:text-xl 3xl:text-3xl pt-8 pb-4">
            Hobbies / Other Interests
          </p>
          <HobbyBox params={{ content: workExperience.other.hobbies }} />

          <p className="text-sm md:text-md lg:text-lg 2xl:text-xl 3xl:text-3xl pt-8">
            <Link
              href="/resume.pdf"
              aria-description=""
              target="_blank"
              className="text-teal-500 hover:text-slate-300 selection:text-slate-900"
            >
              You can view my full resume here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

import { workDescription } from '@/app/assets/content/workDescription';
import Link from 'next/link';
import { CertificationBox } from './certificationBox';
import { EducationBox } from './educationBox';
import { ExperienceBox } from './experienceBox';
import { HobbyBox } from './hobbyBox';
import { ProjectBox } from './projectBox';

export async function ExperienceComponent() {
  const workExperience = workDescription();

  return (
    <div className="flex h-full w-full flex-col justify-center text-center lg:flex-row">
      <div className="flex w-full justify-center p-4 lg:w-1/2 lg:justify-end">
        <div className="mr-0 flex w-full flex-col md:w-4/5 lg:mr-4 lg:ml-8 lg:w-full xl:mr-16 xl:ml-16 xl:w-4/5 2xl:w-3/5">
          <p className="text-md 3xl:text-3xl pb-4 lg:text-lg 2xl:text-xl">
            Work experience
          </p>
          <ExperienceBox params={{ content: workExperience.work.vincit }} />
          <ExperienceBox params={{ content: workExperience.work.nomicam1 }} />
          <ExperienceBox params={{ content: workExperience.work.nomicam2 }} />
          <ExperienceBox params={{ content: workExperience.work.nomicam3 }} />
        </div>
      </div>
      <div className="flex w-full justify-center p-4 lg:w-1/2 lg:justify-start">
        <div className="ml-0 flex w-full flex-col md:w-4/5 lg:mr-8 lg:ml-4 lg:w-full xl:mr-16 xl:ml-16 xl:w-4/5 2xl:w-3/5">
          <p className="text-md 3xl:text-3xl text-bold pb-4 lg:text-lg 2xl:text-xl">
            Certifications
          </p>

          <CertificationBox
            params={{ content: workExperience.certification.azureFundamentals }}
          />

          <p className="text-md 3xl:text-3xl pt-8 pb-4 lg:text-lg 2xl:text-xl">
            Education
          </p>
          <EducationBox
            params={{ content: workExperience.education.masters }}
          />
          <EducationBox
            params={{ content: workExperience.education.bachelors }}
          />

          <p className="text-md 3xl:text-3xl pt-8 pb-4 lg:text-lg 2xl:text-xl">
            Other Projects
          </p>
          <ProjectBox
            params={{ content: workExperience.project.flightrandomizer }}
          />
          <ProjectBox params={{ content: workExperience.project.getaroom }} />

          <p className="text-md 3xl:text-3xl pt-8 pb-4 lg:text-lg 2xl:text-xl">
            Hobbies / Other Interests
          </p>
          <HobbyBox params={{ content: workExperience.other.hobbies }} />

          <p className="md:text-md 3xl:text-3xl pt-8 text-sm lg:text-lg 2xl:text-xl">
            <Link
              href="/resume.pdf"
              aria-description=""
              target="_blank"
              className="text-teal-500 selection:text-slate-900 hover:text-slate-300"
            >
              You can view my full resume here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

import { EducationExperience } from '@/app/types/experienceType';

export async function EducationBox({
  params,
}: {
  params: {
    content: EducationExperience;
  };
}) {
  return (
    <div className="mt-4 mb-4 flex w-full flex-col rounded-sm border-2 border-slate-400 p-4 hover:border-teal-500">
      <div className="flex flex-col text-left">
        <p className="pt-2 pl-0">{params.content.university}</p>
        <p className="pl-0">{params.content.level}</p>
        <p className="pb-2 pl-0 text-slate-400">{params.content.years}</p>
        <p className="pl-0">Major: {params.content.major}</p>
        <p className="pb-2 pl-0">Subject: {params.content.subject}</p>
      </div>
    </div>
  );
}

import { EducationExperience } from "@/app/types/experienceType";

export async function EducationBox({
  params,
}: {
  params: {
    content: EducationExperience;
  };
}) {
  return (
    <div className="rounded p-4 mt-4 mb-4 border-2 border-slate-400 w-full flex flex-col hover:border-teal-500">
      <div className="flex flex-col text-left">
        <p className="pl-0 pt-2">{params.content.university}</p>
        <p className="pl-0">{params.content.level}</p>
        <p className="pl-0 pb-2 text-slate-400">{params.content.years}</p>
        <p className="pl-0">Major: {params.content.major}</p>
        <p className="pl-0 pb-2">Subject: {params.content.subject}</p>
      </div>
    </div>
  );
}

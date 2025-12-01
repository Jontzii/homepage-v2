import { WorkExperience } from '@/app/types/experienceType';
import { generateHash } from './utils';

export async function ExperienceBox({
  params,
}: {
  params: {
    content: WorkExperience;
  };
}) {
  return (
    <div className="mt-4 mb-4 flex w-full flex-col rounded-sm border-2 border-slate-400 p-4 hover:border-teal-500">
      <div className="flex flex-col text-left">
        <p className="pt-2 pl-0">{params.content.company}</p>
        <p className="pl-0">{params.content.title}</p>
        <p className="pb-4 pl-0 text-slate-400">{params.content.years}</p>
      </div>
      <div className="flex flex-col pl-0 text-left">
        {params.content.description.map((x, i, arr) => {
          let className = '';

          // Add padding to the last item
          if (i === arr.length - 1) {
            className += 'pb-2';
          }

          const uniqueKey = generateHash(x.toString()) + i;

          // Convert \n to breakline
          return (
            <p key={uniqueKey} className={className}>
              {x === '\n' ? <br /> : x}
            </p>
          );
        })}
      </div>
      <div className="flex flex-row flex-wrap pt-2 pb-2">
        {params.content.technologies.map((x) => {
          const uniquekey = generateHash(`${params.content.company}-${x}`);

          return (
            <p
              key={uniquekey}
              className="m-1 rounded-full bg-teal-500 pt-1 pr-3 pb-1 pl-3 text-slate-900 transition-none duration-300 ease-in-out hover:transform-none motion-reduce:transition-none motion-reduce:hover:transform-none lg:transition lg:hover:-translate-y-1"
            >
              {x}
            </p>
          );
        })}
      </div>
    </div>
  );
}

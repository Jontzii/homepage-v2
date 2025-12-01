import ExternalLink from '@/app/assets/icon/externalLink';
import IconGitHub from '@/app/assets/icon/iconGithub';
import { Project } from '@/app/types/experienceType';
import Link from 'next/link';

export async function ProjectBox({
  params,
}: {
  params: {
    content: Project;
  };
}) {
  const makeId = (length: number) => {
    let result = '';
    const characters =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    return result;
  };

  return (
    <div className="mt-4 mb-4 flex w-full flex-col rounded-sm border-2 border-slate-400 p-4 hover:border-teal-500">
      <div className="flex flex-col text-left">
        <div className="flex flex-col text-left">
          <p className="pt-2 pb-4 pl-0">{params.content.name}</p>
        </div>
        <div className="flex flex-col pl-0 text-left">
          {params.content.description.map((x, i, arr) => {
            let className = '';

            if (i === arr.length - 1) {
              className += 'pb-2';
            }

            return (
              <p key={`${x}-${i}-${makeId(5)}`} className={className}>
                {x === '\n' ? <br /> : x}
              </p>
            );
          })}
        </div>
        <div className="flex flex-row pt-2 pb-2 pl-0">
          <Link
            href={{ pathname: params.content.url }}
            target="_blank"
            className="m-1 ml-0 flex w-36 flex-row rounded-full bg-teal-500 pt-1 pr-3 pb-1 pl-3 text-slate-900 hover:bg-teal-600 hover:text-slate-300"
          >
            <p className="flex h-8 flex-row items-center pl-2">Visit site</p>
            <div className="ml-auto flex h-8 w-8 flex-row items-center justify-center">
              <ExternalLink />
            </div>
          </Link>
          <Link
            href={{ pathname: params.content.git }}
            target="_blank"
            className="m-1 flex w-36 flex-row rounded-full bg-teal-500 pt-1 pr-3 pb-1 pl-3 text-slate-900 hover:bg-teal-600 hover:text-slate-300"
          >
            <p className="flex h-8 flex-row items-center pl-2">GitHub</p>
            <div className="ml-auto flex h-full w-6 flex-row items-center justify-center">
              <IconGitHub />
            </div>
          </Link>
        </div>
        <div className="flex flex-row flex-wrap pt-2 pb-2">
          {params.content.technologies.map((x) => (
            <p
              key={`${x}-${makeId(5)}`}
              className="m-1 rounded-full bg-teal-500 pt-1 pr-3 pb-1 pl-3 text-slate-900 transition-none duration-300 ease-in-out hover:transform-none motion-reduce:transition-none motion-reduce:hover:transform-none lg:transition lg:hover:-translate-y-1"
            >
              {x}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}

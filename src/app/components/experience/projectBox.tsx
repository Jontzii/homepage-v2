import ExternalLink from "@/app/assets/icon/externalLink";
import IconGitHub from "@/app/assets/icon/iconGithub";
import { Project } from "@/app/types/experienceType";
import Link from "next/link";

export async function ProjectBox({
  params,
}: {
  params: {
    content: Project;
  };
}) {
  const makeId = (length: number) => {
    let result = "";
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    return result;
  };

  return (
    <div className="rounded p-4 mt-4 mb-4 border-2 border-slate-400 w-full flex flex-col hover:border-teal-500">
      <div className="flex flex-col text-left">
        <div className="flex flex-col text-left">
          <p className="pl-0 pt-2 pb-4">{params.content.name}</p>
        </div>
        <div className="flex flex-col pl-0 text-left">
          {params.content.description.map((x, i, arr) => {
            let className = "";

            if (i === arr.length - 1) {
              className += "pb-2";
            }

            return (
              <p key={`${x}-${i}-${makeId(5)}`} className={className}>
                {x === "\n" ? <br /> : x}
              </p>
            );
          })}
        </div>
        <div className="pl-0 pt-2 pb-2 flex flex-row">
          <Link
            href={{ pathname: params.content.url }}
            target="_blank"
            className="pl-3 pr-3 pt-1 pb-1 flex flex-row w-36 bg-teal-500 hover:bg-teal-600 hover:text-slate-300 m-1 ml-0 rounded-full text-slate-900"
          >
            <p className="h-8 pl-2 flex flex-row items-center">Visit site</p>
            <div className="w-8 h-8 flex flex-row items-center justify-center ml-auto">
              <ExternalLink />
            </div>
          </Link>
          <Link
            href={{ pathname: params.content.git }}
            target="_blank"
            className="pl-3 pr-3 pt-1 pb-1 flex flex-row w-36 bg-teal-500 hover:bg-teal-600 hover:text-slate-300 m-1 rounded-full text-slate-900"
          >
            <p className="h-8 pl-2 flex flex-row items-center">GitHub</p>
            <div className="w-6 h-full flex flex-row items-center justify-center ml-auto">
              <IconGitHub />
            </div>
          </Link>
        </div>
        <div className="pt-2 pb-2 flex flex-row flex-wrap">
          {params.content.technologies.map((x) => (
            <p
              key={`${x}-${makeId(5)}`}
              className="pl-3 pr-3 pt-1 pb-1 bg-teal-500 m-1 rounded-full text-slate-900 transition-none lg:transition ease-in-out hover:transform-none lg:hover:-translate-y-1 duration-300 motion-reduce:transition-none motion-reduce:hover:transform-none"
            >
              {x}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}

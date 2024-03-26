import ExternalLink from "@/app/assets/icon/externalLink";
import { Certification } from "@/app/types/experienceType";
import Link from "next/link";

export default function CertificationBox({
  params,
}: {
  params: {
    content: Certification;
  };
}) {
  return (
    <div className="rounded p-4 mt-4 mb-4 border-2 border-slate-400 w-full flex flex-col hover:border-teal-500">
      <div className="flex flex-col text-left">
        <p className="pl-0 pt-2">{params.content.name}</p>
        <p className="pl-0">{params.content.issuer}</p>
        <p className="pl-0 text-slate-400">{params.content.issued}</p>
        <p className="pl-0 pb-2 text-slate-400">
          Credential ID {params.content.credentialId}
        </p>
        <div className="pl-0 pb-2">
          <Link
            href={{ pathname: params.content.url }}
            target="_blank"
            className="pl-3 pr-3 pt-1 pb-1 flex flex-row w-48 bg-teal-500 m-1 ml-0 rounded-full text-slate-900 transition-none lg:transition ease-in-out hover:transform-none lg:hover:-translate-y-1 duration-300 motion-reduce:transition-none motion-reduce:hover:transform-none"
          >
            <p className="h-8 flex flex-row items-center">Show credentials</p>

            <div className="w-8 h-8 flex flex-row items-center justify-center ml-auto">
              <ExternalLink />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

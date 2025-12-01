import ExternalLink from '@/app/assets/icon/externalLink';
import { Certification } from '@/app/types/experienceType';
import Link from 'next/link';

export async function CertificationBox({
  params,
}: {
  params: {
    content: Certification;
  };
}) {
  return (
    <div className="mt-4 mb-4 flex w-full flex-col rounded-sm border-2 border-slate-400 p-4 hover:border-teal-500">
      <div className="flex flex-col text-left">
        <p className="pt-2 pl-0">{params.content.name}</p>
        <p className="pl-0">{params.content.issuer}</p>
        <p className="pl-0 text-slate-400">{params.content.issued}</p>
        <p className="pb-2 pl-0 text-slate-400">
          Credential ID {params.content.credentialId}
        </p>
        <div className="pt-2 pb-2 pl-0">
          <Link
            href={{ pathname: params.content.url }}
            target="_blank"
            className="m-1 ml-0 flex w-52 flex-row rounded-full bg-teal-500 pt-1 pr-3 pb-1 pl-3 text-slate-900 hover:bg-teal-600 hover:text-slate-300"
          >
            <p className="flex h-8 flex-row items-center pl-2">
              Show credentials
            </p>

            <div className="ml-auto flex h-8 w-8 flex-row items-center justify-center">
              <ExternalLink />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

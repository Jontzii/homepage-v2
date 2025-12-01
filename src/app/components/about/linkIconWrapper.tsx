import Link from 'next/link';

export async function LinkIconWrapper({
  params,
}: {
  params: {
    href: string;
    icon: React.JSX.Element;
  };
}) {
  return (
    <Link
      href={params.href}
      target="_blank"
      className="3xl:h-16 3xl:w-16 3xl:mt-8 3xl:mb-8 3xl:ml-0 3xl:mr-8 mt-4 mr-2 mb-4 ml-2 h-8 w-8 hover:text-teal-500 md:mr-4 md:ml-0 md:h-10 md:w-10"
    >
      {params.icon}
    </Link>
  );
}

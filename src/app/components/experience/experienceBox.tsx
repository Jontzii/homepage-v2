import { WorkExperience } from "@/app/types/experienceType";

export async function ExperienceBox({
  params,
}: {
  params: {
    content: WorkExperience;
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
        <p className="pl-0 pt-2">{params.content.company}</p>
        <p className="pl-0">{params.content.title}</p>
        <p className="pl-0 pb-4 text-slate-400">{params.content.years}</p>
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
  );
}

export default function HobbyBox({
  params,
}: {
  params: {
    content: string[];
  };
}) {
  return (
    <div className="rounded p-4 mt-4 mb-4 border-2 border-slate-400 w-full flex flex-col hover:border-teal-500">
      <div className="flex flex-col text-left">
        {params.content.map((x, i, arr) => {
          let className = "";

          if (i === 0) {
            className += "pt-2";
          }

          if (i === arr.length - 1) {
            className += "pb-2";
          }

          return (
            <p key={`${x}-${i}`} className={className}>
              - {x}
            </p>
          );
        })}
      </div>
    </div>
  );
}

import ArrowDownCircle from "../assets/arrowDownCircle";

export default function LandingComponent() {
  const old = (<div className="w-full h-screen text-center justify-center items-center">
      <div>
        <div>
          <p className="text-3xl">
            HEY THERE,
            <br />
            MY NAME IS JOONAS HILTUNEN.
          </p>
          <p className="text-xl">I LIKE TO WORK WITH ALL KINDS OF SOFTWARE.</p>
        </div>
        <p className="pt-2">
          I specialize in full stack and backend development, <br /> utilising
          TypeScript and C#
        </p>
      </div>

      <div className="absolute bottom-4 w-full">
        <p>READ MORE BELOW (in grey)</p>
        <p>icon here (animation when hovering)</p>
      </div>
    </div>)
  
  return (
    <div className="w-1/2 relative h-screen flex flex-col">
      <div>
        <p className="text-3xl">
          HEY THERE,
          <br />
          MY NAME IS JOONAS HILTUNEN.
        </p>
        <p className="text-xl">I LIKE TO WORK WITH ALL KINDS OF SOFTWARE.</p>
      </div>
      <p className="pt-2">
        I specialize in full stack and backend development, <br /> utilising
        TypeScript and C#
      </p>

      <div className="w-full absolute bottom-8 flex flex-col text-center justify-center items-center text-slate-400">
        <p className="pb-1">READ MORE</p>
        <ArrowDownCircle />
      </div>
    </div>
  );
}

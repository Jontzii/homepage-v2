import AnimatedCursor from "react-animated-cursor";

export default function CursorComponent() {
  return (
    <AnimatedCursor
      innerSize={0}
      outerSize={600}
      innerScale={0}
      outerScale={1}
      outerAlpha={1}
      outerStyle={{
        mixBlendMode: "exclusion",
        background:
          "radial-gradient(rgba(29, 78, 216, 0.15), transparent 70%)",
      }}
      trailingSpeed={1}
      showSystemCursor
    />
  );
}
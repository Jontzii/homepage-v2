"use client"

import Link from "next/link";
import ArrowDownCircle from "@/app/assets/arrowDownCircle";

export default function ScrollToAbout() {
  return (
    <Link
      href="#about"
      scroll={false}
      className="flex flex-col text-center justify-center items-center hover:text-teal-500"
      onClick={(e) => {
        e.preventDefault();

        if (document) {
          document
            .getElementById("about")
            ?.scrollIntoView({ behavior: "smooth" });
        }
      }}
    >
      <p className="pb-1">ABOUT ME</p>
      <ArrowDownCircle />
    </Link>
  );
}

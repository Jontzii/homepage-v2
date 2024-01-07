"use client"

import { useEffect, useState } from "react";
import ChevronUp from "@/app/assets/icon/chevronUp";

export default function BottomButton() {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 450) {
      setVisible(true);
    } else if (scrolled <= 450) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    if (typeof window !== "undefined") {
       window.scrollTo({
         top: 0,
         behavior: "smooth",
       });
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisible);
  }, [])

  return (
    <div
      className={`bottom-0 right-0 float-right ${
        visible ? "sticky" : "hidden"
      } flex justify-end`}
    >
      <button
        className="bg-teal-600 m-8 p-4 rounded-full transition-none md:transition ease-in-out md:hover:-translate-y-1 duration-150 motion-reduce:transition-none motion-reduce:hover:transform-none -z-10"
        onClick={scrollToTop}
      >
        <ChevronUp />
      </button>
    </div>
  );
}

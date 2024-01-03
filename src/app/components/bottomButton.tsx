"use client"

import { useEffect, useState } from "react";
import ChevronUp from "@/app/assets/chevronUp";

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
      className={`w-full bottom-0 ${
        visible ? "sticky" : "hidden"
      } flex justify-end`}
    >
      <button
        className="bg-teal-600 m-8 p-4 rounded-full transition ease-in-out delay-150 hover:-translate-y-1 duration-300 motion-reduce:transition-none motion-reduce:hover:transform-none"
        onClick={scrollToTop}
      >
        <ChevronUp />
      </button>
    </div>
  );
}

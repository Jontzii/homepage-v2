'use client';

import ChevronUp from '@/app/assets/icon/chevronUp';
import { useEffect, useState } from 'react';

export function BottomButton() {
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
    if (typeof window !== 'undefined') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisible);
  }, []);

  return (
    <div
      className={`right-0 bottom-0 float-right ${
        visible ? 'sticky' : 'hidden'
      } flex justify-end`}
    >
      <button
        className="-z-10 m-8 rounded-full bg-teal-600 p-4 transition-none duration-150 ease-in-out motion-reduce:transition-none motion-reduce:hover:transform-none md:transition md:hover:-translate-y-1"
        onClick={scrollToTop}
      >
        <ChevronUp />
      </button>
    </div>
  );
}

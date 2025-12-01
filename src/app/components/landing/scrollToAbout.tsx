'use client';

import ArrowDownCircle from '@/app/assets/icon/arrowDownCircle';
import Link from 'next/link';

export function ScrollToAbout() {
  return (
    <Link
      href="#about"
      scroll={false}
      className="flex flex-col items-center justify-center text-center hover:text-teal-500"
      onClick={(e) => {
        e.preventDefault();

        if (document) {
          document
            .getElementById('about')
            ?.scrollIntoView({ behavior: 'smooth' });
        }
      }}
    >
      <p className="pb-1">ABOUT ME</p>
      <ArrowDownCircle />
    </Link>
  );
}

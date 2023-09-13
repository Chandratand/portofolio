'use client';

import React, { useEffect, useRef } from 'react';
import { Button } from './ui/Button';
import { Icons } from './Icons';
import Link from 'next/link';

const Navbar = () => {
  // const headerRef = useRef<HTMLInputElement>(null);

  // const onScroll = () => {
  //   if (window.pageYOffset > 0) {
  //     headerRef.current?.classList.add('dark:bg-black', 'shadow-lg');
  //   } else {
  //     headerRef.current?.classList.remove('dark:bg-black', 'shadow-lg');
  //   }
  // };

  // useEffect(() => {
  //   window.addEventListener('scroll', onScroll);
  //   return () => window.removeEventListener('scroll', onScroll);
  // }, []);

  return (
    <header className="bg-white z-10 w-full border-b">
      <nav className="flex items-center justify-between p-4 container">
        <Link href={'/'}>
          <Icons.logo />
        </Link>
        <div className="flex items-center gap-1 sm:gap-2">
          <Button variant={'secondary'} className="font-bold">
            Download my CV
          </Button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

import { useState, useRef, useCallback, useEffect } from 'react';
import Link from 'next/link';
import Slimbar from './Slimbar';
import Links from './Links';

const backgroundStyle = {
  background: 'linear-gradient(to top, #000000, #12002e)'
};

export default function Navbar() {
  const [showSlimBar, setShowSlimBar] = useState<boolean>(false);
  const [scrollingUp, setScrollingUp] = useState<boolean>(false);

  const observer = useRef<null|IntersectionObserver>(null);
  const navbarRef = useCallback(node => {
    if (observer.current) observer.current.disconnect();
    observer.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        setShowSlimBar(false);
      } else {
        setShowSlimBar(true);
      }
    });
    if (node) observer.current.observe(node);
  }, []);

  useEffect(() => {
    let lastScrollTop = 0;
    addEventListener('scroll', () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      if (scrollTop >= lastScrollTop) {
        setScrollingUp(false);
      } else {
        setScrollingUp(true);
      }
      lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    });
  }, []);
  return (
    <>
      <nav ref={navbarRef} style={backgroundStyle} className='relative border-b border-opacity-50 border-indigo-400'>
        <div className='mt-2 text-blue-500 text-xs absolute w-full h-full opacity-50 select-none'>
          <div className='animate-pulse'>
            <span className='absolute right-20 bottom-5'>✦</span>
            <span className='absolute right-10 top-4'>✦</span>
            <span className='absolute right-56 top-14'>✦</span>
            <span className='absolute right-44 top-0'>✦</span>
            <span className='absolute right-32 top-16'>✦</span>
            <span className='absolute left-24'>✦</span>
            <span className='absolute left-56 top-20'>✦</span>
            <span className='absolute left-64 top-6'>✦</span>
            <span className='absolute left-32 top-14'>✦</span>
            <span className='absolute left-8 bottom-4'>✦</span>
          </div>
        </div>
        <div className='container flex justify-center text-white mx-auto'>
          <div style={backgroundStyle} className='mt-2 z-10 flex flex-col gap-4 py-4'>
            <header className='text-7xl text-center'>
              <span>
                <Link href='/'>DEVCORVUS</Link>
              </span>
            </header>
            <ul className='flex justify-center gap-4'>
              <Links />
            </ul>
          </div>
        </div>
      </nav>
      {(showSlimBar && scrollingUp) && <Slimbar />}
    </>
  );
}

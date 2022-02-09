import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

type Direction = {
  name: string;
  route: string;
};

const backgroundStyle = { background: '#12002e' };
const { names, routes } = {
  names: ['Home', 'Projects', 'Skills', 'Contact', 'About'],
  routes: ['/', '/projects', '/skills', '/contact', '/about']
};

export default function Innernav() {
  const { route: currentRoute } = useRouter();
  const [left, setLeft] = useState<Direction|null>();
  const [right, setRight] = useState<Direction|null>();

  useEffect(() => {
    const currentRouteIndex = routes.findIndex(route => route === currentRoute);
    const lastRouteIndex = routes.length -1;

    if (currentRouteIndex === 0) {
      setLeft(null);
    } else {
      const leftIndex = currentRouteIndex -1;
      setLeft({
        name: names[leftIndex],
        route: routes[leftIndex]
      });
    }

    if (currentRouteIndex === lastRouteIndex) {
      setRight(null);
    } else {
      const rightIndex = currentRouteIndex +1;
      setRight({
        name: names[rightIndex],
        route: routes[rightIndex]
      });
    }
  }, [currentRoute]);

  return (
    <div className='flex items-center justify-between mt-2'>
      {left ? (
        <Link href={left.route} passHref>
          <div style={backgroundStyle} className='flex items-center gap-2 box transition-all duration-300 cursor-pointer text-green-300 border-green-400 hover:text-violet-300 hover:border-violet-300'>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            <span className='text-xl'>{left.name}</span>
          </div>
        </Link>
      ) : (
        <div style={backgroundStyle} className='p-4 text-gray-500 border-b-2 border border-gray-500 rounded-md'>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
          </svg>
        </div>
      )}
      {right ? (
        <Link href={right.route} passHref>
          <div style={backgroundStyle} className='flex items-center gap-2 p-4 text-green-300 transition-all duration-300 cursor-pointer hover:border-violet-300 hover:text-violet-300 rounded-md border-b-2 border border-green-400'>
            <span className='text-xl'>{right.name}</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </div>
        </Link>
      ) : (
        <div style={backgroundStyle} className='p-4 text-gray-500 border-b-2 border border-gray-500 rounded-md'>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
          </svg>
        </div>
      )}
    </div>
  );
}

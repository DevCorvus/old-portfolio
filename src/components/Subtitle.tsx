import type { ReactNode } from 'react';

export default function Subtitle({ children }: { children: ReactNode }) {
  return (
    <h3 className='text-xl text-green-300 font-bold mb-2'>
      {children}
    </h3>
  );
}

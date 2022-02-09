import React from 'react';

export default function Header({ children, type = 'h1' }: { children: React.ReactNode, type?: 'h1' | 'h2' | 'h3' }) {
  const H = type;
  return (
    <header className='text-green-300 font-bold text-2xl mb-2'>
      <H>✧ {children}</H>
    </header>
  );
}

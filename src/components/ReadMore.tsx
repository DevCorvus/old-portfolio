import { ReactNode, useState } from 'react';
import useBounce from '../hooks/useBounce';
import useTranslation from '../hooks/useTranslation';

export default function ShowMore({ children }: { children: ReactNode }) {
  const [show, setShow] = useState<boolean>(false);
  const bounce = useBounce(show);
  const { misc } = useTranslation();

  return (
    <>
      {!show ? (
        <button onClick={() => setShow(true)} className='text-left text-sm transition text-blue-400 hover:text-blue-500' type='button'>
          <span>{misc.readMore}</span>
          {/* <svg xmlns="http://www.w3.org/2000/svg" className='w-4 h-4' fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg> */}
        </button>
      ) : (
        <div className={`flex flex-col gap-2 transition-all ${bounce ? 'opacity-100' : 'opacity-0'}`}>
          {children}
        </div>
      )}
    </>
  );
}

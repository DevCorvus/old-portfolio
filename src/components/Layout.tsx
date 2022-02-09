import { useEffect, useState, ReactNode } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Navbar from './Navbar';
import Innernav from './Innernav';
import Footer from './Footer';
import ContactPanel from './ContactInfo';
import Working from './Working';
import useBounce from '../hooks/useBounce';

export default function Layout({ children }: { children: ReactNode }) {
  const router = useRouter();
  const [showContactPanel, setShowContactPanel] = useState(true);
  const bounce = useBounce();

  useEffect(() => {
    if (router.route !== '/contact') {
      setShowContactPanel(true);
    } else {
      setShowContactPanel(false);
    }
  }, [router]);

  return (
    <div className='font-dosis'>
      <Head>
        <title>My Portfolio</title>
        <meta name='description' content='DevCorvus Portfolio' />
      </Head>
      <div className='min-h-screen'>
        <Navbar />
        <div className={`container mx-auto transtiion-all duration-500 ease-in ${bounce ? 'opacity-100 mt-0' : 'opacity-0 mt-32'}`}>
          <div className='grid grid-cols-12 gap-8 text-white text-lg m-6'>
            <main className='col-span-12 lg:col-span-9 flex flex-col gap-4'>
              {children}
              <Innernav />
            </main>
            <aside className='col-span-12 lg:col-span-3 flex flex-col gap-4'>
              {showContactPanel ? (
                <ContactPanel />
              ) : (
                <div className='bg-blue-400 flex flex-col justify-center items-center h-full bg-opacity-50 rounded-md'>
                  Fill this with something
                </div>
              )}
              <Working />
            </aside>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

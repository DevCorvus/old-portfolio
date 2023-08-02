import Head from 'next/head';
import { useRouter } from 'next/router';
import { ReactNode, useEffect, useState } from 'react';
import LayoutContext from 'src/contexts/LayoutContext';
import useBounce from 'src/hooks/useBounce';
import useTranslation from 'src/hooks/useTranslation';

import ContactPanel from './ContactInfo';
import CurrentStatus from './CurrentStatus';
import Footer from './Footer';
import Innernav from './Innernav';
import Navbar from './Navbar';

const IMAGE_PREVIEW_LINK =
    'https://i.ibb.co/0m9zYMG/devcorvus-image-preview.png';

export default function Layout({ children }: { children: ReactNode }) {
    const router = useRouter();
    const { title: TITLE, description: DESCRIPTION } = useTranslation();
    const [showContactPanel, setShowContactPanel] = useState<boolean>(true);
    const [showContentButton, setShowContentButton] = useState<boolean>(false);
    const [showEasterEgg, setEasterEgg] = useState<boolean>(false);
    const bounce = useBounce();

    useEffect(() => {
        if (router.route !== '/contact') {
            setShowContactPanel(true);
        } else {
            setShowContactPanel(false);
        }
    }, [router]);

    return (
        <LayoutContext.Provider value={{ setEasterEgg }}>
            <div className="font-dosis">
                <Head>
                    <meta
                        name="viewport"
                        content="width=device-width, initial-scale=1.0"
                    />
                    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                    <meta
                        name="keywords"
                        content="portfolio, web developer, software developer, web developer portfolio"
                    />
                    <meta name="description" content={DESCRIPTION} />
                    <meta property="og:site_name" content="DevCorvus" />
                    <meta property="og:type" content="website" />
                    <meta property="og:title" content={TITLE} />
                    <meta property="og:image" content={IMAGE_PREVIEW_LINK} />
                    <meta property="og:description" content={DESCRIPTION} />
                    <meta property="twitter:title" content={TITLE} />
                    <meta property="twitter:image" content={IMAGE_PREVIEW_LINK} />
                    <meta property="twitter:description" content={DESCRIPTION} />
                    <meta property="twitter:card" content="summary_large_image" />
                    <title>{TITLE}</title>
                    <link rel="shortcut icon" href="/favicon.png" />
                    <link rel="apple-touch-icon" href="/apple-touch-favicon.png" />
                </Head>
                <div
                    className={`transition duration-1000 ${showEasterEgg ? 'rotate-180' : ''
                        }`}
                >
                    <a
                        href="#main"
                        onFocus={() => setShowContentButton(true)}
                        onBlur={() => setShowContentButton(false)}
                        className={`text-white border-2 border-blue-400 p-1 absolute top-8 md:top-10 left-0 ${showContentButton ? 'z-50' : ''
                            }`}
                    >
                        Go to main content
                    </a>
                    <div className="min-h-screen overflow-x-hidden">
                        <a
                            href="https://devcorvus.github.io/"
                            target="_blank"
                            rel="noreferrer"
                            className="block bg-amber-500 hover:bg-amber-400 focus:bg-amber-400 transition p-1 text-sm md:text-xl text-center"
                        >
                            This is my old portfolio, click here to check the new one! 🚀
                        </a>
                        <Navbar />
                        <div
                            className={`container mx-auto transition-all duration-500 ease-in ${bounce ? 'opacity-100 mt-0' : 'opacity-0 mt-32'
                                }`}
                        >
                            <div className="grid grid-cols-12 gap-8 text-white text-lg m-6">
                                <main
                                    id="main"
                                    className="col-span-12 lg:col-span-9 flex flex-col gap-4"
                                >
                                    {children}
                                    <Innernav />
                                </main>
                                <aside className="col-span-12 lg:col-span-3 flex flex-col gap-4">
                                    {showContactPanel && <ContactPanel />}
                                    <CurrentStatus />
                                </aside>
                            </div>
                        </div>
                    </div>
                    <Footer />
                </div>
            </div>
        </LayoutContext.Provider>
    );
}

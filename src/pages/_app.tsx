import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Script from 'next/script';
import Layout from '../components/Layout';
import NextNProgress from 'nextjs-progressbar';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<Script
				src="https://kit.fontawesome.com/da377e052d.js"
				crossOrigin="anonymous"
			/>
			<NextNProgress height={3} color="rgb(196 181 253)" />
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</>
	);
}

export default MyApp;

import Image from 'next/image';
import layeredPeaks from 'public/images/layered-peaks.svg';

import Satellite from './Satellite';

export default function Footer() {
	return (
		<footer className="relative pt-4 text-center text-white">
			<Satellite />
			<Image src={layeredPeaks} layout="responsive" alt="Layered Green Peaks" />
		</footer>
	);
}

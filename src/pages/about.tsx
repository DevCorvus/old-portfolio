import { useEffect, useState, useContext } from 'react';
import LayoutContext from '../contexts/LayoutContext';
import Header from '../components/Header';
import Box from '../components/Box';
import useTranslation from '../hooks/useTranslation';

const TEN_SECONDS = 10 * 1000;

export default function About() {
	const {
		about: { title, content },
	} = useTranslation();
	const layout = useContext(LayoutContext);
	const [showEasterEggMessage, setEasterEggMessage] = useState<boolean>(false);

	useEffect(() => {
		setTimeout(() => {
			setEasterEggMessage(true);
		}, TEN_SECONDS);
	}, []);

	return (
		<>
			<section>
				<Header>{title}</Header>
				<Box>
					<p>
						<strong>{content.p1}</strong>
					</p>
					<p>{content.p2}</p>
					<p>{content.p3}</p>
					<p>{content.p4}</p>
					<p>{content.p5}</p>
					<p>{content.p6}</p>
					<p>{content.p7}</p>
					<p>{content.p8}</p>
					<p className="text-sm text-rose-400">
						{content.p9}{' '}
						{showEasterEggMessage && (
							<span className="text-white">
								{content.easterEgg}
								<button
									onClick={() =>
										layout?.setEasterEgg((prevState) => !prevState)
									}
									className="transition text-blue-300 hover:text-blue-400"
								>
									Easter Egg 🌌
								</button>
							</span>
						)}
					</p>
				</Box>
			</section>
		</>
	);
}

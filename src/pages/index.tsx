import Image from 'next/image';
import Avatar from 'public/images/Avatar.svg';
import { CSSProperties } from 'react';
import Box from 'src/components/Box';
import Header from 'src/components/Header';
import Subtitle from 'src/components/Subtitle';
import useTranslation from 'src/hooks/useTranslation';

const avatarBackgroundStyles: CSSProperties = {
	backgroundImage: 'url("/images/avatar-background.jpg")',
	backgroundSize: 'scale',
	backgroundPosition: 'center',
	backgroundRepeat: 'no-repeat',
};

export default function Home() {
	const {
		home: { title, content },
	} = useTranslation();

	return (
		<>
			<section>
				<Header>{title}</Header>
				<Box>
					<p>{content.p1}</p>
					<p>{content.p2}</p>
				</Box>
			</section>
			<section>
				<Subtitle>{content.subtitle1}</Subtitle>
				<Box>
					<div>
						<div
							className="float-right ml-2 w-52 h-52 border border-blue-400 rounded-full"
							style={avatarBackgroundStyles}
						>
							<Image
								className="rounded-full"
								src={Avatar}
								alt="DevCorvus Avatar"
							/>
						</div>
						<p className="mb-3">{content.me.p1}</p>
						<p className="mb-3">{content.me.p2}</p>
						<p className="mb-3">{content.me.p3}</p>
						<p>{content.me.p4}</p>
					</div>
				</Box>
			</section>
			<section>
				<Subtitle>{content.subtitle2}</Subtitle>
				<Box>
					<p>{content.do}</p>
				</Box>
			</section>
			<section>
				<Subtitle>{content.subtitle3}</Subtitle>
				<Box>
					<p>{content.next.p1}</p>
					<p>{content.next.p2}</p>
					<p>{content.next.p3}</p>
					<p className="text-sm text-rose-400">{content.next.p4}</p>
				</Box>
			</section>
		</>
	);
}

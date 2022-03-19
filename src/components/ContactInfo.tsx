import { useState, useEffect, useRef, CSSProperties } from 'react';
import Image from 'next/image';
import Logo from 'public/images/devcorvus-logo.svg';
import Header from './Header';
import Box from './Box';
import Separator from './Separator';
import useTranslation from '../hooks/useTranslation';

const TWO_SECONDS = 2000;
const CONTACT_EMAIL = 'devcorvus.contact@gmail.com';

const hiddenEmailInputStyles: CSSProperties = {
	position: 'absolute',
	left: '100vw',
};

const imageContainerStyles: CSSProperties = {
	display: 'flex',
	justifyContent: 'center',
	pointerEvents: 'none',
};

export default function ContactInfo({ asPage = false }: { asPage?: boolean }) {
	const {
		contact: { title, means },
	} = useTranslation();
	const [email, setEmail] = useState<string>(means.email.title);
	const hiddenEmailInput = useRef<HTMLInputElement | null>(null);

	const handleEmail = () => {
		hiddenEmailInput.current?.select();
		hiddenEmailInput.current?.setSelectionRange(0, 99999);
		document.execCommand('copy'); // There's no safe alternative to this method yet.

		setEmail(means.email.copied);

		setTimeout(() => {
			setEmail(CONTACT_EMAIL);
		}, TWO_SECONDS);
	};

	useEffect(() => {
		setEmail(means.email.title);
	}, [means.email.title]);

	const H = asPage ? 'h2' : 'h3';

	return (
		<section>
			<Header type={asPage ? 'h1' : 'h2'}>{title}</Header>
			<Box>
				<div style={imageContainerStyles}>
					<Image
						className="mx-auto"
						src={Logo}
						height={200}
						alt="DevCorvus Logo"
					/>
				</div>
				<Separator />
				<nav aria-label="Contact Navigation">
					<div>
						<H
							className={`${asPage ? '' : 'text-sm'} font-bold text-green-300`}
						>
							{means.email.slug}
						</H>
						<input
							tabIndex={-1}
							style={hiddenEmailInputStyles}
							ref={hiddenEmailInput}
							type="text"
							defaultValue={CONTACT_EMAIL}
						/>
						<button onClick={handleEmail} type="button">
							<div className="inline-flex items-center gap-2 transition-all duration-300 hover:text-violet-200 hover:scale-110 hover:ml-2">
								<span className={asPage ? 'text-3xl' : 'text-xl'}>{email}</span>
								<i
									className={`fa fa-envelope ${asPage ? 'fa-2x' : 'fa-lg'}`}
								></i>
							</div>
						</button>
						{asPage && (
							<p className="text-sm mt-2">{means.email.description}</p>
						)}
					</div>
					<div>
						<H
							className={`${asPage ? '' : 'text-sm'} font-bold text-green-300`}
						>
							{means.github.slug}
						</H>
						<a
							href="https://github.com/DevCorvus"
							target="_blank"
							rel="noreferrer"
						>
							<div className="inline-flex items-center gap-2 transition-all duration-300 hover:text-violet-200 hover:scale-110 hover:ml-2">
								<span className={asPage ? 'text-3xl' : 'text-xl'}>GitHub</span>
								<i
									className={`fab fa-github ${asPage ? 'fa-2x' : 'fa-lg'}`}
								></i>
							</div>
						</a>
						{asPage && (
							<p className="text-sm mt-2">{means.github.description}</p>
						)}
					</div>
					<div>
						<H
							className={`${asPage ? '' : 'text-sm'} font-bold text-green-300`}
						>
							{means.linkedIn.slug}
						</H>
						<a
							href="https://www.linkedin.com/in/luis-portillo-0b0a371bb/"
							target="_blank"
							rel="noreferrer"
						>
							<div className="inline-flex items-center gap-2 transition-all duration-300 hover:text-violet-200 hover:scale-110 hover:ml-2">
								<span className={asPage ? 'text-3xl' : 'text-xl'}>
									LinkedIn
								</span>
								<i
									className={`fab fa-linkedin ${asPage ? 'fa-2x' : 'fa-lg'}`}
								></i>
							</div>
						</a>
						{asPage && (
							<p className="text-sm mt-2">{means.linkedIn.description}</p>
						)}
					</div>
				</nav>
			</Box>
		</section>
	);
}

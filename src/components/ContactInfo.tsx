import { useState, useEffect, useRef, CSSProperties } from 'react';
import Image from 'next/image';
import Logo from 'public/images/devcorvus-logo.svg';
import Header from './Header';
import Box from './Box';
import Separator from './Separator';
import useTranslation from '../hooks/useTranslation';

const TWO_SECONDS = 2000;
const CONTACT_EMAIL = 'devcorvus.contact@gmail.com';
const CONTACT_DISCORD = 'DevCorvus#4833';

const hiddenInputStyles: CSSProperties = {
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
		contact: { title, means, copied },
	} = useTranslation();

	const [email, setEmail] = useState<string>(means.email.title);
	const [discord, setDiscord] = useState<string>('Discord');

	const hiddenEmailInput = useRef<HTMLInputElement | null>(null);
	const hiddenDiscordInput = useRef<HTMLInputElement | null>(null);

	const handleEmail = () => {
		hiddenEmailInput.current?.select();
		hiddenEmailInput.current?.setSelectionRange(0, 99999);
		document.execCommand('copy'); // There's no safe alternative to this method yet.

		setEmail(copied);

		setTimeout(() => {
			setEmail(CONTACT_EMAIL);
		}, TWO_SECONDS);
	};

	// TODO: useContactCopy (?)
	const handleDiscord = () => {
		hiddenDiscordInput.current?.select();
		hiddenDiscordInput.current?.setSelectionRange(0, 99999);
		document.execCommand('copy');

		setDiscord(copied);

		setTimeout(() => {
			setDiscord(CONTACT_DISCORD);
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
				<nav
					aria-label="Contact Navigation"
					className={`flex flex-col ${asPage ? 'gap-4' : 'gap-2'}`}
				>
					<div>
						<H
							className={`${asPage ? '' : 'text-sm'} font-bold text-green-300`}
						>
							{means.email.slug}
						</H>
						<input
							tabIndex={-1}
							style={hiddenInputStyles}
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
						<a
							className={`${
								asPage ? 'text-sm' : 'text-xs'
							} mt-1 flex items-center gap-1 text-rose-300 hover:text-rose-400 transition`}
							href={`mailto:${CONTACT_EMAIL}`}
						>
							<span>{means.email.open}</span>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-3 w-3"
								viewBox="0 0 20 20"
								fill="currentColor"
							>
								<path
									fillRule="evenodd"
									d="M14.243 5.757a6 6 0 10-.986 9.284 1 1 0 111.087 1.678A8 8 0 1118 10a3 3 0 01-4.8 2.401A4 4 0 1114 10a1 1 0 102 0c0-1.537-.586-3.07-1.757-4.243zM12 10a2 2 0 10-4 0 2 2 0 004 0z"
									clipRule="evenodd"
								/>
							</svg>
						</a>
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
					<div>
						<H
							className={`${asPage ? '' : 'text-sm'} font-bold text-green-300`}
						>
							{means.discord.slug}
						</H>
						<input
							tabIndex={-1}
							style={hiddenInputStyles}
							ref={hiddenDiscordInput}
							type="text"
							defaultValue={CONTACT_DISCORD}
						/>
						<button onClick={handleDiscord} type="button">
							<div className="inline-flex items-center gap-2 transition-all duration-300 hover:text-violet-200 hover:scale-110 hover:ml-2">
								<span className={asPage ? 'text-3xl' : 'text-xl'}>
									{discord}
								</span>
								<i
									className={`fab fa-discord ${asPage ? 'fa-2x' : 'fa-lg'}`}
								></i>
							</div>
						</button>
						{asPage && (
							<p className="text-sm mt-2">{means.discord.description}</p>
						)}
					</div>
				</nav>
			</Box>
		</section>
	);
}

import Link from 'next/link';
import { useState } from 'react';
import useBounce from 'src/hooks/useBounce';

import { animated, useTransition } from '@react-spring/web';

import Links from './Links';

const backgroundStyle = {
	background: 'linear-gradient(to right, #000000, #12002e)',
};

export default function Slimbar() {
	const [show, setShow] = useState<boolean>(false);
	const bounce = useBounce();

	const transitions = useTransition(show, {
		from: {
			opacity: 0,
			marginTop: -500,
		},
		enter: {
			opacity: 1,
			marginTop: 0,
		},
		leave: {
			opacity: 0,
			marginTop: -500,
		},
		reverse: show,
	});

	return (
		<div
			style={backgroundStyle}
			className={`z-30 transition-all duration-500 ${
				bounce ? 'opacity-100' : 'opacity-0'
			} fixed top-0 w-full text-white`}
		>
			<div
				style={backgroundStyle}
				className="p-2 border-b border-opacity-50 border-indigo-400"
			>
				<nav
					aria-label="Alternative Navigation"
					className="z-50 mx-4 flex justify-between items-center"
				>
					<header className="text-2xl">
						<Link href="/">DEVCORVUS</Link>
					</header>
					<div className="text-blue-500 text-xs absolute top-2 left-0 w-full h-full opacity-50 select-none pointer-events-none touch-none">
						<div className="animate-pulse">
							<span className="absolute left-44 top-2">✦</span>
							<span className="absolute left-56 top-5">✦</span>
							<span className="absolute left-64 -top-1">✦</span>
							<span className="absolute left-80 top-2">✦</span>
						</div>
					</div>
					<ul className="hidden lg:flex gap-4">
						<Links />
					</ul>
					<button
						className="lg:hidden"
						onClick={() => setShow((prevState) => !prevState)}
						type="button"
					>
						{show ? (
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-6 w-6"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M6 18L18 6M6 6l12 12"
								/>
							</svg>
						) : (
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-6 w-6"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M4 6h16M4 12h16M4 18h16"
								/>
							</svg>
						)}
					</button>
				</nav>
			</div>
			{transitions(
				(styles, item) =>
					item && (
						<animated.div
							style={styles}
							className="lg:hidden border-b border-opacity-50 border-indigo-400 rounded-b-lg"
						>
							<div className="p-2">
								<ul className="mx-4 flex flex-col gap-2 text-xl">
									<Links />
								</ul>
							</div>
						</animated.div>
					)
			)}
		</div>
	);
}

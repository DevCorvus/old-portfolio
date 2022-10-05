import { useRouter } from 'next/router';
import { useState } from 'react';

import { animated, useTransition } from '@react-spring/web';

export default function Language() {
	const router = useRouter();
	const isLocaleEN = router.locale === 'en';
	const locales = {
		current: router.locale,
		alternative: isLocaleEN ? 'es' : 'en',
	};

	const [hovering, setHovering] = useState<boolean>(false);

	const handleClick = () => {
		router.push(router.route, router.route, { locale: locales.alternative });
	};

	const transitions = useTransition(hovering, {
		from: {
			opacity: 0,
			marginTop: -32,
		},
		enter: {
			opacity: 1,
			marginTop: 0,
		},
		leave: {
			opacity: 0,
			marginTop: -32,
		},
	});

	return (
		<button
			title={isLocaleEN ? 'Switch to Spanish' : 'Cambiar a Inglés'}
			className="p-1 mt-0.5 flex items-center gap-1 text-xs"
			type="button"
			onClick={handleClick}
			onMouseEnter={() => setHovering(true)}
			onMouseLeave={() => setHovering(false)}
		>
			<div className="uppercase">
				{transitions(
					(styles, item) =>
						item && (
							<animated.span style={styles} className="absolute">
								{locales.alternative}
							</animated.span>
						)
				)}
				<span
					className={`transition-all duration-300 ${
						hovering ? 'opacity-0' : 'opacity-100'
					}`}
				>
					{locales.current}
				</span>
			</div>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				className="h-4 w-4"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
			>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth={2}
					d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
				/>
			</svg>
		</button>
	);
}

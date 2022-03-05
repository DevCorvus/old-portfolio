import { ReactNode, useState, useEffect } from 'react';
import { useTransition, animated } from '@react-spring/web';
import useTranslation from '../hooks/useTranslation';

interface SkillInterface {
	children?: ReactNode;
	title: string;
	level?: number;
}

export default function Skill({ children, title, level = 0 }: SkillInterface) {
	const [hasDetails, setHasDetails] = useState<boolean>(false);
	const [showDetails, setShowDetails] = useState<boolean>(false);
	const {
		skills: { levels },
	} = useTranslation();

	useEffect(() => {
		if (children) setHasDetails(true);
	}, [children]);

	const transitions = useTransition(showDetails, {
		from: { opacity: 0 },
		enter: { opacity: 1 },
		leave: { opacity: 0 },
	});

	let message: { text: string; color: string };
	switch (level) {
		case 1:
			message = {
				text: levels.low,
				color: 'text-cyan-800',
			};
			break;
		case 2:
			message = {
				text: levels.medium,
				color: 'text-cyan-700',
			};
			break;
		case 3:
			message = {
				text: levels.good,
				color: 'text-cyan-600',
			};
			break;
		case 4:
			message = {
				text: levels.veryGood,
				color: 'text-cyan-500',
			};
			break;
		case 5:
			message = {
				text: levels.expert,
				color: 'text-cyan-400',
			};
			break;
		default:
			message = {
				text: levels.unknown,
				color: 'text-neutral-600',
			};
			break;
	}

	return (
		<div>
			{hasDetails ? (
				<button
					onClick={() => setShowDetails((prevState) => !prevState)}
					className="group w-full flex justify-between items-center"
					type="button"
				>
					<div className="flex items-center gap-2 transition group-hover:text-violet-300">
						<div
							className={`transition-all duration-300 ${
								showDetails ? 'rotate-180' : 'rotate-0'
							}`}
						>
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
									d="M19 9l-7 7-7-7"
								/>
							</svg>
						</div>
						<h3 className="text-xl font-bold">{title}</h3>
					</div>
					<span className={message.color}>{message.text}</span>
				</button>
			) : (
				<div className="flex justify-between items-center">
					<h3 className="text-xl font-bold">{title}</h3>
					<span className={message.color}>{message.text}</span>
				</div>
			)}
			{showDetails && (
				<>
					{transitions(
						(styles, item) =>
							item && <animated.p style={styles}>{children}</animated.p>
					)}
				</>
			)}
		</div>
	);
}

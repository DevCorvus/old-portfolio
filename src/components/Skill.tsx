import { ReactNode, useEffect, useState } from 'react';
import useTranslation from 'src/hooks/useTranslation';

import { animated, useTransition } from '@react-spring/web';

interface SkillInterface {
	children?: ReactNode;
	title: string;
	level?: number;
	interested?: boolean;
}

interface SkillStatusInterface {
	message: {
		color: string;
		text: string;
	};
	interested?: boolean;
}

export default function Skill({
	children,
	title,
	level = 0,
	interested,
}: SkillInterface) {
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
					<SkillStatus message={message} interested={interested} />
				</button>
			) : (
				<div className="flex justify-between items-center">
					<h3 className="text-xl font-bold">{title}</h3>
					<SkillStatus message={message} interested={interested} />
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

function SkillStatus({ interested, message }: SkillStatusInterface) {
	const {
		skills: { interested: interestedText },
	} = useTranslation();
	return (
		<div className="flex items-center gap-2">
			<span className={message.color}>{message.text}</span>
			{interested && (
				<div title={interestedText} className="text-green-500 animate-pulse">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="h-4 w-4"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						strokeWidth={2}
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M5 11l7-7 7 7M5 19l7-7 7 7"
						/>
					</svg>
				</div>
			)}
		</div>
	);
}

import { ReactNode, useState } from 'react';
import useBounce from '../hooks/useBounce';
import useTranslation from '../hooks/useTranslation';

interface ShowMoreInterface {
	children: ReactNode;
	alternative?: boolean;
}

export default function ShowMore({ children, alternative }: ShowMoreInterface) {
	const [show, setShow] = useState<boolean>(false);
	const bounce = useBounce(show);
	const { misc } = useTranslation();

	return (
		<>
			{!show ? (
				<button
					onClick={() => setShow(true)}
					className={`transition hover:text-violet-300 ${
						alternative
							? 'box w-full text-xl text-green-300 border-green-400 hover:border-violet-300'
							: 'mx-auto flex flex-col justify-center text-sm'
					}`}
					type="button"
				>
					<span>{misc.showMore}</span>
					{!alternative && (
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="w-full h-4"
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
					)}
				</button>
			) : (
				<div
					className={`flex flex-col gap-4 transition-all ${
						bounce ? 'opacity-100' : 'opacity-0'
					}`}
				>
					{children}
				</div>
			)}
		</>
	);
}

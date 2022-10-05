import { ReactNode, useState } from 'react';
import useBounce from 'src/hooks/useBounce';
import useTranslation from 'src/hooks/useTranslation';

export default function ShowMore({ children }: { children: ReactNode }) {
	const [show, setShow] = useState<boolean>(false);
	const bounce = useBounce(show);
	const { misc } = useTranslation();

	return (
		<>
			{!show ? (
				<button
					onClick={() => setShow(true)}
					className="text-left text-sm transition text-blue-400 hover:text-blue-500"
					type="button"
				>
					<span>{misc.readMore}</span>
				</button>
			) : (
				<div
					className={`flex flex-col gap-2 transition-all ${
						bounce ? 'opacity-100' : 'opacity-0'
					}`}
				>
					{children}
				</div>
			)}
		</>
	);
}

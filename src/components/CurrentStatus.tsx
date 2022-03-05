import Subtitle from './Subtitle';
import Box from './Box';
import useTranslation from '../hooks/useTranslation';

const CURRENT_WORKING_STATUS = process.env.NEXT_PUBLIC_CURRENT_WORKING_STATUS;
const working: boolean = CURRENT_WORKING_STATUS === 'true';

export default function CurrentStatus() {
	const {
		misc: { status },
	} = useTranslation();
	return (
		<div>
			<Subtitle>{status.title}</Subtitle>
			<Box>
				<div
					className={`animate-pulse ${
						working ? 'text-blue-500' : 'text-green-300'
					} text-xl font-bold tracking-wider flex items-center gap-2 select-none`}
				>
					<span
						className={`block w-8 h-8 rounded-full ${
							working ? 'bg-blue-500' : 'bg-green-300'
						}`}
					></span>
					<span>{working ? status.working : status.free}</span>
				</div>
			</Box>
		</div>
	);
}

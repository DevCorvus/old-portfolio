import { useEffect, useState } from 'react';

export default function useBounce(state: boolean = true): boolean {
	const [bounce, setBounce] = useState<boolean>(false);

	useEffect(() => {
		if (state) {
			setTimeout(() => {
				setBounce(true);
			}, 10);
		}
	}, [state]);

	return bounce;
}

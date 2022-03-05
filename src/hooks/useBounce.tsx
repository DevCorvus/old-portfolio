import { useState, useEffect } from 'react';

const useBounce = (state: boolean = true): boolean => {
	const [bounce, setBounce] = useState<boolean>(false);

	useEffect(() => {
		if (state) {
			setTimeout(() => {
				setBounce(true);
			}, 10);
		}
	}, [state]);

	return bounce;
};

export default useBounce;

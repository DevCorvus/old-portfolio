import { ReactElement, useState, useEffect } from 'react';
import { useRouter } from 'next/router';

export default function NavItem({ children }: { children: ReactElement }) {
	const router = useRouter();
	const [selected, setSelected] = useState<boolean>(false);

	useEffect(() => {
		if (children.props.href && router.route === children.props.href) {
			setSelected(true);
		} else {
			setSelected(false);
		}
	}, [router, children]);

	return (
		<li
			className={`transition-all duration-300 group ${
				selected ? 'text-violet-300' : ''
			} hover:text-violet-300`}
		>
			{children}
			<div className="h-0.5 transition-all duration-300 w-0 group-hover:w-full bg-violet-300 content-none"></div>
		</li>
	);
}

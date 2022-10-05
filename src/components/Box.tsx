import { ReactNode } from 'react';

export default function Box({ children }: { children: ReactNode }) {
	return <div className="relative flex flex-col gap-4 box">{children}</div>;
}

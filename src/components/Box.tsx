import type { ReactNode } from 'react';

export default function Box({ children }: { children: ReactNode }) {
	return <div className="relative flex flex-col gap-3 box">{children}</div>;
}

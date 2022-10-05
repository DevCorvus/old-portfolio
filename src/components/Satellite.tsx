import { CSSProperties } from 'react';

const animationProperties: CSSProperties = {
	transform: 'rotateY(180deg)',
	animationName: 'satellite',
	animationDuration: '20s',
	animationTimingFunction: 'linear',
	animationIterationCount: 'infinite',
};

export default function Satellite() {
	return (
		<span style={animationProperties} className="absolute top-0 select-none">
			🛰️
		</span>
	);
}

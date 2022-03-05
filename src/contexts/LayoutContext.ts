import { createContext, Dispatch, SetStateAction } from 'react';

interface LayoutContextInterface {
	setEasterEgg: Dispatch<SetStateAction<boolean>>;
}
const LayoutContext = createContext<LayoutContextInterface | null>(null);

export default LayoutContext;

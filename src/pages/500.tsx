import Link from 'next/link';
import useTranslation from 'src/hooks/useTranslation';

export default function Custom500() {
	const {
		misc: { goToHome, errors },
	} = useTranslation();

	return (
		<div>
			<p className="text-2xl">{errors.internalServer}</p>
			<span className="text-xl transition text-blue-400 hover:text-blue-500">
				<Link href="/">
					<>{goToHome} &#10132;</>
				</Link>
			</span>
		</div>
	);
}

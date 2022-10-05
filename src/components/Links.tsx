import Link from 'next/link';
import useTranslation from 'src/hooks/useTranslation';

import Language from './Language';
import NavItem from './NavItem';

export default function Links() {
	const { navbar } = useTranslation();
	return (
		<>
			<NavItem>
				<Link href="/">{navbar.home}</Link>
			</NavItem>
			<NavItem>
				<Link href="/projects">{navbar.projects}</Link>
			</NavItem>
			<NavItem>
				<Link href="/skills">{navbar.skills}</Link>
			</NavItem>
			<NavItem>
				<Link href="/contact">{navbar.contact}</Link>
			</NavItem>
			<NavItem>
				<a
					href="https://devbanner.herokuapp.com/"
					target="_blank"
					rel="noopener noreferrer"
				>
					{navbar.blog}
				</a>
			</NavItem>
			<NavItem>
				<Link href="/about">{navbar.about}</Link>
			</NavItem>
			<NavItem>
				<Language />
			</NavItem>
		</>
	);
}

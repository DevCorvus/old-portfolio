import { useRouter } from 'next/router';
import en from 'src/locales/en';
import es from 'src/locales/es';

export default function useTranslation() {
	const router = useRouter();
	const t = router.locale === 'en' ? en : es;
	return t;
}

import { useRouter } from 'next/router';
import en from '../locales/en';
import es from '../locales/es';

const useTranslation = () => {
  const router = useRouter();
  const t = router.locale === 'en' ? en : es;
  return t;
};

export default useTranslation;
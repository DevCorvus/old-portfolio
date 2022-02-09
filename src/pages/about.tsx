import Header from '../components/Header';
import Box from '../components/Box';
import useTranslation from '../hooks/useTranslation';

export default function About() {
  const { about: { title } } = useTranslation();
  return (
    <>
      <section>
        <Header>{title}</Header>  
        <Box>
          
        </Box>
      </section>
    </>
  );
}

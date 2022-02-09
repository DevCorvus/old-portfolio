import useTranslation from '../hooks/useTranslation';
import Header from '../components/Header';
import Box from '../components/Box';
import Project from '../components/Project';
import devbanner from 'public/images/devbanner.png';
import devbannerFavicon from 'public/images/devbanner-favicon.png';
import relyn from 'public/images/relyn.png';
import relynFavicon from 'public/images/relyn-favicon.png';

export default function Projects() {
  const { projects: { title, details } } = useTranslation();
  return (
    <>
      <section>
        <Header>{title}</Header>
        <Box>
          <p>Some note...</p>
          <div className='grid grid-cols-2 gap-4'>
            <Project
              name={details.project1.title}
              description={details.project1.description}
              favicon={devbannerFavicon}
              image={devbanner}
              url='https://devbanner.herokuapp.com/'
            />
            <Project
              name={details.project2.title}
              description={details.project2.description}
              favicon={relynFavicon}
              image={relyn}
              url='https://relyn.herokuapp.com/'
            />
          </div>
        </Box>
      </section>
    </>
  );
}

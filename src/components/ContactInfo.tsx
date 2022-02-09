import Header from './Header';
import Box from './Box';
import useTranslation from '../hooks/useTranslation';

export default function ContactInfo({ asPage = false }: { asPage?: boolean }) {
  const { contact: { title, means } } = useTranslation();
  return (
    <section>
      <Header type={asPage ? 'h1' : 'h2'}>{title}</Header>
      <Box>
        <div>
          <h2 className={`${asPage ? '' : 'text-sm'} font-bold text-green-300`}>
            {means.linkedIn}
          </h2>
          <a href='https://www.linkedin.com/in/luis-portillo-0b0a371bb/' target='_blank' rel='noreferrer'>
            <div className='inline-flex items-center gap-2 transition-all duration-300 hover:text-violet-200 hover:scale-110 hover:ml-2'>
              <span className={asPage ? 'text-3xl' : 'text-xl'}>LinkedIn</span>
              <i className={`fab fa-linkedin ${asPage ? 'fa-2x' : 'fa-lg'}`}></i>
            </div>
          </a>
        </div>
        <div>
          <h2 className={`${asPage ? '' : 'text-sm'} font-bold text-green-300`}>
            {means.github}
          </h2>
          <a href='https://github.com/DevCorvus' target='_blank' rel='noreferrer'>
            <div className='inline-flex items-center gap-2 transition-all duration-300 hover:text-violet-200 hover:scale-110 hover:ml-2'>
              <span className={asPage ? 'text-3xl' : 'text-xl'}>GitHub</span>
              <i className={`fab fa-github ${asPage ? 'fa-2x' : 'fa-lg'}`}></i>
            </div>
          </a>
        </div>
        <div>
          <h2 className={`${asPage ? '' : 'text-sm'} font-bold text-green-300`}>
            {means.twitter}
          </h2>
          <a href='https://twitter.com/deathcorvus' target='_blank' rel='noreferrer'>
            <div className='inline-flex items-center gap-2 transition-all duration-300 hover:text-violet-200 hover:scale-110 hover:ml-2'>
              <span className={asPage ? 'text-3xl' : 'text-xl'}>Twitter</span>
              <i className={`fab fa-twitter ${asPage ? 'fa-2x' : 'fa-lg'}`}></i>
            </div>
          </a>
        </div>
        <div>
          <h2 className={`${asPage ? '' : 'text-sm'} font-bold text-green-300`}>
            {means.discord}
          </h2>
          <button type='button'>
            <div className='inline-flex items-center gap-2 transition-all duration-300 hover:text-violet-200 hover:scale-110 hover:ml-2'>
              <span className={asPage ? 'text-3xl' : 'text-xl'}>Discord</span>
              <i className={`fab fa-discord ${asPage ? 'fa-2x' : 'fa-lg'}`}></i>
            </div>
          </button>
        </div>
        <div>
          <h2 className={`${asPage ? '' : 'text-sm'} font-bold text-green-300`}>
            {means.email}
          </h2>
          <button type='button'>
            <div className='inline-flex items-center gap-2 transition-all duration-300 hover:text-violet-200 hover:scale-110 hover:ml-2'>
              <span className={asPage ? 'text-3xl' : 'text-xl'}>Email</span>
              <i className={`fa fa-envelope ${asPage ? 'fa-2x' : 'fa-lg'}`}></i>
            </div>
          </button>
        </div>
      </Box>
    </section>
  );
}

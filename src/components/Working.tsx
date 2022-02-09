import Subtitle from './Subtitle';
import Box from './Box';

const working = false;

export default function Working() {
  return (
    <div>
      <Subtitle>Current status</Subtitle>
      <Box>
        <div className={`${working ? 'text-blue-500' : 'text-green-300'} text-xl font-bold tracking-wider flex items-center gap-2 select-none`}>
          <span className={`block w-8 h-8 rounded-full ${working ? 'bg-blue-500' : 'bg-green-300'}`}></span>
          <span>{working ? 'WORKING' : 'FREE'}</span>
        </div>
      </Box>
    </div>
  );
}

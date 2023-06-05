
import { Vortex } from 'react-loader-spinner';
import Container from '../Shared/Container';

const Spnineer = () => {
    return (
       <Container>
         <div className='text-center w-1/3 mx-auto'>
            <Vortex
  visible={true}
  height="80"
  width="80"
  ariaLabel="vortex-loading"
  wrapperStyle={{}}
  wrapperClass="vortex-wrapper"
  colors={['red', 'green', 'blue', 'yellow', 'orange', 'purple']}
/>
        </div>
       </Container>
    );
};

export default Spnineer;
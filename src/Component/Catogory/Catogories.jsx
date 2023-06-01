import {CatogorysData} from '../Catogory/CatogorysData'
import Container from '../Shared/Container';
import Catogorybox from './Catogorybox';

const Catogories = () => {
    return (
       <Container>
         <div className='pt-4 overscroll-x-auto flex flex-row items-center justify-between overflow-x-auto'>
            {
                CatogorysData.map(catogory=>
                < Catogorybox
                key={catogory.label}
                icon={catogory.icon}
               
                label={catogory.label}
                >
                </Catogorybox>)
            }
        </div>
       </Container>
    );
};

export default Catogories;
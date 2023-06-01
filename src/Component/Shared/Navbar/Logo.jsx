import { Link } from 'react-router-dom';
import logo from '../../../assets/logo.png'

const Logo = () => {
    return (
        <div>
            <Link to="/">
            <img className='hidden md:block' 
            src={logo}
             alt="logo" 
             height='100' 
             width='100'/>
            </Link>
        </div>
    );
};

export default Logo;
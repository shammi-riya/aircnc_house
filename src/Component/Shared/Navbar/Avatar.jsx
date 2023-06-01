import UseAuth from '../../../Hook/UseAuth';
import avatar from '../../../assets/placeholder.jpg';

const Avatar = () => {
   
    const {user} = UseAuth();
    return (
        <div>
            
            <img className='rounded-full'
            height='30'
            width='30'
            src={user && user.photoURL ? user.photoURL : avatar} 
            alt="" />
        </div>
    );
};

export default Avatar;
import { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';

const UseAuth = () => {
    const UseAuth = useContext(AuthContext)
    return   UseAuth
};

export default UseAuth;
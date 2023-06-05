
import { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import Spnineer from '../Component/Spnineer/Spnineer';

const PrivateRoute = ({children}) => {
    const {users,loaders} = useContext(AuthContext)
  
    const location = useLocation()



    if(loaders) {
        return <Spnineer></Spnineer>
    }

    if(users?.email){
        return children;
    }

    return <Navigate to="/login" state={{from: location}} replace></Navigate>;

};

export default PrivateRoute;
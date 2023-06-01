import { Outlet } from "react-router-dom";
import Navber from "../Component/Shared/Navbar/Navber";


const Main = () => {
    return (
        <div>
          <Navber></Navber>
          <div className='pt-28 pb-20'>
        <Outlet />
      </div>
        </div>
    );
};

export default Main;
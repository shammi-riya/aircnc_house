import {createBrowserRouter} from "react-router-dom";
import Main from "../layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import SighinUp from "../Pages/SighinUp/SighinUp";


  const router = createBrowserRouter([
    {
      path: "/",
      element:<Main></Main>,
      children: [
        {
          path: "/",
          element: <Home></Home>
        },
      ],
    },
    {
      path:"/login",
      element:<Login></Login>
    },
    {
      path:"/sighnup",
      element:<SighinUp></SighinUp>
    }
  ]);

  export default router;
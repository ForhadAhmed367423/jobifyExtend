import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SingnUp/SignUp";
import Blog from "../Pages/Blog/Blog";
import AddJob from "../Pages/AddJob/AddJob";
import PrivetRoutes from "./PrivetRoutes";
import AllJobs from "../Pages/AllJobs/AllJobs";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'/login',
            element:<Login></Login>
        },
        {
            path:'/signup',
            element:<SignUp></SignUp>
        },
        {
            path:'/blog',
            element:<Blog></Blog>
        },
        {
            path:'/addjob',
            element: <PrivetRoutes><AddJob></AddJob></PrivetRoutes>
        },
        {
            path:'/alljob',
            element:<AllJobs></AllJobs>
        }
      ]
    },
  ]);
  export default router;
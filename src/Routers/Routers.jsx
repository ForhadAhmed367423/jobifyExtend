import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SingnUp/SignUp";
import Blog from "../Pages/Blog/Blog";
import AddJob from "../Pages/AddJob/AddJob";
import PrivetRoutes from "./PrivetRoutes";
import AllJobs from "../Pages/AllJobs/AllJobs";
import CardDetails from "../Pages/Home/JobCard/CardDetails/CardDetails";
import AppliedJob from "../Pages/Home/AppliedJob/AppliedJob";
import MyJob from "../Pages/MyJob/MyJob";
import Eroor from "../eroor";
import ApplyInput from "../Pages/ApplyInput/ApplyInput";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement:<Eroor></Eroor>,
      children:[
        {
            path:'/',
            element:<Home></Home>,
            loader:()=>fetch('http://localhost:5000/jobs')
            
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
            element:<AllJobs></AllJobs>,
            loader:()=>fetch('http://localhost:5000/jobs')
        },
        {
            path:'/cardDetails/:id',
            element:<PrivetRoutes><CardDetails></CardDetails></PrivetRoutes>,
            loader:({params})=>fetch(`http://localhost:5000/jobs/${params.id}`)

        },
        {
            path:'/appliedJob',
            element:<AppliedJob></AppliedJob>
        },
        {
            path:'/myJob',
            element:<MyJob></MyJob>
        },
        {
            path:'/resume/:id',
            element:<ApplyInput></ApplyInput>,
            loader:({params})=>fetch(`http://localhost:5000/jobs/${params.id}`)
        }
      ]
    },
  ]);
  export default router;
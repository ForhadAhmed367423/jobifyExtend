import { Link} from "react-router-dom";
import logo from "../../../../public/logo.png"
import { AuthContext } from "../../../Providers/AuthProvider";
import { useContext } from "react";



const Navbar = () => {
    const {user,logOut}=useContext(AuthContext);
    const handleLogOut=()=>{
        logOut()
        .then(()=>{})
        .then(error=>console.log(error))
      }

    
    const links = <>
      <li><Link className="font-bold hover:underline  font hover:bg-[#222B38] hover:text-white " to={'/'} >Home</Link></li>
      <li><Link className="hover:text-white  font font-bold hover:underline  hover:bg-transparent " to={'/alljob'}>All Jobs</Link></li>
      <li><Link className="hover:text-white  font font-bold hover:underline  hover:bg-transparent " to={'/addjob'}>Add A Job</Link></li>
      {
        user ? 
        <>
        <li><Link className="hover:text-white  font font-bold hover:underline  hover:bg-transparent ">Applied Jobs</Link></li>
      <li><Link className="hover:text-white  font font-bold hover:underline  hover:bg-transparent ">My Jobs</Link></li>
        </>:
        ""
      }
      <li><Link to={'/blog'} className="hover:text-white  font font-bold hover:underline  hover:bg-transparent ">Blog</Link></li>
    </>
    return (
        <div className="navbar sticky top-0 z-50 bg-[#222B38] py-4 px-4">
  <div className="navbar-start ">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2  rounded-box  text-white " > 
        {links}
      </ul>
    </div>
    <img className="w-36 h-20" src={logo} alt="" />

  </div>
  <div className="navbar-center hidden lg:flex ">
    <ul className="flex items-center  text-black lg:text-white space-x-5 mr-9">
      {links}
    </ul>
  </div>

  <div className="navbar-end gap-4 ">
    {
        user? 
        < >
        <img src={user?.photoURL} className="rounded-full  w-[50px] h-[50px]"  alt="" />
        <div>
        <p className="text-white font font-medium">{user.displayName}</p>
        <p className="text-white font font-medium">{user.email}</p>
        </div>        

    <button onClick={handleLogOut}> 
        <Link className="btn btn-outline border-white font text-center hover:text-white text-white" >Logout</Link>
        </button> 
        </>:


       <>
        <Link to={'/login'} className="font text-white font-semibold font">Login</Link>
        <button className="btn btn-outline border-white font          text-center"><Link to={'signup'} className="font mr-4          text-white">Sign Up</Link>
        </button>
       </>
        
    }
  </div>
  

</div>
    );
};

export default Navbar;
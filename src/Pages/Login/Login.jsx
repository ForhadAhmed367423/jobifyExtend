import { FaGoogle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
const Login = () => {

    const { logIn }=useContext(AuthContext);
    // const location = useLocation();
    const navigate = useNavigate();


    const handleLog = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        logIn(email,password)
            .then(result=>{
                const loggedUser = result.user;
                console.log(loggedUser);
                navigate('/');
                })
    }

    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col ">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold text-center">Login now!</h1>
            
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleLog} className="card-body">
              <div className="form-control ">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" placeholder="email" name="email" className="input input-bordered lg:w-[320px]"    required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" name="password" placeholder="password" className="input input-bordered lg:w-[320px]" required />
                <label className="label gap-20">
                  <Link href="#" className="label-text-alt link link-hover">Forgot password?</Link>

                  <p className="label-text-alt ">New here? Please <span><Link className="link link-hover" to={'/signup'}>signUp</Link></span></p>
                </label>
              </div>
              <div className="form-control mt-6">
                <input type="submit" value="Login" className="btn bg-[#1E83F0] text-white hover:bg-[#1376e0]" />
                <button className="btn btn-outline border-[#1E83F0] hover:bg-[#1376e0] mt-4 "> <FaGoogle className="text-xl"></FaGoogle> <span className="text-base font-bold">Login</span> </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
};

export default Login;
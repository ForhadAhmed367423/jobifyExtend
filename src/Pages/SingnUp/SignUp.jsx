import { FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import { useContext } from "react";
const SignUp = () => {

    const {createUser}=useContext(AuthContext)
    const handleSign=event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;

        createUser(email,password)
        .then(result=>{
            const user = result.user;
            console.log(user);
        })
        .catch(error =>console.log(error))
    }

    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col ">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold text-center">Sign Up Now!</h1>
            
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSign} className="card-body">
              <div className="form-control ">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" placeholder="Name" className="input input-bordered lg:w-[320px]" name="name" required />
              </div>
              
              <div className="form-control ">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" placeholder="email" name="email" className="input input-bordered lg:w-[320px]" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" name="password" placeholder="password" className="input input-bordered lg:w-[320px]" required />
                <label className="label gap-12">
                  <Link href="#" className="label-text-alt link link-hover">Forgot password?</Link>

                  <p className="label-text-alt ">Have an account? Please <span><Link className="link link-hover" to={'/login'}>Login</Link></span></p>
                </label>
              </div>
              <div className="form-control mt-6">
                <input type="submit" value="Sign up" className="btn bg-[#1E83F0] text-white hover:bg-[#1376e0]" />
                <button className="btn btn-outline border-[#1E83F0] hover:bg-[#1376e0] mt-4 "> <FaGoogle className="text-xl"></FaGoogle> <span className="text-base font-bold">Signin</span> </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
};

export default SignUp;
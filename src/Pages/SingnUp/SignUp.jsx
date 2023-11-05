import { FaGoogle } from "react-icons/fa";
import { Link, Navigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import { useContext } from "react";
import Swal from "sweetalert2";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from "../../firebase/firebase.config";
const SignUp = () => {


  const GoogleProvider = new GoogleAuthProvider();
    const auth = getAuth(app);




    const googleHandler = ()=>{
        signInWithPopup(auth,GoogleProvider)
        .then(result=>{
            const logIn = result.user;
            console.log(logIn)
            // userContext.setUser(logIn)
            // localStorage.setItem('userData', JSON.stringify(logIn))
            Navigate('/');
            return Swal.fire({
              title: 'successfully logged in',
              icon: 'success',
              toast: true,
              position: 'top-end',
              showConfirmButton: false,
              timer: 3000
          });
        })
        .catch(error=>{
            console.error(error)
        })
    }
    const {createUser}=useContext(AuthContext)
    const handleSign=event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name);

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
                
              </div>
            </form>
            <div className="flex items-center justify-center">
            <button onClick={googleHandler} className="btn btn-outline border-[#1E83F0] hover:bg-[#1376e0] w-5/6 mb-5"> <FaGoogle className="text-xl"></FaGoogle> <span className="text-base font-bold">Sign in</span> </button>
            </div>
            
          </div>
        </div>
      </div>
    );
};

export default SignUp;
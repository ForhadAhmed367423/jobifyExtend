import { FaGoogle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import Swal from "sweetalert2";
import app from "../../firebase/firebase.config";
const Login = () => {

    const { logIn }=useContext(AuthContext);
    // const location = useLocation();
    const navigate = useNavigate();
    const GoogleProvider = new GoogleAuthProvider();
    const auth = getAuth(app);




    const googleHandler = ()=>{
        signInWithPopup(auth,GoogleProvider)
        .then(result=>{
            const logIn = result.user;
            console.log(logIn)
            // userContext.setUser(logIn)
            // localStorage.setItem('userData', JSON.stringify(logIn))
            navigate('/');
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
                
              </div>
            </form>
            <div className="flex items-center justify-center">
            <button onClick={googleHandler} className="btn btn-outline border-[#1E83F0] hover:bg-[#1376e0] w-5/6 mb-5"> <FaGoogle className="text-xl"></FaGoogle> <span className="text-base font-bold">Login</span> </button>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Login;
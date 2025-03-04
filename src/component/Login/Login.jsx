import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";

 
const Login = () => {
  const {signInUser} = useContext(AuthContext);
  const navigate = useNavigate();
    const handleLogin = e =>{
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email,password);
        // sign in user
        signInUser(email,password)
        .then(result =>{
          console.log(result.user);
          e.target.reset();
          navigate('/');
        })
        .catch(error =>{
          console.error(error);
        }
        )
    }
    return (
        <div>
            <div className="hero bg-base-200 min-h-screen max-w-6xl mx-auto rounded-md">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Login now!</h1>
      <p className="py-6">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <form onSubmit={handleLogin} className="card-body" >
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name="password" placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label> 
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
      <div className="px-6 pb-4">
        <p>New to this Page please <span className="text-blue-400"><Link to="/register">Register</Link></span></p>
      </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default Login;
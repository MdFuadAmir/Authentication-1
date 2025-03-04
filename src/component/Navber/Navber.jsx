import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";

const navber = <>
<li><NavLink to="/">Home</NavLink></li>
<li><NavLink to="/order">Orders</NavLink></li>
<li><NavLink to="/login">Login</NavLink></li>
<li><NavLink to="/register">Register</NavLink></li>
</>
const Navber = () => {
  const {user,logOut} = useContext(AuthContext);

  const handleLogOut = () =>{
    logOut()
    .then(() =>{console.log("log out done");})
    .catch(error =>{
      console.error(error);
    })
  }
    return (
        <div>
            <div className="navbar bg-base-100 max-w-6xl mx-auto">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
            {navber}
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">Auth</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {navber}
    </ul>
  </div>
  <div className="navbar-end">
    {
      user ? <div>
       <span className="mr-2">{user.email}</span> <a onClick={handleLogOut} className="btn btn-sm">Sign Out</a>
       </div> :
       <div><a className="btn btn-sm">Sign In</a></div>  
    }
  </div>
</div>
            
        </div>
    );
};

export default Navber;
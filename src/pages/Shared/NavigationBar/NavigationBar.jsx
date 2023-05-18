import { Link } from "react-router-dom";

import logo from "../../../assets/logo.png";
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";

const NavigationBar = () => {
  const { user, logOutUser } = useContext(AuthContext);

  const handleLogOutUser = () => {
    logOutUser()
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const navItems = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/allToys">All Toys</Link>
      </li>
      <li>
        <Link to="/myToys">My Toys</Link>
      </li>
      <li>
        <Link to="/addToy">Add a Toy</Link>
      </li>
      <li>
        <Link to="/blogs">Blogs</Link>
      </li>
      <li>
        <Link to="/signUp">Sign Up</Link>
      </li>
      {user ? (
        <li>
          <button onClick={handleLogOutUser} className="btn btn-ghost">
            Log Out
          </button>
        </li>
      ) : (
        <li>
          <Link to="/signIn">SingIn</Link>
        </li>
      )}
    </>
  );

  return (
    <div className="navbar bg-base-200">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </label>
          <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            {navItems}
          </ul>
        </div>
        <div>
          <img src={logo} className="w-40 h-14" alt="" />
          <h3 className="text-center font-semibold text-2xl text-purple-800">ABC TOY SHOPE</h3>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navItems}</ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <img className="w-20 h-10 rounded-full" src={user?.photoURL} alt={user?.displayName} title={user?.displayName} />
        ) : (
          <Link to="/logIn">Profile</Link>
        )}
      </div>
    </div>
  );
};

export default NavigationBar;

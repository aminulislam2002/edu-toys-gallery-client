import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { FaGoogle } from "react-icons/fa";
import { GoogleAuthProvider } from "firebase/auth";

const SignIn = () => {
  const { logInUser, createUserWithGoogle } = useContext(AuthContext);
  const googleProvider = new GoogleAuthProvider();

  const handleSignIn = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(form, email, password);

    logInUser(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log("Logged In User", loggedUser);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleGoogleSingIn = () => {
    createUserWithGoogle(googleProvider)
      .then((result) => {
        const createdUser = result.user;
        console.log(createdUser);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };

  return (
    <div className="w-1/3 mx-auto py-5">
      <form onSubmit={handleSignIn}>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Your Email</span>
          </label>
          <input
            type="email"
            name="email"
            placeholder="Enter Your Email"
            className="input input-xs sm:input-sm md:input-md lg:input-lg input-bordered"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            type="password"
            name="password"
            placeholder="Enter Your Password"
            className="input input-xs sm:input-sm md:input-md lg:input-lg input-bordered"
          />
        </div>
        <div className="flex justify-center items-center">
          <input
            type="submit"
            className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg w-full bg-blue-500 hover:bg-blue-700 border-none my-3"
            value="Sign In"
          />
        </div>
      </form>
      <hr />
      <small>
        New to ABC Toy Shop? <Link to="/signUp">Sign Up</Link>
      </small>
      <p className="text-center">Or login with</p>
      <button
        onClick={handleGoogleSingIn}
        className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg w-full bg-white hover:bg-white text-black border my-3"
      >
        <FaGoogle className="text-blue-500"></FaGoogle> Continue with Google
      </button>
    </div>
  );
};

export default SignIn;

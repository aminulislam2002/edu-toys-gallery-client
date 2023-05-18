import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { GoogleAuthProvider } from "firebase/auth";

const SignUp = () => {
  const { createUserWithEmail, CreateUserWithGoogle, updateUserProfile } = useContext(AuthContext);
  const googleProvider = new GoogleAuthProvider();

  const handleSignUp = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const photo = form.photoURL.value;
    const password = form.password.value;
    console.log(form, name, email, photo, password);

    createUserWithEmail(email, password)
      .then((result) => {
        const createdUser = result.user;
        updateUserProfile(result.user, name, photo);
        console.log("Created User: ", createdUser);
      })
      .catch((error) => console.log(error));
  };

  const handleGoogleSingIn = () => {
    CreateUserWithGoogle(googleProvider)
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
      <form onSubmit={handleSignUp}>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Your Name</span>
          </label>
          <input
            type="text"
            name="name"
            placeholder="Enter Your Name"
            className="input input-xs sm:input-sm md:input-md lg:input-lg input-bordered"
          />
        </div>
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
            <span className="label-text">Your Photo URL</span>
          </label>
          <input
            type="url"
            name="photoURL"
            placeholder="Enter Your Photo url"
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
            value="Sign Up"
          />
        </div>
      </form>
      <small>
        Already have an account? <Link to="/signIn">Sign In</Link>
      </small>
      <p className="text-center">Or login with</p>
      <button onClick={handleGoogleSingIn} className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg w-full bg-blue-500 hover:bg-blue-700 border-none my-3">
        G
      </button>
    </div>
  );
};

export default SignUp;

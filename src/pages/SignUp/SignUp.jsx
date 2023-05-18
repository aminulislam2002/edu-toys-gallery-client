import { Link } from "react-router-dom";

const SignUp = () => {
  const handleSignUp = (event) => {
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const photo = form.photoURL.value;
    const password = form.password.value;
    console.log(form, name, email, photo, password);
  };

  return (
    <div className="w-1/3 mx-auto py-5">
      <form onSubmit={handleSignUp}>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Your Name</span>
          </label>
          <input type="text" name="name" placeholder="Enter Your Name" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Your Email</span>
          </label>
          <input type="email" name="email" placeholder="Enter Your Email" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Your Photo URL</span>
          </label>
          <input type="url" name="photoURL" placeholder="Enter Your Photo url" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>

          <input type="password" name="password" placeholder="Enter Your Password" className="input input-bordered" />
        </div>
        <div className="flex justify-center items-center">
          <input
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-1/2 mx-auto my-3"
            value="Sign Up"
          />
        </div>
      </form>
      <hr />
      <small>
        Already have an account? <Link to="/signIn">Sign In</Link>
      </small>
    </div>
  );
};

export default SignUp;

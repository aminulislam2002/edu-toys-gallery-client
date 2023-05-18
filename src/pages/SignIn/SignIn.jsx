const SignIn = () => {
  const handleSignIn = (event) => {
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(form, email, password);
  };

  return (
    <div className="w-1/3 mx-auto py-5">
      <form onSubmit={handleSignIn}>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Your Email</span>
          </label>
          <input type="email" name="email" placeholder="Enter Your Email" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name="password" placeholder="Enter Your Password" className="input input-bordered" />
        </div>
        <div className="flex justify-center items-center">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-1/2 mx-auto my-3"
          >
            Sign In
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignIn;

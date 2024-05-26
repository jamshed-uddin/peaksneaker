import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const Signup = () => {
  const { user, userSignup, loading, setLoading } = useAuth();
  const [userCredential, setUserCredential] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [showPass, setShowPass] = useState({
    password: false,
    confirmPassword: false,
  });
  const [error, setError] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/";

  useEffect(() => {
    if (user) {
      navigate(from, { replace: true });
    }
  }, [from, navigate, user]);

  const handleInputChange = (e) => {
    setError("");
    setUserCredential((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  console.log(userCredential);

  const handleUserSignup = async () => {
    try {
      const { email, password, confirmPassword } = userCredential;
      if (!email | !password | !confirmPassword) {
        return setError("Fill up the required field");
      } else if (password !== confirmPassword) {
        return setError("Password does not match");
      } else if (password.length < 6) {
        return setError("Password must be 6 character at least.");
      }

      await userSignup(email, password);
    } catch (error) {
      setLoading((p) => !p);
      console.log(error.message);
      if (error.message === "Firebase: Error (auth/invalid-credential).") {
        setError("Invalid credential");
      }
    }
  };

  return (
    <div className="h-screen flex justify-center items-center ">
      <div className=" lg:w-1/4 w-full lg:mx-auto mx-10">
        <Link to={"/"}>
          <h1 className="text-lg lg:text-2xl font-medium">Peak Sneaker</h1>
        </Link>
        <div className="mt-4">
          <h1 className="text-center mb-2 font-bold text-2xl">Sign up</h1>
          <div>
            <label htmlFor="" className="text-xl font-semibold">
              Email
            </label>
            <input
              type="text"
              placeholder="Enter you email"
              className="input input-bordered w-full max-w-xs focus:outline-none"
              name="email"
              value={userCredential.email}
              onChange={handleInputChange}
              autoComplete="new-password"
            />
          </div>
          <div className="mt-2">
            <label
              htmlFor=""
              className="text-xl font-semibold flex justify-between items-end"
            >
              <span> Password</span>
              <span
                onClick={() =>
                  setShowPass((p) => ({
                    ...p,
                    password: !p.password,
                  }))
                }
                className="text-sm font-normal cursor-pointer "
              >
                {showPass.password ? "Hide" : "Show"}
              </span>
            </label>
            <input
              type={showPass.password ? "text" : "password"}
              placeholder="Your password"
              className="input input-bordered w-full max-w-xs focus:outline-none"
              name="password"
              value={userCredential.password}
              onChange={handleInputChange}
              autoComplete="new-password"
            />
          </div>
          <div className="mt-2">
            <label
              htmlFor=""
              className="text-xl font-semibold flex justify-between items-end"
            >
              <span>Confirm password</span>
              <span
                onClick={() =>
                  setShowPass((p) => ({
                    ...p,
                    confirmPassword: !p.confirmPassword,
                  }))
                }
                className="text-sm font-normal cursor-pointer "
              >
                {showPass.confirmPassword ? "Hide" : "Show"}
              </span>
            </label>
            <input
              type={showPass.confirmPassword ? "text" : "password"}
              placeholder="Confirm password"
              className="input input-bordered w-full max-w-xs focus:outline-none"
              name="confirmPassword"
              value={userCredential.confirmPassword}
              onChange={handleInputChange}
              autoComplete="new-password"
            />
          </div>
          <span className="text-red-500">{error}</span>

          <div className="text-center mt-3">
            <button
              disabled={loading}
              type="button"
              onClick={handleUserSignup}
              className="btn btn-sm text-lg"
            >
              Sign up
            </button>
          </div>
        </div>

        <div className="mt-5">
          <h1>
            Already have an account?
            <Link to={"/login"}>
              <span className="text-blue-600 underline">Login</span>
            </Link>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Signup;

import { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { FaGoogle, FaGithub } from "react-icons/fa";

const Login = () => {
  const {
    user,
    userLogin,
    loading,
    setLoading,
    loginWithGoogle,
    loginWithGithub,
  } = useAuth();
  const [userCredential, setUserCredential] = useState({
    email: "",
    password: "",
  });
  const [showPass, setShowPass] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
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

  const handleUserLogin = async () => {
    try {
      await userLogin(userCredential.email, userCredential.password);
    } catch (error) {
      setLoading((p) => !p);

      if (error.message === "Firebase: Error (auth/invalid-credential).") {
        setError("Invalid credential");
      }
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await loginWithGoogle();
    } catch (error) {
      setLoading((p) => !p);
    }
  };
  const handleGithubLogin = async () => {
    try {
      await loginWithGithub();
    } catch (error) {
      setLoading((p) => !p);
    }
  };

  return (
    <div className="h-screen flex justify-center items-center ">
      <div className="lg:w-1/4 w-full lg:mx-auto mx-10">
        <Link to={"/"}>
          <h1 className="text-lg lg:text-2xl font-medium">Peak Sneaker</h1>
        </Link>
        <div className="mt-4">
          <h1 className="text-center mb-2 font-bold text-2xl">Login</h1>
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
            />
          </div>
          <div className="mt-2">
            <label
              htmlFor=""
              className="text-xl font-semibold flex justify-between items-end"
            >
              <span> Password</span>
              <span
                onClick={() => setShowPass((p) => !p)}
                className="text-sm font-normal cursor-pointer "
              >
                {showPass ? "Hide" : "Show"}
              </span>
            </label>
            <input
              type={showPass ? "text" : "password"}
              placeholder="Your password"
              className="input input-bordered w-full max-w-xs focus:outline-none"
              name="password"
              value={userCredential.password}
              onChange={handleInputChange}
            />
          </div>
          <span className="text-red-500">{error}</span>

          <div className="text-center mt-3">
            <button
              disabled={loading}
              type="button"
              onClick={handleUserLogin}
              className="btn btn-sm text-lg"
            >
              Login
            </button>
          </div>
        </div>
        {/* social login */}
        <div className="text-center mt-3">
          <h2 className="text-xl font-semibold">Or, continue with</h2>
          <div className="flex justify-center items-center gap-3">
            <button onClick={handleGoogleLogin} className="btn btn-sm ">
              <FaGoogle />
            </button>
            <button onClick={handleGithubLogin} className="btn btn-sm ">
              <FaGithub />
            </button>
          </div>
        </div>

        <div className="mt-5">
          <h1>
            New to Peak Sneaker?
            <Link to={"/signup"}>
              <span className="text-blue-600 underline">Sign up</span>
            </Link>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Login;

import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ContextApi } from "../../Auth/AuthContext";
import { useForm } from "react-hook-form";
import { GoogleAuthProvider } from "firebase/auth";
const Login = () => {
  const {
    register,
    reset,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const { logUserIn, googleProvider } = useContext(ContextApi);
  const [logError, setLogError] = useState("");
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const [newEmail, setNewEmail] = useState("");
  const navigate = useNavigate();
  const provider = new GoogleAuthProvider();
  const signInSubmitGoogle = () => {
    googleProvider(provider)
      .then((result) => {
        const user = result.user;
        const type = "user";
        saveUserData(user.displayName, user.email, type);
        navigate(from, { replace: true });
      })
      .catch((error) => console.error(error));
  };

  const handleLogin = (data) => {
    setLogError("");
    logUserIn(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setNewEmail(data.email);

        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error.message);
        setLogError(error.message);
      });
  };

  const saveUserData = (name, email, type) => {
    const user = { name, email, type };
    console.log(user);
    fetch(`http://localhost:5000/users`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };
  return (
    <div className=" mx-auto h-[550px] flex justify-center items-center ">
      <div className="w-96 mt-16 shadow-2xl bg-base-100 card pb-8 ">
        {" "}
        <h1 className="text-5xl font-bold text-center mb-4">Login!</h1>
        <form className=" mx-auto" onSubmit={handleSubmit(handleLogin)}>
          <div className="form-control w-full ">
            <label className="label">
              {" "}
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              {...register("email", { required: "email is required" })}
              className="input input-bordered w-full "
            />
            {errors.email && (
              <p className="text-red-600">{errors.email?.message}</p>
            )}
          </div>
          <div className="form-control w-full ">
            <label className="label">
              {" "}
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              {...register("password", { required: "Password is required" })}
              className="input input-bordered w-full "
            />
            {errors.password && (
              <p className="text-red-600">{errors.password?.message}</p>
            )}
            {logError && <p className="text-red-600">{logError}</p>}
          </div>

          <label className="label">
            {" "}
            <span className="label-text">Forgot Password?</span>
          </label>
          <input className="btn btn-accent w-full" type="submit" />
          <p>
            New to Doctor's Farm?{" "}
            <Link className="text-primary" to="/signup">
              Create an Account
            </Link>
            <h4 className="divider">or</h4>
          </p>
        </form>
        <button
          onClick={signInSubmitGoogle}
          className="btn btn-outline  w-5/6 mx-auto"
        >
          Sign in with Google
        </button>
      </div>
    </div>
  );
};

export default Login;

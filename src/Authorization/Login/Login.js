import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ContextApi } from "../../Auth/AuthContext";
import { useForm } from "react-hook-form";
const Login = () => {
  const {
    register,
    reset,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const { logUserIn } = useContext(ContextApi);
  const [logError, setLogError] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const navigate = useNavigate();
  const handleLogin = (data) => {
    setLogError("");
    logUserIn(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setNewEmail(data.email);
        reset();
        navigate("/");
      })
      .catch((error) => {
        console.log(error.message);
        setLogError(error.message);
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
          <input
            className="btn btn-outline w-full"
            type="submit"
            value="Sign in with Google"
          />
        </form>
      </div>
    </div>
  );
};

export default Login;

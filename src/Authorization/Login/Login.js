import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="hero min-h-screen w-full bg-base-200">
      <div className="hero-content w-4/6 mx-auto">
        <div className="card  flex-shrink-0 w-full max-w-sm  shadow-2xl bg-base-100">
          <h1 className="text-5xl font-bold p-6">Login </h1>
          <div className="card-body ">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                placeholder="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="text"
                placeholder="password"
                className="input input-bordered"
              />
              <label className="label">
                Don't Have Account?
                <Link to="/signup" className="lg:mr-6 text-blue-500 link ">
                  Signup
                </Link>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

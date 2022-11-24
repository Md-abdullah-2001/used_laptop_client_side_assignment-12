import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { ContextApi } from "../../Auth/AuthContext";

const SignUp = () => {
  const { createUser, updateUser } = useContext(ContextApi);
  const [signError, setSignError] = useState("");
  const navigate = useNavigate();
  //   const [createdEmail, setCreatedEmail] = useState("");
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleSignUp = (data) => {
    setSignError("");
    console.log(data);
    createUser(data.email, data.password)
      .then((result) => {
        const user = result.user;
        toast("User Created successfully.");
        console.log(user);
        const userInfo = {
          displayName: data.name,
        };
        updateUser(userInfo)
          .then((result) => {
            saveUserData(data.name, data.email);
            reset();
            navigate("/");
          })
          .catch((er) => console.log(er));
      })
      .catch((error) => {
        console.log(error);
        setSignError(error.message);
      });
    const saveUserData = (name, email) => {
      const user = { name, email };
      console.log(user);
      //   fetch(`http://localhost:5000/users`, {
      //     method: "POST",
      //     headers: {
      //       "content-type": "application/json",
      //     },
      //     body: JSON.stringify(user),
      //   })
      //     .then((res) => res.json())
      //     .then((data) => {
      //       console.log(data);
      //       setCreatedEmail(email);
      //     });
    };
  };
  return (
    // <div className="hero min-h-screen bg-base-200">
    //   <div className="hero-content w-4/6 mx-auto mb-4">
    //     <div className="card flex-shrink-0 w-full max-w-sm   shadow-2xl bg-base-100">
    //       <h1 className="text-5xl font-bold p-2">Signup </h1>
    //       <div className="card-body sm:w-full">
    //         <div className="form-control">
    //           <label className="label">
    //             <span className="label-text">Name</span>
    //           </label>
    //           <input
    //             type="text"
    //             placeholder="Name"
    //             className="input input-bordered"
    //           />
    //         </div>
    //         <select className="select select-bordered w-full ">
    //           <option disabled selected>
    //             Who shot first?
    //           </option>
    //           <option>Han Solo</option>
    //           <option>Greedo</option>
    //         </select>
    //         <div className="form-control">
    //           <label className="label">
    //             <span className="label-text">Email</span>
    //           </label>
    //           <input
    //             type="text"
    //             placeholder="email"
    //             className="input input-bordered"
    //           />
    //         </div>
    //         <div className="form-control">
    //           <label className="label">
    //             <span className="label-text">Password</span>
    //           </label>
    //           <input
    //             type="text"
    //             placeholder="password"
    //             className="input input-bordered"
    //           />
    //           <label className="label">
    //             Don't Have Account?
    //             <Link to="/signup" className="lg:mr-6 text-blue-500 link ">
    //               Signup
    //             </Link>
    //           </label>
    //         </div>
    //         <div className="form-control mt-6">
    //           <button className="btn btn-primary">Login</button>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div className=" mx-auto h-[580px] flex justify-center items-center ">
      <div className="w-96 mt-18 shadow-2xl bg-base-100 card pb-4">
        {" "}
        <h1 className="text-5xl font-bold text-center mb-4">SignUp</h1>
        <form className=" mx-auto" onSubmit={handleSubmit(handleSignUp)}>
          <div className="form-control w-full ">
            <label className="label">
              {" "}
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              {...register("name", {
                required: "Name must be typed",
              })}
              className="input input-bordered w-full "
            />
            {errors.name && (
              <p className="text-red-500">{errors.name.message}</p>
            )}
          </div>
          <div className="form-control w-full ">
            <label className="label">
              {" "}
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              {...register("email", {
                required: "Email is required",
              })}
              className="input input-bordered w-full "
            />
            {errors.email && (
              <p className="text-red-500">{errors.email.message}</p>
            )}
          </div>
          <div className="form-control w-full ">
            <label className="label">
              {" "}
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              {...register("password", {
                required: "Password is required",
                pattern: {
                  value: /^(?=.*[!#$%&? "])/,
                  message: "Add special character",
                },
                minLength: {
                  value: 6,
                  message: "Password must be 6 character long ",
                },
              })}
              className="input input-bordered w-full "
            />
            {errors.password && (
              <p className="text-red-500">{errors.password.message}</p>
            )}
            {signError && <p className="text-red-600">{signError}</p>}
          </div>

          <label className="label"> </label>
          <input className="btn btn-accent w-full" type="submit" />
          <p>
            Already Have an Account?{" "}
            <Link className="text-primary" to="/login">
              Please Login
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

export default SignUp;

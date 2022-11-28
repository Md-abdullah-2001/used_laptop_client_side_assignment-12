import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="my-52">
      <p className="text-5xl text-center mb-2 text-red-600">
        Something went wrong
      </p>

      <Link className="btn btn-info" to="/">
        Go Back To Home
      </Link>
    </div>
  );
};

export default ErrorPage;

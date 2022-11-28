import React from "react";
import offImage from "../../Assets/images.png";
const HeroTwo = () => {
  return (
    <div>
      <div className="hero  my-16 bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <img
            alt="/"
            src={offImage}
            className="max-w-sm rounded-lg shadow-2xl w-full"
          />
          <div>
            <h1 className="text-5xl font-bold">
              Get special 50% Off for the Festival Time in Second hand used
              products..
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroTwo;

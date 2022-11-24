import React from "react";
import heroImg from "../../Assets/dell-Gi3iUJ1FwxI-unsplash.jpg";
const Hero = () => {
  return (
    <div className="hero min-h-fit bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <img
          src={heroImg}
          alt="/"
          className="lg:max-w-xl max-h-fit rounded-lg shadow-2xl"
        />
        <div className="ml-8">
          <h1 className="text-4xl  font-bold">
            Buy Laptops in 50% off <br /> From Gadget-Bazar
          </h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-primary">Explore more</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;

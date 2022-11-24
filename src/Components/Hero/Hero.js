import React from "react";
import heroImg1 from "../../Assets/img2.jpg";
import heroImg2 from "../../Assets/img1.jpg";
import heroImg3 from "../../Assets/img3.jpg";
const Hero = () => {
  return (
    <div className="hero min-h-fit bg-base-200">
      <div className="hero-content ">
        <div className="carousel w-full">
          <div id="slide1" className="carousel-item relative w-full">
            <img
              src={heroImg1}
              alt="/"
              className="lg:max-w-full mx-auto max-h-screen rounded-lg shadow-2xl"
            />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide3" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide2" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide2" className="carousel-item relative w-full">
            <img
              src={heroImg2}
              alt="/"
              className="lg:max-w-full mx-auto max-h-screen rounded-lg shadow-2xl"
            />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide1" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide3" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide3" className="carousel-item relative w-full">
            <img
              src={heroImg3}
              alt="/"
              className="lg:max-w-full mx-auto max-h-screen rounded-lg shadow-2xl"
            />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide2" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide1" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
        </div>
        {/* <div className="ml-8">
          <h1 className="text-4xl  font-bold">
            Buy Laptops in 50% off <br /> From Gadget-Bazar
          </h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-primary">Explore more</button>
        </div> */}
      </div>
    </div>
  );
};

export default Hero;

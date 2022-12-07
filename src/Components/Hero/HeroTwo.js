import React from "react";

import offImage2 from "../../Assets/img1.jpg";
import offImage3 from "../../Assets/img2.jpg";
import offImage4 from "../../Assets/img3.jpg";
const HeroTwo = () => {
  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto my-16">
      <div className="flex justify-center ">
        <div className="rounded-lg shadow-lg bg-white max-w-sm transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-slate-400 duration-300">
          <img className="rounded-t-lg h-64" src={offImage2} alt="" />

          <div className="p-6">
            <h5 className="text-gray-900 text-xl font-medium mb-2">
              Lenovo D15
            </h5>
            <p className="text-gray-700 text-base mb-4">
              Some quick display of some laptop collections like this one Lenovo
              D15
            </p>
            <button
              type="button"
              className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
            >
              Explore
            </button>
          </div>
        </div>
      </div>
      <div className="flex justify-center ">
        <div className="rounded-lg shadow-lg bg-white max-w-sm transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-slate-400 duration-300">
          <img className="rounded-t-lg h-64" src={offImage3} alt="" />

          <div className="p-6">
            <h5 className="text-gray-900 text-xl font-medium mb-2"> MAC-14</h5>
            <p className="text-gray-700 text-base mb-4">
              Some quick display of some laptop collections like this one MAC-14
            </p>
            <button
              type="button"
              className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
            >
              Explore
            </button>
          </div>
        </div>
      </div>
      <div className="flex justify-center ">
        <div className="rounded-lg shadow-lg bg-white max-w-sm transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-slate-400 duration-300 ">
          <img className="rounded-t-lg h-64" src={offImage4} alt="" />

          <div className="p-6">
            <h5 className="text-gray-900 text-xl font-medium mb-2">DELL-540</h5>
            <p className="text-gray-700 text-base mb-4">
              Some quick display of some laptop collections like this one
              DELL-540
            </p>
            <button
              type="button"
              className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
            >
              Explore
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroTwo;

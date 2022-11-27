import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Category = () => {
  const [categories, setCategories] = useState([]);
  console.log(categories);
  useEffect(() => {
    fetch(`http://localhost:5000/category`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setCategories(data);
      });
  }, []);
  return (
    <div className="">
      <h1 className="text-2xl font-semibold p-10 text-blue-500">Categories</h1>

      <div className="  grid lg:grid-cols-3 md:grid-cols-2 gap-5 pb-6">
        {categories.map((category) => (
          <Link to={`/category/${category.category_Name}`}>
            <div className="card btn  w-60 bg-blue-300 shadow-xl mx-auto ">
              <div className="card-body">
                <div className="card-actions justify-end"></div>
                <h1 className="text-lg font-bold">{category.category_Name}</h1>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Category;

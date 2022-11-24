import React, { useEffect, useState } from "react";

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

      <div className="  grid lg:grid-cols-3 md:grid-cols-2 pb-6">
        {categories.map((category) => (
          <div className="card w-60 bg-blue-300 shadow-xl mx-auto ">
            <div className="card-body">
              <div className="card-actions justify-end"></div>
              <h1>{category.category_Name}</h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;

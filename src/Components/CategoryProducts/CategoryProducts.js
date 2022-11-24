import React from "react";
import { useLoaderData } from "react-router-dom";

const CategoryProducts = () => {
  const products = useLoaderData();

  // const { image, name, location, resale_price, original_price, use_year } =
  //   products;

  return (
    <div>
      {products.map((product) => (
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure>
            <img src={product.image} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              Shoes!
              <div className="badge badge-secondary">NEW</div>
            </h2>
            <p>{product.name}</p>
            <div className="card-actions justify-end">
              <div className="badge badge-outline">{product.location}</div>
              <div className="badge badge-outline">{product.resale_price}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CategoryProducts;

import React from "react";

const SingleProduct = ({ product, setProductData }) => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl mx-auto">
      <figure>
        <img className="h-[250px]" w-full src={product.image} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-center">{product.name}</h2>
        <p></p>
        <div className="card-actions justify-start">
          <div className="badge badge-outline">{product.location}</div>
          <div className="badge badge-outline">
            Price: ${product.resale_price}
          </div>
        </div>
        <label
          onClick={() => setProductData(product)}
          htmlFor="modal-form"
          className="btn btn-primary w-1/2 mx-auto mt-4"
        >
          Book now
        </label>
      </div>
    </div>
  );
};

export default SingleProduct;

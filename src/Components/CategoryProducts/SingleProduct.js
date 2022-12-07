import React from "react";

const SingleProduct = ({ product, setProductData }) => {
  const {
    image,
    product_name,
    location,
    resale_price,
    original_price,
    use_year,
    seller,
    posted_time,
  } = product;

  return (
    <div className="card w-96 bg-base-100 shadow-xl mx-auto my-24">
      <figure>
        <img className="h-[250px]  w-full" src={image} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-center">{product_name}</h2>

        <div className="card-actions justify-start">
          <div className="badge badge-outline">{location}</div>
          <div className="badge badge-outline">Posted: {posted_time}</div>
          <div className="badge badge-outline">
            Resale Price: ${resale_price}
          </div>
          <div className="badge badge-outline">Seller Name: {seller}</div>
          <div className="badge badge-outline">
            Original Price: ${original_price}
          </div>
          <div className="badge badge-outline">Years of use: {use_year}</div>
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

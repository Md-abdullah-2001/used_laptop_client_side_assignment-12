import { format } from "date-fns";
import React, { useContext } from "react";

import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { ContextApi } from "../../Auth/AuthContext";
const AddProducts = () => {
  const { user } = useContext(ContextApi);

  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const img = form.photo.value;
    const category = form.category.value;
    const mobile = form.mobile.value;
    const review = form.option.value;
    const location = form.location.value;
    const price = form.price.value;
    const description = form.description.value;

    form.reset();
    const date = new Date();
    const dateFormate = format(date, "PP");
    console.log(dateFormate);
    const product = {
      product_name: name,
      image: img,
      email: user.email,
      category_Name: category,
      posted_time: dateFormate,
      price,
      location,
      description,
      mobile,
      review,
    };
    console.log(product);
    fetch(`http://localhost:5000/products`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(product),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast.success(`Product added to category${category}`);
        navigate("/dashboard/myproducts");
      })
      .catch((err) => console.log(err));
  };

  return (
    <form onSubmit={handleSubmit} className="card-body mx-16 -scroll-my-8">
      <h1 className="text-5xl text-center font-bold">Add Product</h1>
      <div className="form-control">
        <label className="label">
          <span className="label-text">Product Title</span>
        </label>
        <input
          type="text"
          placeholder="Product Title"
          name="name"
          className="input input-bordered"
        />
      </div>
      <textarea
        className="textarea textarea-success"
        placeholder="Start typing..."
        id="review"
        name="description"
        rows="4"
        cols="50"
      ></textarea>
      <div className=" lg:flex ">
        <div className="form-control w-1/2">
          <label className="label">
            <span className="label-text">Price</span>
          </label>
          <input
            type="number"
            placeholder=" Price"
            name="price"
            className="input input-bordered"
          />
        </div>
        <div className="form-control w-1/2">
          <label className="label">
            <span className="label-text">Mobile Number</span>
          </label>
          <input
            type="number"
            placeholder=" Mobile"
            name="mobile"
            className="input input-bordered"
          />
        </div>
      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text">Location</span>
        </label>
        <input
          type="text"
          placeholder=" location"
          name="location"
          className="input input-bordered"
        />
      </div>
      <div className="lg:flex">
        <div className="w-1/2">
          <select
            name="category"
            className="p-3 my-2 w-full input input-bordered"
          >
            <option selected>Select category</option>
            <option value="Apple">Apple</option>
            <option value="Dell">Dell</option>
            <option value="Lenovo">Lenovo</option>
          </select>
        </div>
        <div className="w-1/2">
          <select
            name="option"
            className="p-3 my-2 w-full input input-bordered"
          >
            <option selected>Choose review</option>
            <option value="Excellent">Excellent</option>
            <option value="Good">Good</option>
            <option value="Fair">Fair</option>
          </select>
        </div>
      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text">Photo URL</span>
        </label>
        <input type="file" name="photo" className="input input-bordered" />
      </div>

      <div className="form-control mt-6">
        <input
          className="btn btn-primary text-black"
          type="submit"
          value="Add Service"
        />
      </div>
    </form>
  );
};

export default AddProducts;

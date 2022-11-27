import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
const AddProducts = () => {
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
    const product = {
      name,
      img,
      category_Name: category,
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
    // <div className="mr-12 my-4 h-[580px] flex justify-center items-center ">
    //   <div className="w-96 mt-18 shadow-2xl bg-base-100 card pb-8">
    //     {" "}
    //     <h1 className="text-5xl font-bold text-center mb-4">Add Product</h1>
    //     <form className=" mx-auto" onClick={handleSubmit(handleSignUp)}>
    //       <div className="form-control w-full ">
    //         <label className="label">
    //           {" "}
    //           <span className="label-text"> Product Name</span>
    //         </label>
    //         <input
    //           type="text"
    //           {...register("name", {
    //             required: "Name must be typed",
    //           })}
    //           className="input input-bordered w-full "
    //         />
    //         {errors.name && (
    //           <p className="text-red-500">{errors.name.message}</p>
    //         )}
    //       </div>
    //       <div className="form-control w-full ">
    //         <label className="label">
    //           {" "}
    //           <span className="label-text">Price</span>
    //         </label>
    //         <input
    //           type="number"
    //           {...register("price", {
    //             required: "price is required",
    //           })}
    //           className="input input-bordered w-full "
    //         />
    //         {errors.price && (
    //           <p className="text-red-500">{errors.price.message}</p>
    //         )}
    //       </div>
    //       <div>
    //         <select
    //           className="p-3 my-2 w-full input input-bordered"
    //           {...register("type")}
    //         >
    //           <option value="Good">Good</option>
    //           <option value="Excellent">Excellent</option>
    //           <option value="Fair">Fair</option>
    //         </select>
    //       </div>

    //       <label className="label"> </label>
    //       <input className="btn btn-accent w-full mt-8" type="submit" />
    //     </form>
    //   </div>
    // </div>
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
      <div className="form-control">
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
      <div className="form-control">
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
      <div>
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
      <div>
        <select name="option" className="p-3 my-2 w-full input input-bordered">
          <option selected>Choose review</option>
          <option value="Excellent">Excellent</option>
          <option value="Good">Good</option>
          <option value="Fair">Fair</option>
        </select>
      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text">Photo URL</span>
        </label>
        <input
          type="text"
          placeholder="Photo URL"
          name="photo"
          className="input input-bordered"
        />
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

import React, { useContext } from "react";
import toast from "react-hot-toast";

import { ContextApi } from "../../Auth/AuthContext";

const ModalForm = ({ productData, setProductData }) => {
  const { user } = useContext(ContextApi);
  console.log(productData);
  const handleabaooking = (event) => {
    event.preventDefault();
    const form = event.target;

    const name = form.name.value;
    const email = form.email.value;
    const phone = form.phone.value;
    const location = form.location.value;

    const productBooking = {
      product_name: productData.product_name,
      price: productData.resale_price,
      location,
      img: productData.image,
      email: email,
      name: name,
      phone: phone,
    };
    console.log(productBooking);

    fetch(`https://assignment-12-server-side-chi.vercel.app/booking`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(productBooking),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          setProductData(null);
          toast.success("Booked product successfully");
        } else {
          toast.error(data.message);
        }
      });
  };
  return (
    <>
      <input type="checkbox" id="modal-form" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="modal-form"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold mb-4">{productData.name}</h3>
          <form onSubmit={handleabaooking}>
            <input
              disabled
              type="text"
              value={`$${productData.resale_price}`}
              className="input  input-bordered mb-3 w-full "
            />

            <input
              type="text"
              placeholder="Your Name"
              defaultValue={user?.displayName}
              disabled
              name="name"
              className="input input-bordered mb-3 w-full "
            />

            <input
              type="email"
              defaultValue={user?.email}
              disabled
              required
              placeholder="E-mail"
              name="email"
              className="input input-bordered mb-3 w-full "
            />

            <input
              type="number"
              required
              placeholder="Your Phone"
              name="phone"
              className="input input-bordered mb-3 w-full "
            />
            <input
              required
              type="text"
              name="location"
              placeholder="Meeting Location"
              className="input  input-bordered mb-3 w-full "
            />
            <br />
            <input
              className="btn btn-outline w-full mt-7"
              type="submit"
              value="Submit"
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default ModalForm;

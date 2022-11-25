import React, { useContext } from "react";
import { ContextApi } from "../../Auth/AuthContext";

const ModalForm = ({ productData }) => {
  const { user } = useContext(ContextApi);
  console.log(user.email);
  const handleabaooking = (event) => {
    event.preventDefault();
    const form = event.target;
    const slot = form.slot.value;
    const name = form.name.value;
    const email = form.email.value;
    const phone = form.phone.value;
    console.log(name, email, phone, slot);
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
              disabled
              type="text"
              value={productData.location}
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

import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { useLoaderData } from "react-router-dom";
import CheckoutPay from "./CheckoutPay";
const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);
console.log(stripePromise);
const Payment = () => {
  const data = useLoaderData();
  return (
    <div>
      <h1 className="text-3xl ">Payments for {data.product_name}</h1>
      <p>please pay ${data.price}</p>
      <div className="w-1/3 mt-12 mx-auto">
        <Elements stripe={stripePromise}>
          <CheckoutPay data={data} />
        </Elements>
      </div>
    </div>
  );
};

export default Payment;

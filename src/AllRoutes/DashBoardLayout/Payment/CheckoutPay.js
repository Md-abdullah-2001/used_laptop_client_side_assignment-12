import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";

const CheckoutPay = ({ data }) => {
  const { price, email, name, _id } = data;
  console.log(price);
  const [clientSecret, setClientSecret] = useState("");
  const [success, setSuccess] = useState("");
  const [transaction, setTransaction] = useState("");
  const [process, setProcess] = useState(false);

  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    fetch(
      `https://assignment-12-server-side-chi.vercel.app/create-payment-intent`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ price }),
      }
    )
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, [price]);
  const [errors, setErrors] = useState("");
  const stripe = useStripe();
  const elements = useElements();
  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });
    if (error) {
      console.log("[error]", error);
      setErrors(error.message);
    } else {
      console.log("[PaymentMethod]", paymentMethod);
      setErrors("");
    }
    setSuccess("");
    setProcess(true);
    const { paymentIntent, error: payError } = await stripe.confirmCardPayment(
      clientSecret,
      {
        payment_method: {
          card: card,
          billing_details: {
            name: name,
            email: email,
          },
        },
      }
    );

    if (payError) {
      setErrors(payError.message);
      return;
    }
    if (paymentIntent.status === "succeeded") {
      setProcess(false);
      const payDetails = {
        price,
        email,
        bookingId: _id,
        transaction: paymentIntent.id,
      };
      fetch(`https://assignment-12-server-side-chi.vercel.app/payments`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(payDetails),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.insertedId) {
            setSuccess("congrats on your successful payment");
            setTransaction(paymentIntent.id);
          }
        });
    }
    console.log("payment ", paymentIntent);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        {<p className="text-red-500">{errors}</p>}
        <button
          className="btn btn-success"
          type="submit"
          disabled={!stripe || !clientSecret || process}
        >
          Pay
        </button>
        {success && (
          <div>
            <p className="text-green-500">{success}</p>
            <p className="text-green-500">
              Your Transaction ID is {transaction}
            </p>
          </div>
        )}
      </form>
    </div>
  );
};

export default CheckoutPay;

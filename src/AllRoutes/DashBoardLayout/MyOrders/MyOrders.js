import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { ContextApi } from "../../../Auth/AuthContext";

const MyOrders = () => {
  const { user } = useContext(ContextApi);
  const url = `http://localhost:5000/booking?email=${user?.email}`;

  const { data: bookings = [] } = useQuery({
    queryKey: ["booking", user?.email],
    queryFn: async () => {
      const res = await fetch(url);
      const data = await res.json();
      return data;
    },
  });
  return (
    <div>
      <h1 className="text-3xl font-bold my-4">My Orders</h1>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th></th>
              <th>Title</th>
              <th>Price</th>
              <th>Payment</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking, i) => (
              <tr>
                <th>{i + 1}</th>
                <th>
                  <div className="avatar">
                    <div className="w-14 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                      <img alt="" src={booking.img} />
                    </div>
                  </div>
                </th>
                <td>{booking.product_name}</td>
                <td>${booking.price}</td>
                <td>
                  <button className="btn btn-sm btn-primary">Pay</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyOrders;

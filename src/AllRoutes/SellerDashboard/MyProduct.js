import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { ContextApi } from "../../Auth/AuthContext";

const MyProduct = () => {
  const { user } = useContext(ContextApi);
  const { data: products = [] } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const res = await fetch(
        `https://assignment-12-server-side-chi.vercel.app/seller/${user.email}`
      );
      const data = await res.json();
      return data;
    },
  });
  console.log(products);
  return (
    <div>
      <h1 className="text-3xl font-bold">My Products</h1>
      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          <thead>
            <tr>
              <th>img</th>

              <th>Price</th>
              <th>Job</th>
              <th>Status</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product._id}>
                <td>
                  <img
                    className="w-10  rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 h-9"
                    src={product.image}
                    alt=""
                  />
                </td>

                <td>${product.resale_price}</td>
                <td></td>
                <td>
                  <button>Advertise</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyProduct;

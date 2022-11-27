import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { ContextApi } from "../../Auth/AuthContext";

const MyProduct = () => {
  const { user } = useContext(ContextApi);
  const { data: products = [] } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/seller/${user.email}`);
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
              <th></th>
              <th>Name</th>
              <th>Job</th>
              <th>Favorite Color</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, i) => (
              <tr key={product._id}>
                <th>{i + 1}</th>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>{product.image}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyProduct;

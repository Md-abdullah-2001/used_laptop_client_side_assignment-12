import { useQuery } from "@tanstack/react-query";
import React from "react";

const AllSeller = () => {
  const { data: sellers = [] } = useQuery({
    queryKey: ["sellers"],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/seller`);
      const data = await res.json();
      return data;
    },
  });

  return (
    <div>
      <h1 className="text-3xl text-center p-4">AllSeller</h1>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>status</th>
            </tr>
          </thead>
          <tbody>
            {sellers.map((seller, i) => (
              <tr>
                <th>{i + 1}</th>

                <td>{seller.name}</td>
                <td>
                  <button className="btn btn-sm btn-error">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllSeller;

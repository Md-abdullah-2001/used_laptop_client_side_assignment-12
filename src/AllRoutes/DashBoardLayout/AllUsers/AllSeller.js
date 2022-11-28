import { useQuery } from "@tanstack/react-query";
import React from "react";
import toast from "react-hot-toast";

const AllSeller = () => {
  const { data: sellers = [], refetch } = useQuery({
    queryKey: ["sellers"],
    queryFn: async () => {
      const res = await fetch(
        `https://assignment-12-server-side-chi.vercel.app/seller`
      );
      const data = await res.json();
      return data;
    },
  });
  const handleDelete = (id, name) => {
    console.log(id);
    const confirmation = window.confirm("Do you wanna Delete?");
    if (confirmation) {
      fetch(`https://assignment-12-server-side-chi.vercel.app/seller/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          refetch();
          toast.error(`${name} is Deleted successfully `);
        });
    }
  };
  return (
    <div>
      <h1 className="text-3xl text-center p-4">All Seller</h1>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>E-mail</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {sellers.map((seller, i) => (
              <tr>
                <th>{i + 1}</th>

                <td>{seller.name}</td>
                <td>{seller.email}</td>
                <td>
                  <button
                    onClick={() => handleDelete(seller._id, seller.name)}
                    className="btn btn-sm btn-error"
                  >
                    Delete
                  </button>
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

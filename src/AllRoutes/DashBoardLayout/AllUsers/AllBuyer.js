import { useQuery } from "@tanstack/react-query";
import React from "react";
import toast from "react-hot-toast";

const AllBuyer = () => {
  const { data: buyers = [], refetch } = useQuery({
    queryKey: ["buyers"],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/user`);
      const data = await res.json();
      return data;
    },
  });
  const handleDelete = (id, name) => {
    console.log(id);
    const confirmation = window.confirm("Do you wanna Delete?");
    if (confirmation) {
      fetch(`http://localhost:5000/user/${id}`, {
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
      <h1 className="text-3xl text-center p-4">All Buyer</h1>
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
            {buyers.map((buyer, i) => (
              <tr>
                <th>{i + 1}</th>

                <td>{buyer.name}</td>
                <td>
                  <button
                    onClick={() => handleDelete(buyer._id, buyer.name)}
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

export default AllBuyer;

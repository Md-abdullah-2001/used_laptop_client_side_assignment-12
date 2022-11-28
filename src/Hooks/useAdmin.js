import { useEffect, useState } from "react";

const useAdmin = (email) => {
  const [isUser, setIsUser] = useState(false);
  const [adminLoading, setAdminLoading] = useState(true);
  useEffect(() => {
    if (email) {
      fetch(
        `https://assignment-12-server-side-chi.vercel.app/users/admin/${email}`
      )
        .then((res) => res.json())
        .then((data) => {
          //   console.log(data.isAdmin);
          setIsUser(data.isAdmin);
          if (data.isAdmin) {
            setAdminLoading(false);
          }
        });
    }
  }, [email]);
  return [isUser, adminLoading];
};
export default useAdmin;

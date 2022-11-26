import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { ContextApi } from "../../Auth/AuthContext";
import NavBar from "../../Components/NavBar/NavBar";
import useAdmin from "../../Hooks/useAdmin";

const DashBoardLayout = () => {
  const { user } = useContext(ContextApi);
  const [isUser] = useAdmin(user.email);
  console.log(isUser);
  return (
    <div>
      <NavBar></NavBar>
      <div className="drawer drawer-mobile">
        <input
          id="drawer-dashboard"
          type="checkbox"
          className="drawer-toggle"
        />
        <div className="drawer-content ">
          <Outlet></Outlet>
        </div>
        <div className="drawer-side">
          <label htmlFor="drawer-dashboard" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 bg-base-100 text-base-content">
            {isUser === "user" && (
              <li>
                <Link to="/dashboard/myorders">My Orders</Link>
              </li>
            )}
            {isUser === "seller" && (
              <li>
                <Link to="/dashboard/addproduct">Add products</Link>
                <Link to="/dashboard/myorders">My products</Link>
              </li>
            )}
            {isUser === "admin" && (
              <>
                <li>
                  <Link to="/dashboard/allusers">All Users</Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashBoardLayout;

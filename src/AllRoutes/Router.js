import { createBrowserRouter } from "react-router-dom";
import Login from "../Authorization/Login/Login";
import SignUp from "../Authorization/SignUp/SignUp";
import Blogs from "../Blogs/Blogs";
import CategoryProducts from "../Components/CategoryProducts/CategoryProducts";
import Home from "../Components/Home/Home";
import AllUsers from "./DashBoardLayout/AllUsers/AllUsers";

import DashBoardLayout from "./DashBoardLayout/DashBoardLayout";
import MyOrders from "./DashBoardLayout/MyOrders/MyOrders";
import AdminRoute from "./Main/AdminRoute";
import Main from "./Main/Main";
import PrivateRoute from "./PrivateRoute";
import AddProducts from "./SellerDashboard/AddProducts";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      { path: "/", element: <Home></Home> },
      { path: "/blogs", element: <Blogs></Blogs> },
      {
        path: "/category/:id",
        loader: ({ params }) => {
          return fetch(`http://localhost:5000/category/${params.id}`);
        },
        element: (
          <PrivateRoute>
            <CategoryProducts></CategoryProducts>
          </PrivateRoute>
        ),
      },
      { path: "/login", element: <Login></Login> },
      { path: "/signup", element: <SignUp></SignUp> },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashBoardLayout></DashBoardLayout>
      </PrivateRoute>
    ),
    children: [
      {
        path: "/dashboard/myorders",
        element: <MyOrders></MyOrders>,
      },
      {
        path: "/dashboard/addproduct",
        element: <AddProducts></AddProducts>,
      },
      {
        path: "/dashboard/allusers",
        element: (
          <AdminRoute>
            <AllUsers></AllUsers>
          </AdminRoute>
        ),
      },
    ],
  },
]);

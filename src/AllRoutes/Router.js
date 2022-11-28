import { createBrowserRouter } from "react-router-dom";
import Login from "../Authorization/Login/Login";
import SignUp from "../Authorization/SignUp/SignUp";
import Blogs from "../Blogs/Blogs";
import CategoryProducts from "../Components/CategoryProducts/CategoryProducts";
import Home from "../Components/Home/Home";
import ErrorPage from "../ErrorPage/ErrorPage";
import AllBuyer from "./DashBoardLayout/AllUsers/AllBuyer";
import AllSeller from "./DashBoardLayout/AllUsers/AllSeller";

import DashBoardLayout from "./DashBoardLayout/DashBoardLayout";
import MyOrders from "./DashBoardLayout/MyOrders/MyOrders";
import Payment from "./DashBoardLayout/Payment/Payment";
import AdminRoute from "./Main/AdminRoute";
import Main from "./Main/Main";
import PrivateRoute from "./PrivateRoute";
import AddProducts from "./SellerDashboard/AddProducts";
import MyProduct from "./SellerDashboard/MyProduct";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      { path: "/", element: <Home></Home> },
      { path: "/blogs", element: <Blogs></Blogs> },
      {
        path: "/category/:name",
        loader: ({ params }) =>
          fetch(`http://localhost:5000/category/${params.name}`),
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
    errorElement: <ErrorPage></ErrorPage>,
    element: (
      <PrivateRoute>
        <DashBoardLayout></DashBoardLayout>
      </PrivateRoute>
    ),
    children: [
      {
        path: "/dashboard/payment/:id",
        element: <Payment></Payment>,
        loader: ({ params }) => {
          return fetch(`http://localhost:5000/booking/${params.id}`);
        },
      },
      {
        path: "/dashboard/myorders",
        element: <MyOrders></MyOrders>,
      },
      {
        path: "/dashboard/addproduct",
        element: <AddProducts></AddProducts>,
      },
      {
        path: "/dashboard/myproducts",
        element: <MyProduct></MyProduct>,
      },
      {
        path: "/dashboard/allbuyers",
        element: (
          <AdminRoute>
            <AllBuyer></AllBuyer>
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/allsellers",
        element: (
          <AdminRoute>
            <AllSeller></AllSeller>
          </AdminRoute>
        ),
      },
    ],
  },
]);

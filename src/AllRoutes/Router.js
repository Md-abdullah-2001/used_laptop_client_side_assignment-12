import { createBrowserRouter } from "react-router-dom";
import Login from "../Authorization/Login/Login";
import SignUp from "../Authorization/SignUp/SignUp";
import CategoryProducts from "../Components/CategoryProducts/CategoryProducts";
import Home from "../Components/Home/Home";
import CommonDashboard from "./DashBoardLayout/CommonDashboard/CommonDashboard";
import DashBoardLayout from "./DashBoardLayout/DashBoardLayout";
import MyOrders from "./DashBoardLayout/MyOrders/MyOrders";
import Main from "./Main/Main";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      { path: "/", element: <Home></Home> },
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
    element: <DashBoardLayout></DashBoardLayout>,
    children: [
      {
        path: "/dashboard",
        element: (
          <PrivateRoute>
            <MyOrders></MyOrders>{" "}
          </PrivateRoute>
        ),
      },
    ],
  },
]);

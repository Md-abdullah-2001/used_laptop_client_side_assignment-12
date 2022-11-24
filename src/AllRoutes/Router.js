import { createBrowserRouter } from "react-router-dom";
import Login from "../Authorization/Login/Login";
import SignUp from "../Authorization/SignUp/SignUp";
import CategoryProducts from "../Components/CategoryProducts/CategoryProducts";
import Home from "../Components/Home/Home";
import Main from "./Main/Main";

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
        element: <CategoryProducts></CategoryProducts>,
      },
      { path: "/login", element: <Login></Login> },
      { path: "/signup", element: <SignUp></SignUp> },
    ],
  },
]);

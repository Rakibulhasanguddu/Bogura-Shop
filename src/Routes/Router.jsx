import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Pages/Home";
import Regestration from "../Component/Regestration";
import Login from "../Component/Login";
import About from "../Pages/About";
import Error from "../Component/Error";
  export const router = createBrowserRouter([
    {
      path: "/",
      element:<Root></Root>,
      errorElement:<Error></Error>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'/regester',
            element:<Regestration></Regestration>
        },
        {
          path:'/login',
          element:<Login></Login>
        },
        {
          path:'/about',
          element:<About></About>
        }
      ]
    },
  ]);
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Pages/Home";
import Regestration from "../Component/Regestration";
import Login from "../Component/Login";
import About from "../Pages/About";
  export const router = createBrowserRouter([
    {
      path: "/",
      element:<Root></Root>,
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
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Pages/Home";
import Regestration from "../Component/Regestration";
import Login from "../Component/Login";
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
        }
      ]
    },
  ]);
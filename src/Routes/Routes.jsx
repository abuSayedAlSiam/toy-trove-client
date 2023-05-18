import {
    createBrowserRouter
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import AllToys from "../Pages/AllToys/AllToys";
import AddAToy from "../Pages/AddAToy/AddAToy";
import Blogs from "../Pages/Blogs/Blogs";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: "/",
            element: <Home></Home>
        },
        {
            path: "allToys",
            element: <AllToys></AllToys>
        },
        {
          path: "addAToy",
          element: <AddAToy></AddAToy>
        },
        {
          path: "blogs",
          element: <Blogs></Blogs>
        }
      ]
    },
  ]);

  export default router;
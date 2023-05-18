import {
    createBrowserRouter
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import AllToys from "../Pages/AllToys/AllToys";
import AddAToy from "../Pages/AddAToy/AddAToy";
import Blogs from "../Pages/Blogs/Blogs";
import Login from "../Pages/Login/Login";
import Register from "../../Register/Register";
import Toy from "../Pages/Toy/Toy";
import MyToys from "../Pages/MyToys/MyToys";


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
            element: <AllToys></AllToys>,
            loader: () => fetch('http://localhost:5000/allToys')
        },
        {
          path: "toy/:id",
          element: <Toy></Toy>,
          loader: ({params}) => fetch(`http://localhost:5000/toy/${params.id}`)
        },
        {
          path: "addAToy",
          element: <AddAToy></AddAToy>
        },
        {
          path: "myToys",
          element: <MyToys></MyToys>
        },
        {
          path: "blogs",
          element: <Blogs></Blogs>
        },
        {
          path: "login",
          element: <Login></Login>
        },
        {
          path: "register",
          element: <Register></Register>
        }
      ]
    },
  ]);

  export default router;
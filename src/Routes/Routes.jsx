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
import UpdateToy from "../Pages/MyToys/UpdateToy";
import PrivateRoute from "./PrivateRoute";
import Error from "../Pages/Error/Error";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <Error></Error>,
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
          path: "toy/:id",
          element: <PrivateRoute><Toy></Toy></PrivateRoute>,
          loader: ({params}) => fetch(`http://localhost:5000/toy/${params.id}`)
        },
        {
          path: "addAToy",
          element: <PrivateRoute><AddAToy></AddAToy></PrivateRoute>
        },
        {
          path: "myToys",
          element:<PrivateRoute> <MyToys></MyToys></PrivateRoute>
        },
        {
          path: "updateToy/:id",
          element: <PrivateRoute><UpdateToy></UpdateToy></PrivateRoute>,
          loader: ({params}) => fetch(`http://localhost:5000/toy/${params.id}`)
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
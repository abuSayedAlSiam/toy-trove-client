import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";



const PrivateRoute = ({children}) => {
    const {user, loading } = useContext(AuthContext);

    const location = useLocation();

    if(loading){
        return <p className="text-xl text-conter">Loading...</p>
    }

   if(user){
    return children;
   }

    return <Navigate to="/login" state={{from: location}} replace></Navigate>
};

export default PrivateRoute;
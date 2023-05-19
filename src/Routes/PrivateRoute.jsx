import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";



const PrivateRoute = ({children}) => {
    const {user, loading } = useContext(AuthContext);

    const location = useLocation();

    if(loading){
        return <div className="w-3/12 mx-auto mt-20"> <progress className="progress progress-info w-56" value="0" max="100"></progress>
        <progress className="progress progress-info w-56" value="10" max="100"></progress>
        <progress className="progress progress-info w-56" value="40" max="100"></progress>
        <progress className="progress progress-info w-56" value="70" max="100"></progress>
        <progress className="progress progress-info w-56" value="100" max="100"></progress></div>
    }

   if(user){
    return children;
   }

    return <Navigate to="/login" state={{from: location}} replace></Navigate>
};

export default PrivateRoute;
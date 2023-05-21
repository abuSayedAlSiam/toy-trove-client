import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import HashLoader from 'react-spinners/HashLoader';



const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);

    const location = useLocation();

    if (loading) {
        return <div className='w-1/12 mx-auto my-10'>
            <HashLoader color="#00d9ff" />
        </div>
    }

    if (user) {
        return children;
    }
    else {
        Swal.fire({
            icon: 'info',
            title: 'You need to login first.',
            showConfirmButton: false,
            timer: 1500
        })
        return <Navigate to="/login" state={{ from: location }} replace></Navigate>
    }


};

export default PrivateRoute;
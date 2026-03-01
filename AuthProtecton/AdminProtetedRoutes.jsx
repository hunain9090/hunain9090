import { Navigate, Outlet } from "react-router-dom";

function AdminProtectedRoutes() {
    
    if(!localStorage.getItem("adminToken")|| !localStorage.getItem("role"))
    return <Navigate to="/staff-login" replace />



    return <Outlet/>;
}


export default AdminProtectedRoutes;
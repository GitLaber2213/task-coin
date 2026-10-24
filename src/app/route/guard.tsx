import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "../../features/auth/provider";

export const GuardRoutes = () => {
    const { isAuth } = useAuth();
    const location = useLocation();

    
    if (!isAuth) {
        return <Navigate to="/auth" state={{ from: location }} replace />
    };
    
    return <Outlet />
};
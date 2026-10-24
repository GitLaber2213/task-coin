import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "../../features/auth/provider";

export const GuardRoutes = () => {
    const { isAuth, isLoading } = useAuth();
    const location = useLocation();

    if (isLoading) return <div>Loading...</div>;
    if (!isAuth) {
        return <Navigate to="/auth" state={{ from: location }} replace />
    };
    
    return <Outlet />
};


export const GuestRoutes = () => {
    const { isAuth, isLoading } = useAuth();
    const location = useLocation();

    if (isLoading) return <div>Loading...</div>;
    if (isAuth) return <Navigate to={location.state?.from?.pathname ?? '/ready'} replace />;

    return <Outlet />;
};
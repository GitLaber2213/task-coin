import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "../../features";
import { ROUTES } from "../../shared";

export const GuardRoutes = () => {
    const { isAuth, isLoading } = useAuth();
    const location = useLocation();

    if (isLoading) return <div>Loading...</div>;
    if (!isAuth) {
        return <Navigate to={ROUTES.AUTH} state={{ from: location }} replace />
    };
    
    return <Outlet />
};


export const GuestRoutes = () => {
    const { isAuth, isLoading } = useAuth();
    const location = useLocation();

    if (isLoading) return <div>Loading...</div>;
    if (isAuth) return <Navigate to={ROUTES.RATES} state={{ from: location }} replace />;

    return <Outlet />;
};
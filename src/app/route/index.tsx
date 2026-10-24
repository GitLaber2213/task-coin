import { createBrowserRouter, Navigate, Outlet } from "react-router-dom";
import { AuthPage } from "../../pages";
import { GuardRoutes } from "./guard";
import { useAuth } from "../../features/auth/provider";



const RootRedirect = () => {
    const { isAuth, isLoading } = useAuth();
    console.log(isAuth, isLoading);

    return isAuth && !isLoading ? <Navigate to="/ready" replace /> : <Navigate to="/auth" replace />;
};


export const router = createBrowserRouter([{
    path: '/',
    element: <Outlet />,
    errorElement: <div>404</div>,
    children: [
        {
            index: true,
            element: <RootRedirect />
        },
        {
            path: '/auth',
            element: <>
                <AuthPage />
                <RootRedirect />
            </>
        },
        {
            element: <GuardRoutes />,
            children: [
                {
                    path: '/ready',
                    element: <div>auth (пользователь успешно вошел)</div>
                },
            ]
        }
    ]
}
]);
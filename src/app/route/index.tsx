import { createBrowserRouter, Navigate, Outlet } from "react-router-dom";
import { AuthPage } from "../../pages";
import { GuardRoutes, GuestRoutes } from "./guard";


export const router = createBrowserRouter([{
    path: '/',
    element: <Outlet />,
    errorElement: <div>404</div>,
    children: [
        {
            index: true,
            element: <Navigate to="/ready" replace />
        },
        {
            element: <GuestRoutes />,
            children: [
                {
                    path: '/auth',
                    element:
                        <AuthPage />
                },
            ]
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
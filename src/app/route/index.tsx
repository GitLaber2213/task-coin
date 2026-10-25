import { createBrowserRouter, Navigate, Outlet } from "react-router-dom";
import { AuthPage, RatesPage, CardPage } from "../../pages";
import { GuardRoutes, GuestRoutes } from "./guard";
import { ROUTES } from "../../shared";
import { NavBar } from "../../widgets";


export const router = createBrowserRouter([{
    path: '/',
    element: <>
        <NavBar />
        <Outlet />
    </>,
    errorElement: <div>404</div>,
    children: [
        {
            index: true,
            element: <Navigate to={ROUTES.RATES} replace />
        },
        {
            element: <GuestRoutes />,
            children: [
                {
                    path: ROUTES.AUTH,
                    element:
                        <AuthPage />
                },
            ]
        },
        {
            element: <GuardRoutes />,
            children: [
                {
                    path: ROUTES.RATES,
                    element: <RatesPage />
                },
                {
                    path: ROUTES.CARD_NEW,
                    element: <CardPage />
                },
            ]
        }
    ]
}
]);
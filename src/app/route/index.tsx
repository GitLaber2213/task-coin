import { createBrowserRouter, Navigate } from "react-router-dom";
import { AuthPage, RatesPage, CardPage } from "../../pages";
import { GuardRoutes, GuestRoutes } from "./guard";
import { ROUTES } from "../../shared";
import { AppLayout } from "../layout";


export const router = createBrowserRouter([{
    path: '/',
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
                    element: <AppLayout />,
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
    ]
}
]);

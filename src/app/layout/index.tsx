import { Outlet } from "react-router-dom";
import { NavBar } from "../../widgets";
import { Layout, Main } from "./styles";

export const AppLayout = () => {
    return (
        <Layout>
            <NavBar />
            <Main>
                <Outlet />
            </Main>
        </Layout>
    );
};

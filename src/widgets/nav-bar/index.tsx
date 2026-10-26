import { useNavigate } from "react-router-dom";
import { QUERY_PARAMS, ROUTES } from "../../shared";
import { useAuth } from "../../features";


export const NavBar = () => {
    const navigate = useNavigate();
    const { logout } = useAuth();

    const handleNavigate = (path: string) => {
        navigate(path);
    };

    return (
        <div>
            <button onClick={() => handleNavigate(ROUTES.RATES)}>Rates</button>
            <button onClick={() => handleNavigate(ROUTES.CARD_NEW + QUERY_PARAMS.CARD_STEP_EDIT )}>Cards</button>
            <button onClick={logout}>logout</button>
        </div>
    );
};
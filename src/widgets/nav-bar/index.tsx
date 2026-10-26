import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Button, ButtonVariations, QUERY_PARAMS, ROUTES } from "../../shared";
import { useAuth } from "../../features";
import {
    Divider,
    Grow,
    ItemIcon,
    Logo,
    LogoButton,
    LogoTitle,
    LogoutIcon,
    LogoutLabel,
    MenuTitle,
    Sidebar,
    Spacer
} from "./styles";

const NAV_ITEMS = [
    {
        icon: '💱',
        shortLabel: 'Rates',
        label: 'Exchange Rates',
        path: ROUTES.RATES,
        section: ROUTES.RATES
    },
    {
        icon: '📋',
        shortLabel: 'Cards',
        label: 'Kanban Cards',
        path: ROUTES.CARD_NEW + QUERY_PARAMS.CARD_STEP_EDIT,
        section: ROUTES.CARDS
    }
];


export const NavBar = () => {
    const navigate = useNavigate();
    const { pathname } = useLocation();
    const { logout } = useAuth();
    const [expanded, setExpanded] = useState(false);

    const buttonVariant = expanded ? ButtonVariations.MENU_BUTTON_EXPANDED : ButtonVariations.MENU_BUTTON;

    const handleNavigate = (path: string) => {
        navigate(path);
    };

    return (
        <Sidebar $expanded={expanded}>
            <LogoButton $expanded={expanded} type="button" aria-label="Toggle menu" aria-expanded={expanded}
                onClick={() => setExpanded((prev) => !prev)}
            >
                <Logo $expanded={expanded} aria-hidden>💰</Logo>
                {expanded && <LogoTitle>Dashboard</LogoTitle>}
            </LogoButton>

            {expanded ? <>
                <Divider />
                <MenuTitle>MENU</MenuTitle>
            </> : <Spacer $size={24} />}

            {NAV_ITEMS.map((item) => {
                const active = pathname.startsWith(item.section);

                return (
                    <Button key={item.section} variant={buttonVariant} active={active}
                        aria-current={active ? 'page' : undefined}
                        onClick={() => handleNavigate(item.path)}
                    >
                        <ItemIcon $expanded={expanded} aria-hidden>{item.icon}</ItemIcon>
                        {expanded ? item.label : item.shortLabel}
                    </Button>
                );
            })}

            <Grow />

            {expanded && <>
                <Divider />
                <Spacer $size={8} />
            </>}

            <Button variant={buttonVariant} onClick={logout}>
                <LogoutIcon $expanded={expanded} aria-hidden>🚪</LogoutIcon>
                <LogoutLabel $expanded={expanded}>Logout</LogoutLabel>
            </Button>
        </Sidebar>
    );
};

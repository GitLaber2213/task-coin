import { createContext, useContext, useEffect, useState } from "react";
import type { User } from "../../../entities";
import { AuthApiError, getSession, loginRequest, logoutRequest } from "../api";
import type { LoginData } from "../model/types";

interface IAuthContext {
    user: User | null;
    isLoading: boolean;
    isAuth: boolean;
    login: (loginData: LoginData) => void;
    logout: () => void;
};


const AuthContext = createContext<IAuthContext | null>(null);


export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [isAuth, setIsAuth] = useState<boolean>(false);
    const [user, setUser] = useState<User | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        const checkSession = async () => {
            try {

                const accessToken = localStorage.getItem('accessToken');
                if(!accessToken) return;

                const res = await getSession(accessToken);
                setUser(res);
                setIsAuth(true);

            } catch (error) {
                console.error(error);
            } finally {
                setIsLoading(false);
            };
        };
        checkSession();
    }, [])

    const login = async (loginData: LoginData) => {
        try {
            const res = await loginRequest(loginData);

            setUser(res.user);
            setIsAuth(true);
            localStorage.setItem('accessToken', res.token);
            alert('Успешная авторизация');
        } catch (error) {
            if (error instanceof AuthApiError) {
                if (error.status === 401) {
                    alert('Неверный логин или пароль');
                } else {
                    alert('Ошибка авторизации');
                };
                return;
            };
            alert('Ошибка сети, проверьте соединение');
        };
    };

    const logout = async () => {
        try {
            setIsLoading(true);
            await logoutRequest();

            setUser(null);
            setIsAuth(false);
            localStorage.removeItem('accessToken');
        } catch (err) {
            alert('ошибка')
        } finally {
            setIsLoading(false);
        };
    };

    const value = {
        user,
        isLoading,
        login,
        logout,
        isAuth
    };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) throw new Error('useAuth должен использоваться внутри AuthProvider');
    return context;
};

import { createContext, useContext, useEffect, useState } from "react";

type User = {
    id: string;
    email: string;
    name: string;
    role: 'admin' | 'user';
} | null;

type LoginData = {
    email: string;
    password: string;
};

interface IAuthContext {
    user: User;
    isLoading: boolean;
    isAuth: boolean;
    login: (loginData: LoginData) => void;
    logout: () => void;
};


const AuthContext = createContext<IAuthContext | null>(null);


export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [isAuth, setIsAuth] = useState<boolean>(false);
    const [user, setUser] = useState<User>(null);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        const checkSession = async () => {
            try {

                const accessToken = localStorage.getItem('accessToken');
                const response = await fetch('https://example.com/auth', {
                    method: 'GET',
                    headers: {
                        'Authorization': accessToken || ''
                    }
                });
                const res: User = await response.json();

                if (response.ok) {
                    console.log('bebra');
                    setUser(res);
                    setIsAuth(true);
                };

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
            const response = await fetch('https://example.com/auth', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: loginData.email,
                    password: loginData.password
                })
            });

            const res = await response.json();

            if (!response.ok) {
                console.log(response.status)
                if (response.status === 401) {
                    alert('Неверный логин или пароль');
                } else {
                    alert('Ошибка авторизации');
                };
                return;
            };


            setUser(res);
            setIsAuth(true);
            localStorage.setItem('accessToken', res.token);
            alert('Успешная авторизация');
        } catch (error) {
            alert('Ошибка сети, проверьте соединение');
        };
    };

    const logout = async () => {
        try {
            setIsLoading(true);
            const response = await fetch('https://example.com/logout', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                }
            });

            if (!response.ok) alert('ошибка');

            if (response.status === 204) {
                setUser(null);
                setIsAuth(false);
                localStorage.removeItem('accessToken');
            };
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
import type { User } from "../../../entities";
import type { LoginData, LoginResponse } from "../model/types";

const AUTH_URL = 'https://example.com/auth';
const LOGOUT_URL = 'https://example.com/logout';

export class AuthApiError extends Error {
    readonly status: number;

    constructor(status: number) {
        super(`Auth request failed with status ${status}`);
        this.status = status;
    };
};

export const getSession = async (accessToken: string): Promise<User> => {
    const response = await fetch(AUTH_URL, {
        method: 'GET',
        headers: {
            'Authorization': accessToken
        }
    });

    if (!response.ok) throw new AuthApiError(response.status);
    return response.json();
};

export const loginRequest = async (loginData: LoginData): Promise<LoginResponse> => {
    const response = await fetch(AUTH_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            email: loginData.email,
            password: loginData.password
        })
    });

    if (!response.ok) throw new AuthApiError(response.status);
    return response.json();
};

export const logoutRequest = async (): Promise<void> => {
    const response = await fetch(LOGOUT_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        }
    });

    if (!response.ok) throw new AuthApiError(response.status);
};

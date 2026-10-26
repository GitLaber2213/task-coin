import type { User } from "../../../entities";

export type LoginData = {
    email: string;
    password: string;
};

export type LoginResponse = {
    user: User;
    token: string;
};

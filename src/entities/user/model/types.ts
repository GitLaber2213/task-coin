export type UserRole = 'admin' | 'user';

export type User = {
    id: string;
    email: string;
    name: string;
    role: UserRole;
};

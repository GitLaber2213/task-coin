import { http, HttpResponse } from 'msw/http'
import type { AuthDto } from './dtos/auth-dto';

let _isLogged = false;

export const authHandlers = [
    http.post<never, AuthDto>('https://example.com/auth', async ({ request }) => {
        const { email, password } = await request.json();


        if (email === 'admin@gmail.com' && password === 'admin123') {
            _isLogged = true
            return HttpResponse.json({
                user: {
                    id: 'xyz-1',
                    name: 'admin',
                    email,
                    role: 'admin'
                },
                token: 'mocked-jwt-token-xyz-1',
            }, { status: 200 });
        };

        return HttpResponse.json(
            { message: 'unathorized' },
            { status: 401 }
        );
    }),
    http.get('https://example.com/auth', ({ request }) => {
        const authHeader = request.headers.get('Authorization');

        if (!authHeader || authHeader !== 'mocked-jwt-token-xyz-1') {
            return HttpResponse.json(
                { message: 'unathorized' },
                { status: 401 }
            );
        }

        return HttpResponse.json({
            id: 'xyz-1',
            name: 'admin',
            email: 'user@example.com',
            role: 'admin'
        });
    }),
    http.post('https://example.com/logout', () => {
        _isLogged = false;

        return new HttpResponse(null, { status: 204 });
    }),
]
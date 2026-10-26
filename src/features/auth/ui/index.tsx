import { useForm } from "react-hook-form";
import { useAuth } from "../provider";
import type { LoginData } from "../model/types";
import { Button, ButtonVariations, Card, CardVariations, Input, InputVariations } from "../../../shared";
import { Fields, Form, Subtitle, Title, TitleGroup } from "./styles";

export const Auth = () => {
    const { login } = useAuth();
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<LoginData>({
        defaultValues: {
            email: '',
            password: ''
        },
        mode: 'onChange'
    });


    const onSubmit = (data: LoginData) => {
        login(data);
    };

    const hasErrors = Boolean(errors.email || errors.password);

    return (
        <Card variant={CardVariations.DEFAULT}>
            <Form onSubmit={handleSubmit(onSubmit)} noValidate>
                <TitleGroup>
                    <Title>Log in</Title>
                    <Subtitle>Welcome Back</Subtitle>
                </TitleGroup>

                <Fields $hasErrors={hasErrors}>
                    <Input variant={InputVariations.DEFAULT} icon="✉"
                        type="email" placeholder="Email Address" autoComplete="email"
                        error={errors.email?.message}
                        {...register('email', {
                            required: 'Email is required',
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: 'Please enter a valid email address'
                            }
                        })} />

                    <Input variant={InputVariations.DEFAULT} icon="🔒"
                        type="password" placeholder="Password" autoComplete="current-password"
                        error={errors.password?.message}
                        {...register('password', {
                            required: 'Password is required',
                            pattern: {
                                value: /^[a-zA-Z0-9]{6,}$/i,
                                message: 'Password must be at least 6 characters'
                            }
                        })} />
                </Fields>

                <Button variant={ButtonVariations.DEFAULT_BUTTON} type="submit" fullWidth>
                    Login
                </Button>
            </Form>
        </Card>
    );
};

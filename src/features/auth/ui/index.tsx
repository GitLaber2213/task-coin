import { useForm } from "react-hook-form";
import { useAuth } from "../provider";

type FormInputs = {
    email: string;
    password: string;
}

export const Auth = () => {
    const { login } = useAuth();
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<FormInputs>({
        defaultValues: {
            email: '',
            password: ''
        }
    });


    const onSubmit = (data: FormInputs) => {
        login(data);
    };

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input type="email" placeholder="Email"
                    {...register('email', {
                        required: 'Email is required',
                        pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: 'Некорректный email адрес'
                        }
                    })} />
                {errors.email && <p style={{ color: 'red' }}>{errors.email.message}</p>}

                <input type="password" placeholder="Password"
                    {...register('password', {
                        required: 'Password is required',
                        pattern: {
                            value: /^[a-zA-Z0-9]{6,}$/i,
                            message: 'Пароль должен быть более 6 символов'
                        }
                    })} />
                {errors.password && <p style={{ color: 'red' }}>{errors.password.message}</p>}
                <button type="submit">login</button>
            </form>
        </div>
    );
};
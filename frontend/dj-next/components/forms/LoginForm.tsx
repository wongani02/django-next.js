'use client'

import { FunctionComponent } from "react";
import Form from "./Form";
import useLogin from "@/hooks/use-login";

interface LoginFormProps {
    
}
 
const LoginForm: FunctionComponent<LoginFormProps> = () => {

    const {onChange, onSubmit, email, password, isLoading} = useLogin();

    const fields = [
        {
            labelText: 'Email',
            labelId: 'email',
            type: 'email',
            value: email,
            required: true
        },
        {
            labelText: 'Password',
            labelId: 'password',
            type: 'password',
            value: password,
            required: true,
            link: {
                linkText: 'Forgot Password?',
                linkURL: '/password-reset'
            }
        }
    ]

    return ( 
        <Form
        btnText={'Login'}
        isLoading={isLoading}
        onChange={onChange}
        onSubmit={onSubmit}
        config={fields}
        />
    );
}
 
export default LoginForm;
'use client'

import useRegister from "@/hooks/use-register";
import { FunctionComponent } from "react";
import Form from "./Form";

interface RegisterFormProps {
    
}
 
const RegisterForm: FunctionComponent<RegisterFormProps> = () => {

    const {
        first_name, 
        last_name, 
        email, 
        password, 
        re_password, 
        onChange, 
        onSubmit,
        isLoading
    } = useRegister()

    const fields = [
        {
            labelText: 'First Name',
            labelId: 'first_name',
            type: 'text',
            value: first_name,
            required: true
        },
        {
            labelText: 'Last Name',
            labelId: 'last_name',
            type: 'text',
            value: last_name,
            required: true
        },
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
            required: true
        },
        {
            labelText: 'Confirm Password',
            labelId: 're_password',
            type: 'password',
            value: re_password,
            required: true
        },
    ]

    return ( 
        <Form
        btnText={'Register'}
        isLoading={isLoading}
        onChange={onChange}
        onSubmit={onSubmit}
        config={fields}
        />
    );
}
 
export default RegisterForm;
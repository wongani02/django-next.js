import { toast } from "@/components/ui/use-toast";
import { useRegisterMutation } from "@/redux/features/authApiSlice";
import { useRouter } from "next/navigation";
import { ChangeEvent, FormEvent, useState } from "react";

export default function useRegister(){

    const [formData, setFormData] = useState({
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        re_password: ''
    });
    const router = useRouter();
    const [register, {isLoading}] = useRegisterMutation();

    const  {first_name, last_name, email, password, re_password} = formData;

    const onChange = (event: ChangeEvent<HTMLInputElement>) =>{
        setFormData({...formData, [event.target.name]: event.target.value})
    };

    const onSubmit = (event: FormEvent<HTMLFormElement>) =>{
        event.preventDefault();

        register({first_name, last_name, email, password, re_password})
            .unwrap()
            .then(()=>{
                toast({
                    title:'Account Created successfully',
                    description: 'Please check your email to verify account',
                })
                router.push('/auth/login')
            })
            .catch((e)=>{
                toast({
                    title: 'Ooops somthing went wrong',
                    description: 'Please make sure you have correctly filled in the form',
                    variant: 'destructive'
                })
                console.log(e)
                console.log(formData)
            })
    };

    return {
        first_name, last_name, email, password, re_password, onChange, onSubmit, isLoading
    }
}
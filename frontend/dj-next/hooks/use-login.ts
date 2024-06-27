import { toast } from "@/components/ui/use-toast";
import { useLoginMutation } from "@/redux/features/authApiSlice";
import { useRouter } from "next/navigation";
import { ChangeEvent, FormEvent, useState } from "react";
import { useAppDispatch } from "@/redux/hooks";
import { setAuth } from "@/redux/features/authSlice";

export default function useLogin(){

    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const dispatch = useAppDispatch();

    const router = useRouter();
    const [ login, {isLoading} ] = useLoginMutation();

    const  { email, password } = formData;

    const onChange = (event: ChangeEvent<HTMLInputElement>) =>{
        setFormData({...formData, [event.target.name]: event.target.value})
    };

    const onSubmit = (event: FormEvent<HTMLFormElement>) =>{
        event.preventDefault();

        login({email, password})
            .unwrap()
            .then(()=>{
                dispatch(setAuth());
                toast({
                    title:'Logged in successfully',
                })
                router.push('/dashboard')
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
        onChange, onSubmit, email, password, isLoading
    }

}
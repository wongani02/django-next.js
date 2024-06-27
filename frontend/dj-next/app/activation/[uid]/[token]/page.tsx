'use client'

import { toast } from "@/components/ui/use-toast";
import { useActivationMutation } from "@/redux/features/authApiSlice";
import { useRouter } from "next/navigation";
import { FunctionComponent, useEffect } from "react";

interface PageProps {
    params: {
        uid: string;
        token:string;
    }
}
 
const Page: FunctionComponent<PageProps> = ({params}) => {

    const [activation] = useActivationMutation();
    const router = useRouter();

    useEffect(()=>{
        const {uid, token} = params;

        activation({uid, token})
            .unwrap()
            .then(()=>{
                toast({
                    title: 'Account Activated!!!'
                })
            })
            .catch((e)=>{
                toast({
                    title: 'Failed to activate account',
                    description: 'Please contact the support team',
                    variant: 'destructive'
                })
                console.log(e)

            })
            .finally(()=>{
                router.push('/auth/login')
            })
    }, [])

    return ( 
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <h1 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                    Activating Your Account...
                </h1>
            </div>
        </div>
     );
}
 
export default Page;
import { useState, ChangeEvent, FormEvent } from 'react';
import { toast } from '@/components/ui/use-toast';

async function resetPassword(email: string) {
    const response = await fetch(`${process.env.NEXT_PUBLIC_HOST}/auth-api/users/reset_password/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email })
    });

    if (response.status === 204) {
        return { success: true };
    } else {
        const data = await response.json();
        throw new Error(data.detail || 'Failed to reset password');
    }

}

export default function useResetPassword() {
    const [email, setEmail] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const onChange = (event: ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    };

    const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setIsLoading(true);

        try {
            await resetPassword(email);
            toast({
                title: 'Password reset email sent',
                description: 'Please check your email for a password reset link'
            });
        } catch (error) {
            toast({
                title: 'Oops An Error Occurred',
                description: 'Please try again, something went wrong.',
                variant: 'destructive'
            });
        } finally {
            setIsLoading(false);
        }
    };

    return {
        email,
        isLoading,
        onChange,
        onSubmit,
    };
}

import { ChangeEvent, FormEvent, FunctionComponent } from "react";
import { Input } from "@/components/forms";
import { Loader2 } from "lucide-react";
import { link } from "fs";


interface Config{
    labelText: string;
    labelId: string;
    type: string;
    value: string;
    link?: {
        linkText: string;
        linkURL: string;
    };
    required?: boolean;
}

interface FormProps {
    config: Config[];
    isLoading: boolean;
    btnText: string;
    onSubmit: (event: FormEvent<HTMLFormElement>)=>void;
    onChange: (event: ChangeEvent<HTMLInputElement>)=>void;
}
 
const Form: FunctionComponent<FormProps> = ({onSubmit, onChange, config, isLoading, btnText}) => {
    return ( 
        <form className="space-y-6" onSubmit={onSubmit}>
            {config.map((field)=>(
                <Input
                key={field.labelId}
                onChange={onChange}
                labelId={field.labelId}
                required={field.required}
                type={field.type}
                link={field.link}
                value={field.value}
                >
                    {field.labelText}
                </Input>
            ))}
            <div>
                <button
                    disabled={isLoading}
                    type="submit"
                    className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                    {btnText} {isLoading && <Loader2 className="w-5 h-5 items-center mx-4 animate-spin"/>} 
                </button>
            </div>
        </form>
    );
}
 
export default Form;
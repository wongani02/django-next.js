import Link from "next/link";
import { ChangeEvent, FormEvent, FunctionComponent } from "react";

interface InputProps {
    children: React.ReactNode;
    labelId: string;
    type: string;
    value: string;
    required?: boolean;
    link?: {
        linkText: string;
        linkURL: string;
    };
    onChange: (event: ChangeEvent<HTMLInputElement>)=>void;
}
 
const Input: FunctionComponent<InputProps> = ({children, link, labelId, type, onChange, value, required=false}) => {
    return ( 
        <div>
            <div className="flex flex-row justify-between">
                <label htmlFor="first_name" className="block text-sm font-medium leading-6 text-gray-900">
                    {children}
                </label>
                {
                    link && (
                        <div className="text-sm ">
                            <Link 
                            className="font-smeibold text-indigo-600 hover:text-indigo-500" 
                            href={link.linkURL}>
                                {link.linkText}
                            </Link>
                        </div>
                    )
                }
            </div>
            
            <div className="mt-2">
                <input
                id={labelId}
                name={labelId}
                type={type}
                onChange={onChange}
                value={value}
                required={required}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
            </div>
        </div>
    );
}
 
export default Input;
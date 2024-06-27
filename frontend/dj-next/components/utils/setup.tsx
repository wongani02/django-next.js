'use client'

import useVerify from "@/hooks/use-verify";
import { FunctionComponent } from "react";

interface SetupProps {
    
}
 
const Setup: FunctionComponent<SetupProps> = () => {

    useVerify();

    return ( 
        <div>

        </div>
    );
}
 
export default Setup;

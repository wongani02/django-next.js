'use client'

import { MakeStore } from "./store";
import { Provider } from "react-redux";
import React, { FunctionComponent } from "react";

interface AppProviderProps {
    children: React.ReactNode
}
 
const AppProvider: FunctionComponent<AppProviderProps> = ({children}) => {
    return <Provider store={MakeStore()}>{children}</Provider>
}
 
export default AppProvider; 
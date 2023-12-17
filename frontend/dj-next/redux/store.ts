import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import authReducer from "./features/authSlice";
import { apiSlice } from "./services/apiSlice";

export const MakeStore = () => {
    return configureStore({
        reducer: {
            [apiSlice.reducerPath]: apiSlice.reducer,
            auth: authReducer
        }, // You need to provide a valid reducer here
        middleware: getDefaultMiddleware => getDefaultMiddleware().concat(apiSlice.middleware),
        devTools: process.env.NODE_ENV !== 'production'
    });
};

export type AppStore = ReturnType<typeof MakeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
 
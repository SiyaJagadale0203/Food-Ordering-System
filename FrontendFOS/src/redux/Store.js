import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from "./features/Auth.slice";

const Store = configureStore({
    reducer: {
        auth: AuthReducer,
    },
});

export default Store;

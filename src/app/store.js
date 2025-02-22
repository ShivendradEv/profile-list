import {configureStore} from "@reduxjs/toolkit";
import profileReducer from "../features/ProfilesSlice";

export const store = configureStore({
    reducer: {
        profiles: profileReducer
    }
})
import { configureStore } from "@reduxjs/toolkit";
import CounterSlice from "../slice";

export const store = configureStore({
    reducer:{
        counter : CounterSlice,
        name : CounterSlice
    }
})
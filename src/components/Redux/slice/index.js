import { createSlice } from "@reduxjs/toolkit";

const CounterSlice = createSlice({
    name : 'Slicer',
    initialState :{
        value : 100
    },
    reducers:{
        increment : (state)=>{
            state.value += 10
        },
        decrement : (state)=>{
            if (state.value > 10) {
                state.value -= 10
            }else{
                state.value = 0
            }
        },

    }
    
})
export const {increment , decrement} = CounterSlice.actions
export default CounterSlice.reducer

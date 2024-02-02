import { createSlice } from "@reduxjs/toolkit";

const initialState={
    countries:[]
}

export const countrySlice={
    name:"country",
    initialState,
    reducers:{
        select:(state)=>{
            state.countries={...state.countries}
        }
    }
}
const countryReducer = countrySlice.reducer
export default countryReducer
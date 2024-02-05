import { createSlice } from "@reduxjs/toolkit";

const initialState={
    loginUser:{}
}

export const loginSlice= createSlice({
    name:"login",
    initialState,
    reducers:{
        addlogin:(state,action)=>{
            state.loginUser={...state,loginUser:action.payload}
        }
    }
})

export const {addlogin}=loginSlice.actions
const loginReducer = loginSlice.reducer
export default loginReducer
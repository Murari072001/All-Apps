import { createSlice } from "@reduxjs/toolkit";

const initialState={
    todos:[],
    newtodo:''
}

export const todoSlice=createSlice({
    name:'todo',
    initialState,
    reducers:{
        updatenewtodo:(state,action)=>{
            state.newtodo=action.payload
        },
        addtodo:(state)=>{
            state.todos.push(state.newtodo)
        }
    }
})

export const {updatenewtodo,addtodo}=todoSlice.actions;
const todoReducer=todoSlice.reducer
export default todoReducer
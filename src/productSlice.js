import { createSlice } from "@reduxjs/toolkit";

const initialState={
    todos:[],
    newtodo:{
        task:"",
        isDone:false
    },
    setindex:null,
    isupdate:false
}

export const todoSlice=createSlice({
    name:'todo',
    initialState,
    reducers:{
        updatenewtodo:(state,action)=>{
            state.newtodo.task=action.payload
        },
        addtodo:(state)=>{
            state.todos=[...state.todos,state.newtodo]
        },
        done:(state,action)=>{
            state.todos[action.payload].isDone=true
        },
        edit:(state,action)=>{
            state.setindex=action.payload
            state.isupdate=true
        },
        undo:(state,action)=>{
            state.todos[action.payload].isDone=false
        },
        deletetodo:(state,action)=>{
            state.todos.splice(action.payload)
        },
        update:(state,action)=>{
            state.todos.splice(state.setindex,1,state.newtodo)
            state.isupdate=false
        }
    }
})

export const {updatenewtodo,addtodo,done,edit,undo,deletetodo,update}=todoSlice.actions;
const todoReducer=todoSlice.reducer
export default todoReducer
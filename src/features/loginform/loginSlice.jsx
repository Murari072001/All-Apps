import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loginUser: {},
    isEdit: false,
    isLogin: false,
    allproducts: [],
    products: []
}

export const loginSlice = createSlice({
    name: "login",
    initialState,
    reducers: {
        addlogin: (state, action) => {
            state.loginUser = { ...action.payload }
            state.isLogin = true
            state.isEdit=false
        },
        editprofile: (state) => {
            state.isEdit = true
        },
        getallproducts: (state, action) => {
                    if (action.payload) {
                let temp = action.payload?.map((a) => {
                    if (state.isLogin && state.loginUser.cart.some(b => a.id === b.id)) {
                        return { ...a, inCart: true }
                    }
                    return { ...a, inCart: false }
                })
                state.allproducts = [...temp]
                state.products = [...temp]
            }
        },
        updatecart:(state,action)=>{
            state.loginUser.cart=[...action.payload]
        },
        addtocart:(state,action)=>{
            state.allproducts=[...action.payload]
            state.products=[...action.payload]
        },
        searchproducts:(state,action)=>{
            let temp=[...state.allproducts]
            temp=temp.filter((a)=>{
                return (a.title.toLowerCase()).includes(action.payload.toLowerCase())
            })
            state.products=[...temp]
        },
    }
})

export const { addlogin, editprofile, getallproducts, updatecart, addtocart, searchproducts} = loginSlice.actions
const loginReducer = loginSlice.reducer
export default loginReducer
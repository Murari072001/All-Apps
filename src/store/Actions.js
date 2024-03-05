import axios from "axios";

export function getAllProducts()
{
    return (dispatch)=>{
        axios.get("https://fakestoreapi.com/products").then((res)=>{
            console.log(res);
        })
    }
}
import { useFormik } from "formik";
import React from "react";
import * as Yup from 'yup'
import { useNavigate } from "react-router-dom";
import { useLazyGetUserByIdQuery } from "../../services/jsonApi";
import { addlogin } from "./loginSlice";

function LoginForm()
{
    var [loginuser]=useLazyGetUserByIdQuery()
    const l=React.useRef(null)
    const navi=useNavigate()
    const LoginFormik=useFormik(
        {
            initialValues:{
                username:'',
                password:''
            },
            validationSchema:Yup.object({
                username:Yup.string().required("*This Field is Required*").email('Please enter valid username'),
                password:Yup.string().required("*This Field is Required*")
            }),
            onSubmit:(values)=>{
                handleSubmit(values)
            }
        }

    )
    const handleSubmit=(values)=>{
        loginuser(values).then(({data})=>{if(data.length>0){
            addlogin(data)
            navi('/dashboard')
        }})
        l.current.reset()
    }

    return (
    <div className="login ms-auto me-auto mt-5 rounded-3 border border-3 border-dark p-2 m-2">
        <h2>Login</h2>
        {(LoginFormik.submitCount>0)&&<b className="text-danger">*Username or Password in incorrect*</b>}
        <form ref={l} className="" onSubmit={LoginFormik.handleSubmit}>
            {LoginFormik.touched.username&&<b className="text-danger">{LoginFormik.errors.username}</b>}
            <div className="form-floating m-2">
                <input type="email" name="username" id="username" placeholder="username" className="form-control" onChange={LoginFormik.handleChange} onBlur={LoginFormik.handleBlur} />
                <label htmlFor="username">Enter Your Username</label>
            </div>
            {LoginFormik.touched.password&&<b className="text-danger">{LoginFormik.errors.password}</b>}
            <div className="form-floating m-2">
                <input type="password" name="password" id="password" placeholder="password" className="form-control" onChange={LoginFormik.handleChange} onBlur={LoginFormik.handleBlur} />
                <label htmlFor="password">Enter Password</label>
            </div>
            <button type="submit" className="btn btn-primary m-2">Sign In</button>
        </form>
        <h6 className="m-2">New User? <button className="btn btn-success" onClick={()=>{navi('/register')}}>Register</button></h6>
    </div>
    )
}

export default LoginForm
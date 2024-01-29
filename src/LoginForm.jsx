import { useFormik } from "formik";
import { connect } from "react-redux";
import React from "react";
import * as Yup from 'yup'
import { checklogin } from "./store/loginActions";
import { useNavigate } from "react-router-dom";

function LoginForm(props)
{
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
        props.check(values,navi)
        l.current.reset()
    }
    console.log(LoginFormik);
    return (
    <div className="text-center border border-3 border-dark p-2 m-2">
        <h2>Login</h2>
        {(LoginFormik.submitCount>0)&&<b className="text-danger">*Username or Password in incorrect*</b>}
        <form ref={l} className="card w-50 ms-auto me-auto p-3" onSubmit={LoginFormik.handleSubmit}>
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
function mapStateToProps(state)
{
    return state.login
}
function mapDispatchToProps(dispatch)
{
    return {
        check:(values,navi)=>{dispatch(checklogin(values,navi))}
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(LoginForm)
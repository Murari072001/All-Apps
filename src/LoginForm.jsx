import { useFormik } from "formik";
import { connect } from "react-redux";
import React from "react";
import * as Yup from 'yup'

function LoginForm(props)
{
    const LoginFormik=useFormik(
        {
            initialValues:{
                username:'',
                password:''
            },
            validationSchema:Yup.object({
                username:Yup.string().required("*This Field is Required*"),
                password:Yup.string().required("*This Field is Required*")
            })
        }
    )
    return (
    <div className="text-center p-3">
        <h2>Login</h2>
        <form className="card w-50 ms-auto me-auto" onSubmit={LoginFormik.handleSubmit}>
            <div className="form-floating">
                <input type="email" name="username" id="username" placeholder="username" className="form-control" onChange={LoginFormik.handleChange} onBlur={LoginFormik.handleBlur} />
                <label htmlFor="username">Enter Your Username</label>
            </div>
            <div className="form-floating">
                <input type="password" name="password" id="password" placeholder="password" className="form-control" onChange={LoginFormik.handleChange} onBlur={LoginFormik.handleBlur} />
                <label htmlFor="password">Enter Your Username</label>
            </div>
            <button type="submit">Login</button>
        </form>
    </div>
    )
}
function mapStateToProps(state)
{
    return state.login
}
function mapDispatchToProps(dispatch)
{
    return 
}
export default connect(mapStateToProps,mapDispatchToProps)(LoginForm)
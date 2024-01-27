import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { connect } from "react-redux";
import { addnewuser } from "./store/userActions";

const UserForm = (props) => {
    const userFormDetails=React.useRef(null)
    const userFormik = useFormik(
        {
            initialValues: {
                firstname: '',
                lastname: '',
                dob: '',
                gender: '',
                email: '',
                newpassword: '',
                mobile: '',
            },
            validationSchema: Yup.object({
                firstname: Yup.string().required("*FirstName is Required*"),
                lastname: Yup.string().required("*LastName is Required*"),
                dob: Yup.string().required("*Date of Birth is Required*"),
                gender:Yup.string().required("*Gender is Required*"),
                email: Yup.string().required("*UserId is Required*").matches('@', { message: 'Please enter valid user Id' }),
                newpassword: Yup.string().required("Password is Required*").matches((/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/), { message: "Please Create a Strong Password" }),
                mobile: Yup.number().required("Mobile Number is Required*"),
            }),
            onSubmit: (values) => {
                handleSubmitBtn(values)
                
            }
        }
    )
    const handleSubmitBtn=(values)=>{
        props.addnew(values)        
        userFormDetails.current.reset()
        userFormik.handleReset()
    }
    console.log("userformik",userFormik.values);
    console.log("props",props)
    return (
        <div className="container border border-dark border-2 p-3">
            <h1 className="text-center">User Registration Form</h1>
            <form ref={userFormDetails} className="w-50 ms-auto me-auto text-center" onSubmit={userFormik.handleSubmit}>
                {userFormik.touched.firstname && <span style={{ color: 'red' }}>{userFormik.errors.firstname}</span>}
                <div className="form-floating m-2">
                    <input type="text" id="fn" name='firstname' placeholder="firstname:" className={userFormik.touched.firstname ? ((userFormik.errors.firstname) ? "form-control is-invalid" : "form-control is-valid") : "form-control"} onChange={userFormik.handleChange} onBlur={userFormik.handleBlur} />
                    <label htmlFor="fn">Firstname:</label>
                </div>
                {userFormik.touched.lastname && <span style={{ color: 'red' }}>{userFormik.errors.lastname}</span>}
                <div className="form-floating m-2">
                    <input type="text" id="ln" name='lastname' placeholder="lastname:" className={userFormik.touched.lastname ? ((userFormik.errors.lastname) ? "form-control is-invalid" : "form-control is-valid") : "form-control"} onChange={userFormik.handleChange} onBlur={userFormik.handleBlur} />
                    <label htmlFor="fn">Lastname:</label>
                </div>
                {userFormik.touched.dob && <span style={{ color: 'red' }}>{userFormik.errors.dob}</span>}
                <div className="form-floating m-2">
                    <input type="date" id="dob" name='dob' placeholder="dob:" className={userFormik.touched.dob ? ((userFormik.errors.dob) ? "form-control is-invalid" : "form-control is-valid") : "form-control"} onChange={userFormik.handleChange} onBlur={userFormik.handleBlur} />
                    <label htmlFor="dob">Date of Birth:</label>
                </div>
                {userFormik.touched.gender && <span style={{ color: 'red' }}>{userFormik.errors.gender}</span>}
                <div className="m-2">
                    <select className="form-select" name='gender' onChange={userFormik.handleChange} onBlur={userFormik.handleBlur}>
                        <option selected disabled>--Please select Gender--</option>
                        <option value="male" >Male</option>
                        <option value="female">Female</option>
                    </select>
                </div>
                {userFormik.touched.email && <span style={{ color: 'red' }}>{userFormik.errors.email}</span>}
                <div className="form-floating m-2">
                    <input type="email" id="email" name='email' placeholder="email:" className={userFormik.touched.email ? ((userFormik.errors.email) ? "form-control is-invalid" : "form-control is-valid") : "form-control"} onChange={userFormik.handleChange} onBlur={userFormik.handleBlur} />
                    <label htmlFor="email">Enter User Id:</label>
                </div>
                {userFormik.touched.newpassword && <span style={{ color: 'red' }}>{userFormik.errors.newpassword}</span>}
                <div className="form-floating m-2">
                    <input type="password" id="pswd" name='newpassword' placeholder="password:" className={userFormik.touched.newpassword ? ((userFormik.errors.newpassword) ? "form-control is-invalid" : "form-control is-valid") : "form-control"} onChange={userFormik.handleChange} onBlur={userFormik.handleBlur} />
                    <label htmlFor="pswd">Enter New Password:</label>
                </div>
                {userFormik.touched.mobile && <span style={{ color: 'red' }}>{userFormik.errors.mobile}</span>}
                <div className="form-floating m-2">
                    <input type="number" id="mobile" name='mobile' placeholder="mobile:" className={userFormik.touched.mobile ? ((userFormik.errors.mobile) ? "form-control is-invalid" : "form-control is-valid") : "form-control"} onChange={userFormik.handleChange} onBlur={userFormik.handleBlur} />
                    <label htmlFor="mobile">Mobile Number:</label>
                </div>
                <button type="submit" className="btn btn-primary w-25 ">Submit</button>
            </form>
        </div>
    )
}
function mapStateToProps(state)
{
    return state.user
}
function mapDispatchToProps(dispatch)
{
    return{
        addnew:(values)=>{dispatch(addnewuser(values))}
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(UserForm)
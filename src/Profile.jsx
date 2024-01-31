import { connect } from "react-redux";
import React, { useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from 'yup'
import { actedit, actupdate } from "./store/actions/loginActions";

function Profile(props)
{
    const profile=props.login
    const profileFormik=useFormik(
        {
            initialValues: props.login,
            validationSchema: Yup.object({
                firstname: Yup.string().required("*FirstName is Required*"),
                lastname: Yup.string().required("*LastName is Required*"),
                dob: Yup.string().required("*Date of Birth is Required*"),
                gender: Yup.string().required("*Gender is Required*"),
                email: Yup.string().required("*UserId is Required*").matches('@', { message: 'Please enter valid user Id' }),
                password: Yup.string().required("Password is Required*").matches((/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/), { message: "Please Create a Strong Password" }),
                mobile: Yup.number().required("Mobile Number is Required*"),
            }),
            onSubmit: (values) => {
                props.update(values,profile)
            }
        }
    )
    return (
        <div>
            <h1>Profile</h1>
            <button onClick={()=>{props.edit()}}>Edit</button>
            <form className="w-50 ms-auto me-auto text-center" onSubmit={profileFormik.handleSubmit}>
                {profileFormik.touched.firstname && <span style={{ color: 'red' }}>{profileFormik.errors.firstname}</span>}
                <div className="form-floating m-2">
                    <input disabled={!props.isedit} type="text" id="fn" name='firstname' value={profileFormik.values.firstname} placeholder="firstname:" className={profileFormik.touched.firstname ? ((profileFormik.errors.firstname) ? "form-control is-invalid" : "form-control is-valid") : "form-control"} onChange={profileFormik.handleChange} onBlur={profileFormik.handleBlur} />
                    <label htmlFor="fn">Firstname:</label>
                </div>
                {profileFormik.touched.lastname && <span style={{ color: 'red' }}>{profileFormik.errors.lastname}</span>}
                <div className="form-floating m-2">
                    <input disabled={!props.isedit} type="text" id="ln" name='lastname' value={profileFormik.values.lastname} placeholder="lastname:" className={profileFormik.touched.lastname ? ((profileFormik.errors.lastname) ? "form-control is-invalid" : "form-control is-valid") : "form-control"} onChange={profileFormik.handleChange} onBlur={profileFormik.handleBlur} />
                    <label htmlFor="fn">Lastname:</label>
                </div>
                {profileFormik.touched.dob && <span style={{ color: 'red' }}>{profileFormik.errors.dob}</span>}
                <div className="form-floating m-2">
                    <input disabled={!props.isedit} type="date" id="dob" name='dob' value={profileFormik.values.dob} placeholder="dob:" className={profileFormik.touched.dob ? ((profileFormik.errors.dob) ? "form-control is-invalid" : "form-control is-valid") : "form-control"} onChange={profileFormik.handleChange} onBlur={profileFormik.handleBlur} />
                    <label htmlFor="dob">Date of Birth:</label>
                </div>
                {profileFormik.touched.gender && <span style={{ color: 'red' }}>{profileFormik.errors.gender}</span>}
                <div className="m-2">
                    <select disabled={!props.isedit} className="form-select" name='gender' onChange={profileFormik.handleChange} onBlur={profileFormik.handleBlur}>
                        <option selected disabled>--Please select Gender--</option>
                        <option selected={profileFormik.values.gender==='male'} defaultValue="male" >Male</option>
                        <option selected={profileFormik.values.gender==='female'} defaultValue="female">Female</option>
                    </select>
                </div>
                {profileFormik.touched.email && <span style={{ color: 'red' }}>{profileFormik.errors.email}</span>}
                
                <div className="form-floating m-2">
                    <input disabled type="email" id="email" name='email' value={profileFormik.values.email} placeholder="email:" className={profileFormik.touched.email ? ((profileFormik.errors.email) ? "form-control is-invalid" : "form-control is-valid") : "form-control"} onChange={profileFormik.handleChange} onBlur={profileFormik.handleBlur} />
                    <label htmlFor="email">Enter User Id:</label>
                </div>
                {profileFormik.touched.password && <span style={{ color: 'red' }}>{profileFormik.errors.password}</span>}
                <div className="form-floating m-2">
                    <input disabled={!props.isedit} type="password" id="pswd" name='password' value={profileFormik.values.password} placeholder="password:" className={profileFormik.touched.password ? ((profileFormik.errors.password) ? "form-control is-invalid" : "form-control is-valid") : "form-control"} onChange={profileFormik.handleChange} onBlur={profileFormik.handleBlur} />
                    <label htmlFor="pswd">Enter New Password:</label>
                </div>
                {profileFormik.touched.mobile && <span style={{ color: 'red' }}>{profileFormik.errors.mobile}</span>}
                <div className="form-floating m-2">
                    <input disabled={!props.isedit} type="number" id="mobile" name='mobile' value={profileFormik.values.mobile} placeholder="mobile:" className={profileFormik.touched.mobile ? ((profileFormik.errors.mobile) ? "form-control is-invalid" : "form-control is-valid") : "form-control"} onChange={profileFormik.handleChange} onBlur={profileFormik.handleBlur} />
                    <label htmlFor="mobile">Mobile Number:</label>
                </div>
                {props.isedit&&<button type="submit" className="btn btn-primary w-25 ">Update Details</button>}

            </form>
        </div>
    )
}
const mapStateToProps=(state)=>{
    return state.login
}
function mapDispatchToProps(dispatch){
    return {
        edit:()=>{dispatch(actedit())},
        update:(values,value)=>{dispatch(actupdate(values,value))}
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Profile)
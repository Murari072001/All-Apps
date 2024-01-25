import { useFormik } from "formik";
import React from "react";
import { useNavigate } from "react-router";
import * as Yup from 'yup'

function Studentform() {
    var [student, setStudent] = React.useState([])
    const Studentformik = useFormik(
        {
            initialValues: {
                firstname: '',
                lastname: '',
                email: '',
                age: ''
            },
            validationSchema: Yup.object({
                firstname: Yup.string().required('*This field is Required*'),
                lastname: Yup.string().required('* This field is Required*'),
                email: Yup.string().required('* This field is Required*'),
                age: Yup.string().required('* This field is Required*')
            }),
            onSubmit: (values) => {
                setStudent([...student, values])
                navi(`/child/${JSON.stringify(values)}`)
            }
        }
    )
    const navi=useNavigate()
    console.log(student);
    return (
        <>
            <h1>Student form</h1>
            <div className="position-relative" style={{ height: "400px" }}>
                <form onSubmit={Studentformik.handleSubmit} className="border border-3 border-dark p-3 rounded-3 w-25 position-absolute top-50 start-50 translate-middle">
                    <div className="form-floating mt-2">
                        <input type="text" name="firstname" id="firstname" className="form-control" placeholder="Firstname" onChange={Studentformik.handleChange} onBlur={Studentformik.handleBlur} />
                        <label for="firstname">Enter FirstName</label>
                    </div>
                    {(Studentformik.touched.firstname) && <b className="text-danger">{Studentformik.errors.firstname}</b>}
                    <div className="form-floating mt-2">
                        <input type="text" name="lastname" id="lastname" className="form-control" placeholder="lastname" onChange={Studentformik.handleChange} onBlur={Studentformik.handleBlur} />
                        <label for="lastname">Enter LastName</label>
                    </div>
                    {(Studentformik.touched.lastname) && <b className="text-danger">{Studentformik.errors.lastname}</b>}
                    <div className="form-floating mt-2">
                        <input type="email" name="email" id="email" className="form-control" placeholder="email" onChange={Studentformik.handleChange} onBlur={Studentformik.handleBlur} />
                        <label for="email">Enter Email</label>
                    </div>
                    {(Studentformik.touched.email) && <b className="text-danger">{Studentformik.errors.email}</b>}
                    <div className="form-floating mt-2">
                        <input type="text" name="age" id="age" className="form-control" placeholder="age" onChange={Studentformik.handleChange} onBlur={Studentformik.handleBlur} />
                        <label for="age">Age</label>
                    </div>
                    {(Studentformik.touched.age) && <b className="text-danger">{Studentformik.errors.age}</b>}
                    <button type="submit" className="btn bg-success mt-2">Save Details</button>
                </form>
            </div>
            
        </>
    )
}

export default Studentform
import { Field, Form, Formik } from "formik";
import React from "react";
import { useGetEmployeeByIdQuery, useUpdateEmployeeMutation } from "../../services/employeeApi";
import { useNavigate, useParams } from "react-router-dom";

function UpdateEmployee() {
    var cid = useParams().cid
    var { data, isLoading } = useGetEmployeeByIdQuery(cid)
    var [update, x] = useUpdateEmployeeMutation()
    const navi=useNavigate()
    return (
        
            data && <div>
                <Formik
                    initialValues={data}
                    onSubmit={(values) => {
                        console.log(data.id,values);
                        update({cid,values})
                        navi('/employees')
                    }}>
                    {props=>(<Form>
                        {console.log("values", props)}
                        <Field name="name" type='text' value={props.values.name}></Field><br />
                        <Field name="lastname" type='text' value={props.values.lastname}></Field><br />
                        <Field name="dob" type='text' value={props.values.dob}></Field><br />
                        <button type="submit">update</button>
                    </Form>)}
                </Formik>
        </div>
    
    )
}

export default UpdateEmployee
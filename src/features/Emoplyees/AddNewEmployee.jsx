import { Field, Form,Formik } from "formik";
import React from "react";
import { useAddNewEmployeeMutation } from "../../services/employeeApi";

function AddNewEmployee()
{
    var [add,x]=useAddNewEmployeeMutation()
    return (
        <div>
            <Formik 
            initialValues={{
                name:"",
                lastname:"",
                dob:""
            }}
            onSubmit={(values,{resetForm})=>{
                add(values)
                resetForm({values:""})
                }}>
                <Form>
                    <Field name="name" type='text'></Field><br />
                    <Field name="lastname" type='text'></Field><br />
                    <Field name="dob" type='text'></Field><br />
                    <button type="submit">Add</button>
                </Form>
            </Formik>
        </div>
    )
}

export default AddNewEmployee
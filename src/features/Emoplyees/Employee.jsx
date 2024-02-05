import React, { useEffect } from "react";
import { useDeleteEmployeeMutation, useDeleteEmployeeQuery, useGetEmployeeQuery } from "../../services/employeeApi";
import { useNavigate } from "react-router-dom";

function Employee()
{
    const navi=useNavigate()
    var {isLoading,data}=useGetEmployeeQuery()
    var [deletefn]=useDeleteEmployeeMutation()
    console.log(isLoading,data);
    return (
        <div>
            <button onClick={()=>{navi('addnewemp')}}>Add new employee</button>
            {
                isLoading&& <h2>Loading........</h2>
            }
            {
                data&&<div className="border border-3 border-success m-2 p-2 d-flex flex-wrap justify-content-around">
                    {
                        data.map((emp)=>{
                            return (
                                <div className="border border-3 border-danger w-25 m-2 p-2">
                                    <h4>{emp.name}</h4>
                                    <h4>{emp.lastname}</h4>
                                    <p>{emp.dob}</p>
                                    <button onClick={()=>{deletefn(emp.id)}}>Delete</button>
                                    <button onClick={()=>{navi(`editemp/${emp.id}`)}}>Edit</button>
                                </div>
                            )
                        })
                    }
                </div>
            }
        </div>
    )
}

export default Employee
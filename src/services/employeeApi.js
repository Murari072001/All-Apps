import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const employeeApi = createApi({
    reducerPath: 'employeeApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:4000/employees' }),
    endpoints: (builder) => ({
        getEmployee: builder.query({
            query: () => ``,
        }),
        addNewEmployee: builder.mutation({
            query: (values) => ({
                url: ``,
                method: 'POST',
                body: values
            }),
        }),
        getEmployeeById: builder.query({
            query: (id) => `${id}`
        }),
        updateEmployee: builder.mutation({
            query: (props) => {
                console.log("api",props.values)
                return ({
                url: `${props.cid}`,
                method: 'PATCH',
                body: props.values
            })},
        }),
        deleteEmployee:builder.mutation({
            query:(cid)=>({
                url: `${cid}`,
                method: 'DELETE'
            }),
        })
    })
})

export const { useGetEmployeeQuery, useAddNewEmployeeMutation, useGetEmployeeByIdQuery ,useUpdateEmployeeMutation ,useDeleteEmployeeMutation} = employeeApi
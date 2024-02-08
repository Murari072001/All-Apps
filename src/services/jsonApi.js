import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const jsonApi = createApi({
    reducerPath: 'jsonApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:4000/users' }),
    endpoints: (builder) => ({
      getUsers: builder.query({
        query: () => ``,
      }),
      getUserById: builder.query({
        query:(id)=>{
          return ({
            url:`/?email=${id.username}&password=${id.password}`
          })}
      }),
      addNewUser: builder.mutation({
        query:(newuser)=>({
            url:``,
            method:"POST",
            body:newuser
        })
      }),
      updateCart: builder.mutation({
        query:(update)=>({
            url:`/${update.id}`,
            method:"PUT",
            body:update
        })
      }),
      deleteUser: builder.mutation({
        query:(value)=>({
            url:`/${value}`,
            method:"DELETE"
        })
      })
    }),
  })

  export const {useLazyGetUserByIdQuery,useGetUsersQuery,useAddNewUserMutation,useUpdateCartMutation,useDeleteUserMutation} = jsonApi   
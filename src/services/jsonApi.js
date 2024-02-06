import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const jsonApi = createApi({
  reducerPath: 'jsonApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:4000/' }),
  endpoints: (builder) => ({
    getAllPlayers: builder.query({
      query: () => `Players`,
    }),
    getSelectedPlayers: builder.query({
      query: () => `Selected_Players`,
    }),
    AddSelectedPlayers: builder.mutation({
        query:(player)=>({
            url:`/Selected_Players`,
            method:"POST",
            body:{...player,isSelected:true}
        })
    }),
    DelSelectedPlayers: builder.mutation({
        query:(player)=>({
            url:`/Selected_Players/${player.id}`,
            method:"DELETE",
        })
    }),
    updateSelected:builder.mutation({
        query:(player)=>({
            url:`Players/${player.id}`,
            method:"PUT",
            body:{...player,isSelected:!player.isSelected}
        })
    })
  }),
})

export const { useLazyGetAllPlayersQuery ,useGetSelectedPlayersQuery,useDelSelectedPlayersMutation,useLazyGetSelectedPlayersQuery,useAddSelectedPlayersMutation,useUpdateSelectedMutation} = jsonApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const productsApi = createApi({
    reducerPath: 'productsApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://fakestoreapi.com/products' }),
    endpoints: (builder) => ({
      getProducts: builder.query({
        query: () => `/`,
      }),
      getProductsById: builder.query({
        query:(id)=>`/${id}`
      })
    }),
  })

  export const {useGetProductsByIdQuery,useGetProductsQuery} = productsApi
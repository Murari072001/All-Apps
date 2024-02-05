import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const countriesApi = createApi({
    reducerPath: 'countriesApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://restcountries.com/v3.1' }),
    endpoints: (builder) => ({
      getCountries: builder.query({
        query: () => `all`,
      }),
      getCountryById: builder.query({
        query:(id)=>`alpha?codes=${id}`
      })
    }),
  })

  export const {useGetCountriesQuery,useGetCountryByIdQuery} = countriesApi
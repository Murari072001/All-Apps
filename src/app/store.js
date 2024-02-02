import { configureStore } from '@reduxjs/toolkit'
import { countriesApi } from '../services/countriesApi'
import countryReducer from '../features/Countries/countrySlice'
import { setupListeners } from '@reduxjs/toolkit/query'

export const store = configureStore({
  reducer: {
    [countriesApi.reducerPath]:countriesApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(countriesApi.middleware),

})

setupListeners(store.dispatch)
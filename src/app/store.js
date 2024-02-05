import { configureStore } from '@reduxjs/toolkit'
import { countriesApi } from '../services/countriesApi'
import { setupListeners } from '@reduxjs/toolkit/query'
import { employeeApi } from '../services/employeeApi'

export const store = configureStore({
  reducer: {
    [employeeApi.reducerPath]:employeeApi.reducer,
    [countriesApi.reducerPath]:countriesApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(countriesApi.middleware,employeeApi.middleware),

})

setupListeners(store.dispatch)
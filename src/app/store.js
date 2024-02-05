import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { productsApi } from '../services/productsApi'
import { jsonApi } from '../services/jsonApi'
import loginReducer from '../features/loginform/loginSlice'

export const store = configureStore({
  reducer: {
    login:loginReducer,
    [productsApi.reducerPath]:productsApi.reducer,
    [jsonApi.reducerPath]:jsonApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(productsApi.middleware,jsonApi.middleware),

})

setupListeners(store.dispatch)
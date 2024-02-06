import { configureStore } from '@reduxjs/toolkit'
import { jsonApi } from '../services/jsonApi'
import { setupListeners } from '@reduxjs/toolkit/query'
export const store = configureStore({
  reducer: 
    {
      [jsonApi.reducerPath]: jsonApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(jsonApi.middleware),
})
setupListeners(store.dispatch)
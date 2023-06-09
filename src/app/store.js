import { configureStore } from '@reduxjs/toolkit'
import { persistReducer, persistStore } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { apiSlice } from './api/apiSlice'
import { setupListeners } from '@reduxjs/toolkit/query'
import authReducer from '../pages/admin/auth/api/authSlice'
import propertiesReducer from '../pages/admin/dashboard/api/propertiesSlice'

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
  // whitelist: ['auth'], // only persist the auth state
}
const persistedReducer = persistReducer(persistConfig, authReducer)

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    // auth: authReducer,
    auth: persistedReducer,
    properties: propertiesReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(apiSlice.middleware),
  // devTools: process.env.NODE_ENV !== 'production',
})

setupListeners(store.dispatch)
export const persistor = persistStore(store)

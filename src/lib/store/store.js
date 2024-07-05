import { configureStore } from '@reduxjs/toolkit'
import searchSlice from './features/searchSlice/searchSlice'
import productsSlice from './features/productsSlice/productsSlice'
import filteredSlice from './features/filteredSlice/filteredSlice'
import orderSlice from './features/orderSlice/orderSlice'

export const store = configureStore({
  reducer: {
    search: searchSlice,
    products: productsSlice,
    filtered: filteredSlice,
    order: orderSlice,
  },
})
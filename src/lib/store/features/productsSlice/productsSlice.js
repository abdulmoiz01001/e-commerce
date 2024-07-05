import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  products: [],
}

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    addProducts: (state, action) => {
      state.products.push(action.payload)
    },
    clearProducts: (state) => {
      state.products = []
    },
  },
})

// Action creators are generated for each case reducer function
export const { addProducts, clearProducts } = productsSlice.actions

export default productsSlice.reducer
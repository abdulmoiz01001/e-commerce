import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    orderID: 0,
}

export const orderSlice = createSlice({
  name: 'orderID',
  initialState,
  reducers: {
    addOrderID: (state, action) => {
      state.orderID = action.payload
    },
    clearOrderID: (state) => {
      state.orderID = 0;
    },
  },
})

export const { addOrderID, clearOrderID } = orderSlice.actions

export default orderSlice.reducer
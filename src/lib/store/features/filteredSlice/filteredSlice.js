import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  filtered: [],
}

export const filteredSlice = createSlice({
  name: 'filtered',
  initialState,
  reducers: {
    addFiltered: (state, action) => {
      state.filtered = action.payload
    },
    clearFiltered: (state) => {
      state.filtered = []
    },
  },
})

export const { addFiltered, clearFiltered } = filteredSlice.actions

export default filteredSlice.reducer
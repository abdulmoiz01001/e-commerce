import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  search: '',
}

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    addSearch: (state, action) => {
      state.search = action.payload
    },
    clearSearch: (state) => {
      state.search = ''
    },
  },
})

export const { addSearch, clearSearch } = searchSlice.actions

export default searchSlice.reducer
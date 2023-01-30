import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  uuid: 0
}

export const configSlice = createSlice({
  name: 'config',
  initialState,
  reducers: {
    increment: (state) => {
      state.uuid += 1
    },
    decrement: (state) => {
      state.uuid -= 1
    },
  },
})

export const { increment, decrement } = configSlice.actions

export default configSlice.reducer
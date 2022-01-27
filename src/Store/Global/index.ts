import { createSlice } from '@reduxjs/toolkit'

interface GlobalState {
  user: any // temp
}

const initialState: GlobalState = {
  user: null,
}

export const GlobalSlice = createSlice({
  name: 'global',
  initialState,
  reducers: {
    loginUser: (state, action) => {
      state.user = action.payload
    },
    logoutUser: (state) => {
      state.user = null
    },
  },
})

// Action creators are generated for each case reducer function
export const { loginUser, logoutUser } = GlobalSlice.actions

export default GlobalSlice.reducer

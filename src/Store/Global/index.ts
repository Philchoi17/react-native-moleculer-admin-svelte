import { createSlice } from '@reduxjs/toolkit'

import { userType } from '@/Types'

interface GlobalState {
  user: userType | null // temp
}

const initialState: GlobalState = {
  user: null,
}

export const GlobalSlice = createSlice({
  name: 'global',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload
    },
    logoutUser: (state) => {
      state.user = null
    },
  },
})

// Action creators are generated for each case reducer function
export const { setUser, logoutUser } = GlobalSlice.actions

export default GlobalSlice.reducer

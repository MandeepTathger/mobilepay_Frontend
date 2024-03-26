import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  userInfo: null,
  role: null
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.userInfo = action.payload
    },
    cleartUser: (state) => {
      state.userInfo = null
    }
  },
})

export const {setUser, cleartUser} = userSlice.actions

export default userSlice.reducer
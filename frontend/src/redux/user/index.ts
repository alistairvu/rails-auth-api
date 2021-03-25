import { createSlice } from "@reduxjs/toolkit"

interface UserInterface {
  id: number
  email: string
}

const initialState = {
  loggedInStatus: false,
  user: {} as UserInterface,
}

const userSlice = createSlice({
  name: "user",
  initialState,

  reducers: {
    loginUser: (_, action) => ({
      loggedInStatus: true,
      user: action.payload,
    }),

    logoutUser: () => initialState,
  },
})

export const { loginUser, logoutUser } = userSlice.actions
export default userSlice.reducer

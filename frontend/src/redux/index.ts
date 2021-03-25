import { configureStore } from "@reduxjs/toolkit"
import userReducer from "./user"

const store = configureStore({
  reducer: {
    user: userReducer,
  },
})

export type rootState = ReturnType<typeof store.getState>
export default store

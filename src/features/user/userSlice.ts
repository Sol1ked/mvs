import { createSlice } from "@reduxjs/toolkit"
import { userApi } from "../../app/services/userApi"
import { RootState } from "../../app/store"
import { User } from "../../app/types"

interface InitialState {
  isAuthenticated: boolean
  current: User | null
}

const initialState: InitialState = {
  isAuthenticated: false,
  current: null,
}

const slice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logout: () => initialState,
    resetUser: state => {
      state.current = null
    },
  },
  extraReducers(builder) {
    builder
      .addMatcher(userApi.endpoints.login.matchFulfilled, (state, action) => {
        state.isAuthenticated = true
      })
      .addMatcher(
        userApi.endpoints.currentUser.matchFulfilled,
        (state, action) => {
          state.isAuthenticated = true
          state.current = action.payload
        },
      )
  },
})

export const { logout, resetUser } = slice.actions
export default slice.reducer

export const selectIsAuthenticated = (state: RootState) =>
  state.user.isAuthenticated

export const selectCurrent = (state: RootState) => state.user.current

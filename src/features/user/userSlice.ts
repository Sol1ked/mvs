import { createSlice } from "@reduxjs/toolkit"
import { RootState } from "../../../../social/social-front/src/app/store"
import { userApi } from "../../app/services/userApi"
import { User } from "../../app/types"

interface InitialState {
  user: User | null
  isAuthenticated: boolean
  current: User | null
}

const initialState: InitialState = {
  user: null,
  isAuthenticated: false,
  current: null,
}

const slice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logout: () => initialState,
    resetUser: state => {
      state.user = null
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
export const selectUser = (state: RootState) => state.user.user
export const selectIsAuthenticated = (state: RootState) =>
  state.user.isAuthenticated
export default slice.reducer

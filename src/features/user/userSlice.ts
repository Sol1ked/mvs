import { createSlice } from "@reduxjs/toolkit"
import { userApi } from "../../app/services/userApi"
import { RootState } from "../../../../social/social-front/src/app/store"

interface InitialState {
  user: any | null
  isAuthenticated: boolean
}

const initialState: InitialState = {
  user: null,
  isAuthenticated: false,
}

const slice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logout: () => initialState,
    resetUser: state => {
      state.user = null
    },
    setUser: (state, action) => {
      state.user = action.payload
    },
  },
  extraReducers(builder) {
    builder
      .addMatcher(
      userApi.endpoints.login.matchFulfilled,
      (state, action) => {
        state.isAuthenticated = true
        state.user = action.payload
      },
    )
    .addMatcher(
      userApi.endpoints.currentUser.matchFulfilled,
      (state, action) => {
        state.isAuthenticated = true
        state.user = action.payload
      },
    )
  },
})

export const { logout, resetUser, setUser } = slice.actions
export const selectUser = (state: RootState) => state.user.user
export default slice.reducer

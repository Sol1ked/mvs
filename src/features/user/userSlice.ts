import { createSlice } from "@reduxjs/toolkit"
import { userApi } from "../../app/services/userApi"
import { RootState } from "../../../../social/social-front/src/app/store"

interface InitialState {
  user: any | null
  isAuthenticated: boolean
  users: any[] | null
  current: any | null
}

const initialState: InitialState = {
  user: null,
  isAuthenticated: false,
  users: null,
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
    builder.addMatcher(
      userApi.endpoints.login.matchFulfilled,
      (state, action) => {
        console.log(action.payload)

        state.isAuthenticated = true
        state.user = action.payload
      },
    )
  },
})

export const { logout, resetUser } = slice.actions
export const selectUser = (state: RootState) => state.user.user
export default slice.reducer

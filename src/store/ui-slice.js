import { createSlice } from "@reduxjs/toolkit"

const initialUiState = {
  cartIsVisible: false,
  notification: null,
}
const uiSlice = createSlice({
  name: "toggleCart",
  initialState: initialUiState,
  reducers: {
    toggleCart(state) {
      state.cartIsVisible = !state.cartIsVisible
    },
    showNotification(state, action) {
      state.notification = {
        status: action.payload.status,
        message: action.payload.message,
        title: action.payload.title,
      }
    },
  },
})
export const uiReducer = uiSlice.reducer
export const uIActions = uiSlice.actions
export default uiSlice

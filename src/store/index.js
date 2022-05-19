import { configureStore } from "@reduxjs/toolkit"
import { uiReducer } from "./ui-slice"
import { cartReducer } from "./cart-slice"
const store = configureStore({
  reducer: {
    uiCartToggle: uiReducer,
    cart: cartReducer,
  },
})

export default store

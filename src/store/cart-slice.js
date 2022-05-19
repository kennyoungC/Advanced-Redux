import { createSlice } from "@reduxjs/toolkit"

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalQuantity: 0,
  },
  reducers: {
    addItemToCart(state, action) {
      const newItem = action.payload
      const existingItem = state.items.find(
        (items) => items.itemId === newItem.id
      )
      state.totalQuantity++
      if (!existingItem) {
        state.items.push({
          name: newItem.title,
          itemId: newItem.id,
          quantity: 1,
          totalPrice: newItem.price,
          price: newItem.price,
        })
      } else {
        existingItem.quantity++
        existingItem.totalPrice += newItem.price
      }
    },
    removeItemFromCart(state, action) {
      const id = action.payload
      const existingItem = state.items.find((item) => item.itemId === id)
      state.totalQuantity--
      if (existingItem.quantity === 1) {
        state.items = state.items.filter((item) => item.itemId !== id)
      } else {
        existingItem.quantity--
        existingItem.totalPrice = existingItem.totalPrice - existingItem.price
      }
    },
  },
})
console.log("food")
export const cartActions = cartSlice.actions
export const cartReducer = cartSlice.reducer
export default cartSlice

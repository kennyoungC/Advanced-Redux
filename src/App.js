import Cart from "./components/Cart/Cart"
import Layout from "./components/Layout/Layout"
import Products from "./components/Shop/Products"
import { useSelector, useDispatch } from "react-redux"
import { useEffect } from "react"
import { uIActions } from "./store/ui-slice"
import Notification from "./components/UI/Notification.js"

let initial = true

function App() {
  const dispatch = useDispatch()
  const cart = useSelector((state) => state.cart)
  const notification = useSelector((state) => state.uiCartToggle.notification)
  useEffect(() => {
    const sendCartData = async () => {
      dispatch(
        uIActions.showNotification({
          status: "sending",
          title: "Pending",
          message: "sending data...",
        })
      )
      const response = await fetch(
        "https://react-http-376d5-default-rtdb.europe-west1.firebasedatabase.app/cart.json",
        {
          method: "PUT",
          body: JSON.stringify(cart),
        }
      )
      if (!response.ok) {
        throw new Error("Sending Cart Data failed")
      }
      dispatch(
        uIActions.showNotification({
          status: "success",
          title: "Success!",
          message: "sent cart data successfully",
        })
      )
    }
    if (initial) {
      initial = false
      return
    }
    sendCartData().catch((error) => {
      dispatch(
        uIActions.showNotification({
          status: "error",
          title: "Error!",
          message: error.message,
        })
      )
    })
  }, [cart, dispatch])
  const showCart = useSelector((state) => state.uiCartToggle.cartIsVisible)
  return (
    <>
      {notification && (
        <Notification
          title={notification.title}
          message={notification.message}
          status={notification.status}
        />
      )}
      <Layout>
        {showCart && <Cart />}
        <Products />
      </Layout>
    </>
  )
}

export default App

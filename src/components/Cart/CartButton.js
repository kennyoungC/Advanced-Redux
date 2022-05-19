import classes from "./CartButton.module.css"
import { uIActions } from "../../store/ui-slice"
import { useDispatch, useSelector } from "react-redux"

const CartButton = (props) => {
  const cartTotalQuantity = useSelector((state) => state.cart.totalQuantity)
  const dispatch = useDispatch()

  const toggleCartHandler = () => {
    dispatch(uIActions.toggleCart())
  }
  return (
    <button className={classes.button} onClick={toggleCartHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartTotalQuantity}</span>
    </button>
  )
}

export default CartButton

import classes from "./CartItem.module.css"
import { useDispatch } from "react-redux"
import { cartActions } from "../../store/cart-slice"
const CartItem = (props) => {
  const dispatch = useDispatch()
  const { name, quantity, totalPrice, price, itemId } = props.item

  const removeItemFromCartHandler = () => {
    dispatch(cartActions.removeItemFromCart(itemId))
  }
  const addToCartHandler = () => {
    dispatch(
      cartActions.addItemToCart({
        title: name,
        id: itemId,
        price,
      })
    )
  }

  return (
    <li className={classes.item}>
      <header>
        <h3>{name}</h3>
        <div className={classes.price}>
          ${totalPrice.toFixed(2)}{" "}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span> {quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={removeItemFromCartHandler}>-</button>
          <button onClick={addToCartHandler}>+</button>
        </div>
      </div>
    </li>
  )
}

export default CartItem

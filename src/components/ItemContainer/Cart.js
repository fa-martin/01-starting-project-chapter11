import { useContext } from "react";
import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  const onAddHandler = (item) => {
    cartCtx.addItem({...item, amount: 1});
  };
  const onRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((e) => (
        <CartItem
          key={e.id}
          price={e.price}
          name={e.name}
          amount={e.amount}
          onRemove={onRemoveHandler.bind(null,e.id)}
          onAdd={onAddHandler.bind(null,e )}
        />
      ))}
    </ul>
  );

  return (
    <Modal onShowCart={props.onShowCart}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onShowCart}>
          Close
        </button>
        {hasItems && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;

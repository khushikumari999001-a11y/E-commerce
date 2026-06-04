import React from "react";
import "./Cart.css";
import Cartcard from "../../components/cartcard/Cartcard";
import { useSelector } from "react-redux";
// import { FaShoppingCart } from "react-icons/fa";
import {clearCart} from "../../redux/cartSlice"

import { useDispatch } from "react-redux";

const Cart = () => {
  const dispatch = useDispatch();
  // let [checkEmpty, setCheckEmpty] = useState("true");
const placeOrder = () => {
  const confirmOrder = window.confirm(
    "Are you sure you want to place this order?"
  );

  if (confirmOrder) {
    dispatch(clearCart());
    alert("🎉 Order placed successfully!");
  }
};

  let items = useSelector((state) => state);
  return (
    <div className="cart">
      {items.cart.length <= 0 ? (
        "Empty Cart . . . ."
      ) : (
        <div className="cart_section">
          {items.cart.map((item) => (
            <Cartcard
              key={item.id}
              name={item.name}
              price={item.price}
              id={item.id}
              image={item.image}
            />
          ))}
        </div>
      )}

      <div className="total_price">
        {items.cart.length <= 0 ? "" : <h3>
          Total Price : Rs{" "}
          {items.cart.reduce((total, item) => total + item.price, 0)}/-
        </h3>}
      </div>

      {items.cart.length <= 0 ? "" : <div className="place_order">
            <button onClick={placeOrder}>Place Order</button>
          </div>
      }
          

    </div>
  );
};

export default Cart;

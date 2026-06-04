import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { TiShoppingCart } from "react-icons/ti";
import { FaShopify } from "react-icons/fa6";
import "./Nav.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const Nav = ({input , setInput}) => {
  // let [search, setSearch] = useState("")
  // const [input, setInput] = useState("");
  let dispatch = useDispatch()
  let items = useSelector(state => state)
  console.log(items)
  return (
    <div>
      <div className="nav">
        <Link to="/">
        <div className="logo">
          <span className="logo_name">V-Shop</span>
          <FaShopify className="logo_icon" />
        </div>
</Link>
        <form className="search_box">
          <input type="text" placeholder="Search Item . . . . ." value={input} onChange={(e)=>setInput(e.target.value)}  />
          <FaSearch className="search_icon" />
        </form>

        <div className="nav_item_cart">
          <div className="nav_item">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/shop">Shop</Link>
              </li>
              {/* <li>
                <Link to="/cart">Cart</Link>
              </li> */}
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
          <Link to="/cart">
          <div className="cart_box">
            <TiShoppingCart className="cart_icon" />
            <span>{items.cart.length}</span>
          </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Nav;

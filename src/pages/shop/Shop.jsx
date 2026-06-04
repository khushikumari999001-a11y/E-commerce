import React, { useState } from "react";
import { category } from "../../category";
import "./Shop.css";
import Product from "../../components/product/Product";
import { dummydata } from "../../dummydata";
import { FaShopify } from "react-icons/fa";

export default function Shop({input}) {
  let [cate, setCate] = useState(dummydata);
  function filterProducts(category) {
    if (category === "All") {
      setCate(dummydata);
    } else {
      const updatedata = dummydata.filter((item) => item.category === category);
      setCate(updatedata);
    }
  }
  const filteredProducts = cate.filter((item) =>
  item.name.toLowerCase().includes(input.toLowerCase())
);
  return (
    <div className="shop">
      <div className="heading">
        <span>Shop</span>
        <FaShopify className="icon" />
      </div>
      <div className="category_section">
        {category.map((item) => (
          <div
            key={item.id}
            className="category_card"
            onClick={() => {
              filterProducts(item.name);
            }}
          >
            <img src={item.image} alt="" />
            <p>{item.name}</p>
          </div>
        ))}
      </div>

      <div className="product_section">
        {filteredProducts.map((item) => (
          <Product
            key={item.id}
            name={item.name}
            image={item.image}
            price={item.price}
            id={item.id}
          />
        ))}
      </div>
    </div>
  );
}

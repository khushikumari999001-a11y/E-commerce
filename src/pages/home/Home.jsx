import React, { useState } from "react";
import bg0 from "../../../src/assets/bg0.gif";
import "./Home.css";
import { category } from "../../category";
import { dummydata } from "../../dummydata";
import Product from "../../components/product/Product";

const Home = ({input}) => {
  // const [search, setSearch] = useState("")
  let [cate, setCate] = useState(dummydata);
  function filterProducts(category) {
  const updatedata = dummydata.filter(
    (item) => item.category === category
  );
  setCate(updatedata);
}
const filteredProducts = cate.filter((item) =>
  item.name.toLowerCase().includes(input.toLowerCase())
);

  return (
    <div className="home">
      <div className="hero_bg">
        <img src={bg0} alt="hero image" />
      </div>
      <div className="category_section">
        {category.slice(0, 5).map((item) => (
          <div className="category_card"   key={item.id} onClick={() =>{

            filterProducts(item.name)
          }}>
            <img src={item.image} alt="" />
            <p>{item.name}</p>
          </div>
        ))}
      </div>

      <h1>Tranding Products</h1>
      <div className="product_section">
        {filteredProducts.slice(0, 7).map((item) => (
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
};

export default Home;

// import image1 from "../../assets/image1.jpg"
import { useDispatch } from "react-redux"
import "./Product.css"
import React from 'react'
import { AddItem } from "../../redux/cartSlice"
import { toast } from "react-toastify"

const Product = ({name,image,price,id}) => {
  let dispatch = useDispatch()
  return (
    <div className='products'>
      <div className="image_parent">
      <img src={image} alt="name" />
    </div>

      <div className="product_details">
      <p className="product_name">{name}</p>
      <p className="product_price">Rs {price}/-</p>
      <button onClick={()=>{
        dispatch(AddItem({name:name, image:image,price:price,id:id}))
              toast("🛒 Item Added!", {
    style: {
      background: "#333",
      color: "#fff",
    },
  });
        
      }}>Add+</button>
    </div>
    </div>
  )
}

export default Product

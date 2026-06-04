import React from 'react'
// import image1 from "../../assets/image1.jpg"
import "./cartCard.css"
import { useDispatch } from 'react-redux'
import { removeItem } from '../../redux/cartSlice'
const Cartcard = ({name,price,id,image}) => {
  let dispatch = useDispatch()
  return (
    <div className='cardcart'>
      <div className="left_card">
        <img src={image} alt="" />
        <div className="name_price">
          <span className="name">{name}</span>
          <span className="price">Rs {price}/-</span>
        </div>
      </div>
      <div className="right_card">
        <button onClick={() => {
          dispatch(removeItem(id))
        }}>Remove</button>
      </div>
    </div>
  )
}

export default Cartcard

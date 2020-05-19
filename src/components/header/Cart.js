import React from "react";


import {useSelector} from 'react-redux'

const Cart = (props) => {

let course=useSelector(state=>state.addToCart);


  const renderCart=(course)=>{
  return  course.map(x=>{
      return(
        <div class="card" style={{width: "14rem"}}>
      <img class="card-img-top" src={x.image} alt="Card image cap"/>
      <div class="card-body">
        <h5 class="card-title">{x.price}</h5>
        <h3 class="card-footer">&#8377; {x.price}</h3>
        </div>
      </div>
      )
    })
  }




  return (

        <div className="row lg-4">
          {renderCart(course)}
        </div>

  )
}

export default Cart

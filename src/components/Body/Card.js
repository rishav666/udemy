import React,{useEffect}  from 'react';


import './card.css'
import {useSelecter,useDispatch} from 'react-redux'
import addToCart from '../../actions/addToCart'
import addToWishlist from '../../actions/addToWishlist'




const Card = (props) => {
 const dispatch = useDispatch()




  const addToCart1=(id,pic)=>{
     dispatch(addToCart(pic,id))
  }


 const addToWishlist1=(id,pic)=>{
   dispatch(addToWishlist(pic,id))


 }




  return (
    <div class="card" style={{width: "14rem"}}>
  <img class="card-img-top" src={props.pic} alt="Card image cap"/>
  <div class="card-body">
    <h5 class="card-title">{props.title}</h5>
    <button onClick={e=>addToWishlist1(props.id,props.pic)} type="button" class="btn btn-danger">Add to Cart</button>
    <i onClick={e=>addToWishlist1(props.id,props.pic)} class="heart fa fa-heart fa-2x"></i>
    <h3 class="card-footer">&#8377; 700</h3>
  </div>
</div>

  )
}

export default Card

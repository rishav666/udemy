import pic1 from './pics/course1.jpg'
const price=23;
const xx={
  image:pic1,
  price:price
}
export default function addToCart(state=[xx],action){
  let {type}=action;
  if(type=='addToCart')
  {

    return [
      ...state,
      {
        image:action.image,
        price:action.price
      }
    ];
  
  }
  return state;
}

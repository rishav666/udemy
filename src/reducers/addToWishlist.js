export default function addToWishlist(state=[],action){
  let {type}=action;
  if(type=='addToWishlist')
  {
    let {image}=action;
    let {price}=action;
    var temp={'image':image,'price':price};
    return [...state,temp];
  }
  return state;
}

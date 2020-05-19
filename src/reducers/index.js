import {combineReducers} from 'redux';
import addToCart from './addToCart';
import addToWishlist from './addToWishlist';
import item from './item';

const rootReducer =combineReducers({
  addToCart:addToCart,
  addToWishlist:addToWishlist,
  item:item

})

export default rootReducer;

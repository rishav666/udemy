import React,{Component} from 'react'
import logo from "./Body/pics/logo.svg"
import './style.css'
import Categories from './header/Categories';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


import Cart from './header/Cart.js'
import MyCourses from './header/MyCourses.js'
import Notification from './header/Notification.js'
import TeachForUdemy from './header/TeachForUdemy.js'
import UdemyForBusiness from './header/UdemyForBusiness.js'
import WishList from './header/WishList.js'













export default class Header extends Component{
  constructor(props) {
      super(props);


    }

importcategory(){
return(
  <div>
  <Categories/>
  </div>
)

  }

  render(){




    return(
      <Router>

      <nav className=" header navbar navbar-dark">
      <a className="navbar-brand" href="#">
        <img src={logo} width="110" height="50" alt="logo"/>
     </a>

     <li className="nav-item" >

     <Link to="/Categories">
     <div><i className="fa fa-align-justify"></i>Categories</div>
     </Link>
     </li>
     <li className="nav-item">
           <nav className="navbar navbar-light bg-light">
        <form className="form-inline">
          <input className="form-control mr-sm-2" type="search" placeholder="Search for anything" aria-label="Search"/>
          <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
      </nav>
     </li>
     <li className="nav-item" >
     <Link to="/udemy-for-business">
     udemy for business</Link>
     </li>
     <li className="nav-item">
     <Link to="/teach-for-udemy">
     teach for udemy</Link>
     </li>
     <li className="nav-item">
     <Link to="/my-courses">
     my courses</Link>
     </li>
     <li className="nav-item">
    <Link to="/wishlist">  <i className="fa fa-heart"></i></Link>
    <Link to="/cart">  <i className="fa fa-cart-plus"></i></Link>
    <Link to="/notification">  <i className="fa fa-bell"></i></Link>
     </li>


      </nav>
      <Switch>

      <Route path="/Categories">
      <Categories/></Route>

      <Route path="/udemy-for-business">
      <UdemyForBusiness/></Route>

      <Route path="/teach-for-udemy">
      <TeachForUdemy/></Route>

      <Route path="/my-courses">
      <MyCourses/></Route>

      <Route path="/wishlist">
      <WishList/></Route>

      <Route path="/cart">
      <Cart key="2"/></Route>

      <Route path="/notification">
      <Notification/></Route>



      </Switch>
      </Router>

    )
  }
}

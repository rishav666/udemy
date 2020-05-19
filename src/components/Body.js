import React from 'react';
import Card from './Body/Card';
import {useSelector} from 'react-redux';


const Body = (props) => {

  const courses=useSelector(state=>state.item)
  const renderCart=(courses)=>{
    return(
      courses.map(x=>{
        return        (   <Card pic={x.pic} title={x.title} id={x.id} key={x.id}/>)

      })
    )
  }

  return (

      <div className="row lg-4 sm-2 md-3">
           {renderCart(courses)}
      </div>)

}

export default Body

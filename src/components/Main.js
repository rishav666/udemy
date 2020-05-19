import React,{Component} from 'react';
import Header from "./Header"
import Body from "./Body"


class Main extends Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div>
        <Header   />
        <br/>
        <Body />
      </div>

    )
  }
}
export default Main;

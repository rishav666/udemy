

import pic1 from './pics/course1.jpg'
import pic2 from './pics/course2.jpg'
import pic3 from './pics/course3.jpg'
import pic4 from './pics/course4.jpg'
import pic5 from './pics/course5.jpg'

let courses=[
    {
    title:"Web Development - Complete Fast Track Course",
    price:700,
    id:0,
    pic:pic1,
    buy:true
  },
  {
    title:"The Complete Web Developer in 2020: Zero to Mastery",
    price:700,
    id:1,
    pic:pic2,
      buy:true
  },
  {
    title:"SASS - The Complete SASS Course (CSS Preprocessor)",
    price:700,
    id:2,
    pic:pic3,
      buy:true
  },
  {
    title:"*NEW* DOM 2020 Build Dynamic Websites with JavaScript Part 1",
    price:700,
    id:3,
    pic:pic4,
      buy:true
  },
  {
    title:"Web Development - Complete Fast Track Course",
    price:700,
    id:4,
    pic:pic5,
      buy:true
  }
];



export default function item(state=[],action){


  let {type}=action;
  if(type=='item')
  {
  return [...courses];
  }
  return [...courses];
}

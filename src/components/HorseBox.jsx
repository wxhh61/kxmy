import React from 'react'
import { Navbar, Nav , NavItem, Col} from 'react-bootstrap';
import {Link } from 'react-router'
import HorseList from "./HorseList.jsx"


var data = [
  {id: 1,
   name: "horse A",
   img: require("../public/horse.jpg"),
   description:"description1 "
  },
  {id: 2,
   name: "horse b",
   img:  require("../public/horse.jpg"),
   description:"description2 "
  }
];

export default React.createClass({
  render() {
    return (
           <Col xsOffset={2} sm={6} md={8}>
        <h2>Horse Box</h2>
        <HorseList name ="horse1 list" data ={data} />
        </Col>
    );
  }
})

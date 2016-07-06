import React from 'react'
import { Navbar, Nav , NavItem, Col} from 'react-bootstrap';
import {Link } from 'react-router'
import HorseList from "./HorseList.jsx"


var data = [
  {id: 1,
   name: "K-3-23",
   img: require("../public/horses/1.jpg"),
   description:"性别:♂   出生年:2013年  体高:152 体长:154  胸围:161  管围:19 "
  },
  {id: 2,
   name: "K-5-7",
   img:  require("../public/horses/3.jpg"),
   description:"性别:♂   出生年:2013年  体高:152 体长:154  胸围:161  管围:19 "
  },
  {id: 3,
   name: "K-1-8",
   img:  require("../public/horses/5.jpg"),
   description:"性别:♂   出生年:2013年  体高:152 体长:154  胸围:161  管围:19 "
  },
  {id: 4,
   name: "K-3-12",
   img:  require("../public/horses/7.jpg"),
   description:"性别:♂   出生年:2013年  体高:152 体长:154  胸围:161  管围:19 "
  },
  {id: 5,
   name: "K-3-18",
   img:  require("../public/horses/9.jpg"),
   description:"性别:♂   出生年:2013年  体高:152 体长:154  胸围:161  管围:19 "
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

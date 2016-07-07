import React from 'react'
import { Navbar, Nav , NavItem, Col} from 'react-bootstrap';
import {Link } from 'react-router'
import HorseList from "./HorseList.jsx"
import SearchBar from "./SearchBar.jsx"

var data = [
  {id: 1,
   name: "K-3-23",
   img: require("../public/horses/1.jpg"),
   sex:"m",
   description:"性别:♂   出生年:2013年  体高:152 体长:154  胸围:161  管围:19 "
  },
  {id: 2,
   name: "K-5-7",
   sex:"m",
   img:  require("../public/horses/3.jpg"),
   description:"性别:♂   出生年:2013年  体高:152 体长:154  胸围:161  管围:19 "
  },
  {id: 3,
   name: "K-1-8",
   sex:"f",
   img:  require("../public/horses/5.jpg"),
   description:"性别:♂   出生年:2013年  体高:152 体长:154  胸围:161  管围:19 "
  },
  {id: 4,
   name: "K-3-12",
   sex:"f",
   img:  require("../public/horses/7.jpg"),
   description:"性别:♂   出生年:2013年  体高:152 体长:154  胸围:161  管围:19 "
  },
  {id: 5,
   name: "K-3-18",
   sex:"f",
   img:  require("../public/horses/9.jpg"),
   description:"性别:♂   出生年:2013年  体高:152 体长:154  胸围:161  管围:19 "
  }

];

export default React.createClass({
  getInitialState: function() {
    return {
      filterText: '',
      isMale: true,
      isFemale: true
    };
  },

  handleUserInput: function(filterText, isMale, isFemale ) {
    this.setState({
      filterText: filterText,
      isMale: isMale,
      isFemale:isFemale
    });
  },


  render() {
    return (

        <Col xsOffset={2} sm={6} md={8}>
        <SearchBar
               filterText={this.state.filterText}
               isMale={this.state.isMale}
               isFemale={this.state.isFemale}
               onUserInput={this.handleUserInput}
        />
        <HorseList
           data ={data}
           isMale={this.state.isMale}
           isFemale={this.state.isFemale}
           filterText={this.state.filterText}
         />
        </Col>
    );
  }
})

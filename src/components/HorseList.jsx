import React from 'react'
import { Navbar, Nav , NavItem, Row} from 'react-bootstrap';
import {Link } from 'react-router'
import Horse from "./Horse.jsx"


export default React.createClass({
  render() {
    var commentNodes = this.props.data.map(function(horse) {
      if (horse.name.indexOf(this.props.filterText) === -1 ||(this.props.isMale === false && horse.sex =="m") || (this.props.isFemale === false && horse.sex =="f") ) {
        console.log(this.props.filterText);
        return;
      }

       return (
            <Row>
            <Horse name={horse.name} img={horse.img} description = {horse.description}>
            </Horse>
            </Row>
      );
    }.bind(this));
    return (
        <div>
        <h3> {this.props.name} </h3>
        {commentNodes}
      </div>
    );

  }
})

import React from 'react'
import { Navbar, Nav , NavItem, Row} from 'react-bootstrap';
import {Link } from 'react-router'
import Horse from "./Horse.jsx"


export default React.createClass({
  render() {
      var commentNodes = this.props.data.map(function(horse) {
        return (
            <Row>

            <Horse name={horse.name} img={horse.img} description = {horse.description}>
            </Horse>
            </Row>
      );
    });
    return (
        <div>
              <h3> {this.props.name} </h3>
        {commentNodes}
      </div>
    );

  }
})

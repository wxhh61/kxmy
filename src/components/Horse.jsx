import React from 'react';
import { Navbar, Nav , NavItem,Image, Col, Row, Media} from 'react-bootstrap';
import {Link } from 'react-router';



export default React.createClass({
  render() {
    return (
<div id="div">
  <Row>
    <Col  xs={5} md={5}>
    <Image className="zoom_img" src={this.props.img}  rounded responsive />
    </Col>

    <Col  xs={3} md={3}>
       <Row>
        <h4>
          {this.props.name}
        </h4>
       </Row>
       <Row>
        <div> {this.props.description}
        </div>
       </Row>
    </Col>
  </Row>

</div>


    );
  }
});

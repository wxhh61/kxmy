import React from 'react';
import { Navbar, Nav , NavItem,Image, Col, Row} from 'react-bootstrap';
import {Link } from 'react-router';



export default React.createClass({
  render() {
    return (
        <div>
        <Row>
         <Col xsOffset={2}>
            <h3>
               {this.props.name}
      </h3>
          </Col>
        </Row>

         <Row>
          <Col xs={6} md={6}>
         <Image className="zoom_img" src={this.props.img}  rounded responsive />
        </Col>
        <Col xs={6} md={6}>
        <p> {this.props.description}
      </p>
          </Col>

         </Row>

        </div>
    );
  }
});

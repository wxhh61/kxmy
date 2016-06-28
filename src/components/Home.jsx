import React from 'react'
import {Grid, Row, Carousel, Col,Clearfix, MenuItem, Tab, Nav, NavItem, Image, Glyphicon} from 'react-bootstrap';
import {Link } from 'react-router'

var divStyle = {
  margin:100,
   border: 1
};


export default React.createClass({
  render() {
    return  (

   // <Clearfix>
   //  <ul class="nav nav-pills nav-stacked">
   //    <MenuItem header>Header</MenuItem>
   //    <MenuItem>link</MenuItem>
   //    <MenuItem>link</MenuItem>
   //    <MenuItem disabled>disabled</MenuItem>
   //    <MenuItem title="See? I have a title.">
   //      link with title
   //    </MenuItem>
   //    <MenuItem componentClass={Link} href="/about"  to="/contact">
   //      link that alerts
   //    </MenuItem>
   //  </ul>
   //      </Clearfix>

 //        <ul class="nav nav-pills nav-stacked">
//           <li role="presentation" class="active"><a href="#">Home</a></li>
//   <li role="presentation"><a href="#">Profile</a></li>
//   <li role="presentation"><a href="#">Messages</a></li>
      // </ul>

// <Grid>
//   <Row className="show-grid">
//     <Col xsOffset={1} sm={6} md={3}>
//     <Tab.Container id="left-tabs-example" defaultActiveKey="first">
//       <Row className="clearfix">
//         <Col sm={2}>
//         <Nav bsStyle="pills" stacked>
//           <NavItem eventKey="first">
//             Tab 1111111111111111111111111
//           </NavItem>
//           <NavItem eventKey="second">
//             Tab 222222222222222222
//           </NavItem>
//         </Nav>
//       </Col>
//       <Col sm={2}>
//       <Tab.Content animation>
//         <Tab.Pane eventKey="first">
//           Tab 1 content
//         </Tab.Pane>
//         <Tab.Pane eventKey="second">
//           Tab 2 content
//         </Tab.Pane>
//       </Tab.Content>
//       </Col>
//       </Row>
//     </Tab.Container>

//         </Col>

//         <Col sm={8} md={8}>
//         123
// </Col>
//   </Row>
// </Grid>
 <Clearfix>
   <Grid style={divStyle}>
     <Row className="show-grid">
        <Col xsOffset={1} sm={6} md={3}>
        <Row>
        <p>三河马</p>
        </Row>
           <Row>
           <Nav  bsStyle="pills" stacked  >
        <NavItem   title="Item"  componentClass={Link} href="/about"  to="/contact"><Glyphicon glyph="glyphicon glyphicon-grain" />拥有百年马史</NavItem>
        <NavItem title="Item"  componentClass={Link} href="/about"  to="/contact"><Glyphicon glyph="glyphicon glyphicon-grain" /> 草原名驹</NavItem>
             <NavItem  title="Item"  componentClass={Link} href="/about"  to="/contact"><Glyphicon glyph="glyphicon glyphicon-grain" />我与马</NavItem>
        <NavItem title="Item"  componentClass={Link} href="/about"  to="/contact"><Glyphicon glyph="glyphicon glyphicon-grain" />马闻</NavItem>
             <NavItem  title="Item"  componentClass={Link} href="/about"  to="/contact"><Glyphicon glyph="glyphicon glyphicon-grain" />呼伦贝尔的传说</NavItem>
        <NavItem title="Item"  componentClass={Link} href="/about"  to="/contact"><Glyphicon glyph="glyphicon glyphicon-grain" />呼伦贝尔的传说1</NavItem>
        </Nav>
           </Row>


       </Col>
        <Col sm={8} md={8}>
           <Image width={900} height={600} text-align="center"  alt="900x600" src= { require("../public/horse.jpg")} responsive thumbnail />
        </Col>
    </Row>
  </Grid>
  </Clearfix>

    );
  }
})

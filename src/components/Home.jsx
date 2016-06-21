import React from 'react'
import {Grid, Row, Carousel, Col,Clearfix, MenuItem, Tab, Nav, NavItem, Image, Glyphicon} from 'react-bootstrap';
import {Link } from 'react-router'

var divStyle = {
  margin:100,
   border: 1
};



// import { SideNav, Nav } from 'react-sidenav';


var navi = [
    { id: 'dashboard', icon: 'fa fa-dashboard' , text: 'Dashboard'},
    { id: 'products', icon: 'fa fa-cube', text: 'Products' ,
        navlist: [
          { icon: 'fa fa-desktop', id: 'manage' ,text: 'Manage Product' },
          { icon: 'fa fa-cog', id: 'suppliers' ,text: 'Suppliers' }
        ]
    },
    { id: 'inventory', icon: 'fa fa-database' ,text: 'Inventory'},
    { id: 'deliveries', icon: 'fa fa-truck' ,text: 'Deliveries'},
    { id: 'reports', icon: 'fa fa-bar-chart' ,text: 'Reports' }
];

export default React.createClass({
  render() {
    return  (
    // <Grid>
    //   <Row className="show-grid">
    //     <Carousel>
    //       <Carousel.Item>
    //         <img width={900} height={500} text-align="center"  alt="900x500" src= { require("../public/horse.jpg")} />
    //         <Carousel.Caption>
    //           <h3>马1的名字</h3>
    //           <p>马1的介绍</p>
    //         </Carousel.Caption>
    //       </Carousel.Item>

    //       <Carousel.Item>
    //         <img width={900} height={500} text-align="center"  alt="900x500" src= { require("../public/horse.jpg")} />
    //         <Carousel.Caption>
    //           <h3>马2的名字</h3>
    //           <p>马2的介绍</p>
    //         </Carousel.Caption>
    //       </Carousel.Item>

    //       <Carousel.Item>
    //         <img width={900} height={500} text-align="center"  alt="900x500" src= { require("../public/horse.jpg")} />
    //         <Carousel.Caption>
    //           <h3>马3的名字</h3>
    //           <p>马3的介绍</p>
    //         </Carousel.Caption>
    //       </Carousel.Item>

    //     </Carousel>
    //   </Row>
      //     </Grid>
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

   <Grid style={divStyle}>
     <Row className="show-grid">
        <Col xsOffset={1} sm={6} md={3}>

           <Nav  bsStyle="tabs" stacked  >
        <NavItem   title="Item"  componentClass={Link} href="/about"  to="/contact"><Glyphicon glyph="glyphicon glyphicon-grain" />Navitem</NavItem>
        <NavItem title="Item"  componentClass={Link} href="/about"  to="/contact"><Glyphicon glyph="glyphicon glyphicon-grain" /> NavItem 2 content</NavItem>
             <NavItem  title="Item"  componentClass={Link} href="/about"  to="/contact"><Glyphicon glyph="glyphicon glyphicon-grain" />NavItem 1 content</NavItem>
        <NavItem title="Item"  componentClass={Link} href="/about"  to="/contact"><Glyphicon glyph="glyphicon glyphicon-grain" />NavItem 2 content</NavItem>
             <NavItem  title="Item"  componentClass={Link} href="/about"  to="/contact"><Glyphicon glyph="glyphicon glyphicon-grain" />NavItem 1 content</NavItem>
        <NavItem title="Item"  componentClass={Link} href="/about"  to="/contact"><Glyphicon glyph="glyphicon glyphicon-grain" />NavItem 2 content</NavItem>
             <NavItem  title="Item"  componentClass={Link} href="/about"  to="/contact"><Glyphicon glyph="glyphicon glyphicon-grain" />NavItem 1 content</NavItem>
        <NavItem title="Item"  componentClass={Link} href="/about"  to="/contact"><Glyphicon glyph="glyphicon glyphicon-grain" />NavItem 2 content</NavItem>
             <NavItem  title="Item"  componentClass={Link} href="/about"  to="/contact"><Glyphicon glyph="glyphicon glyphicon-grain" />NavItem 1 content</NavItem>
              <NavItem title="Item"  componentClass={Link} href="/about"  to="/contact"><Glyphicon glyph="glyphicon glyphicon-grain" />NavItem 2 content</NavItem>
         </Nav>


       </Col>
        <Col sm={8} md={8}>
           <Image width={900} height={500} text-align="center"  alt="900x500" src= { require("../public/horse.jpg")} responsive thumbnail />
        </Col>
    </Row>
  </Grid>


    );
  }
})

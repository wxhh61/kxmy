import React from 'react'
import { Navbar, Nav , NavItem} from 'react-bootstrap';
import {Link } from 'react-router'


export default React.createClass({
  render() {
      return (
    <div>
     <Navbar inverse fluid>
        <Navbar.Header>
            <Navbar.Brand >
               <a componentClass={Link} href="/" to="/">三河马</a>
            </Navbar.Brand>
            <Navbar.Toggle/>
       </Navbar.Header>
       <Navbar.Collapse>
         <Nav  class="navbar navbar-default">
            <NavItem componentClass={Link} href="/users"  to="/about">基地简介</NavItem>
            <NavItem componentClass={Link} href="/about"  to="/contact">联系方式</NavItem>
            <NavItem componentClass={Link} href="/users"  to="/about">基地简介</NavItem>
            <NavItem componentClass={Link} href="/about"  to="/contact">联系方式</NavItem>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    {this.props.children}

  </div>
      );
  }
})

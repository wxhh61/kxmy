import React from 'react'
import { Navbar, Nav , NavItem, Glyphicon} from 'react-bootstrap';
import {Link } from 'react-router'


export default React.createClass({
  render() {
      return (
      <div>
        <Navbar inverse fluid >
          <Navbar.Header>
            <Navbar.Brand >
              <a componentClass={Link} href="/" to="/"><Glyphicon glyph="glyphicon glyphicon-knight" />三河马</a>
            </Navbar.Brand>
            <Navbar.Toggle/>
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav  class="navbar navbar-default">
              <NavItem componentClass={Link} href="/"  to="/"><Glyphicon glyph="glyphicon glyphicon-home" />基地简介</NavItem>
              <NavItem componentClass={Link} href="/horsebox"  to="/horsebox"><Glyphicon glyph="glyphicon glyphicon-list-alt" />马匹介绍</NavItem>
              <NavItem componentClass={Link} href="/schedule"  to="/schedule"><Glyphicon glyph="glyphicon glyphicon-align-left" />赛事行程</NavItem>
              <NavItem componentClass={Link} href="/contact"  to="/contact"><Glyphicon glyph="glyphicon glyphicon-envelope" />联系方式</NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
          {this.props.children}
        <footer>
          <p>Copyright ©1996-2016 kexing Corporation, All Rights Reserved</p>
          </footer>

      </div>
      );
  }
})

import React from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute, Link, IndexLink, browserHistory } from 'react-router'
// import {Home}  from "./home.jsx"

const ACTIVE = { color: 'red' }
import { Navbar, Nav , NavItem, Carousel, Grid, Row} from 'react-bootstrap';



const App = ({ children }) => (
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
    {children}
  </div>
)



const Contact = ({ children }) => (
  <div>
    <h2>Contact</h2>
    {children}
  </div>
)


const About = () => (
    <div>
    <h2>About</h2>
    </div>
)

const Home = () => (

    <Grid>
    <Row className="show-grid">
  <Carousel>
    <Carousel.Item>
    <img width={900} height={500} margin="auto" alt="900x500" src="./horse.jpg"/>
      <Carousel.Caption>
        <h3>马1的名字</h3>
        <p>马1的介绍</p>
      </Carousel.Caption>
    </Carousel.Item>

        <Carousel.Item>
    <img width={900} height={500} margin="auto" alt="900x500" src="./horse.jpg"/>
      <Carousel.Caption>
        <h3>马2的名字</h3>
        <p>马2的介绍</p>
      </Carousel.Caption>
    </Carousel.Item>

       <Carousel.Item>
    <img width={900} height={500} margin="auto" alt="900x500" src="./horse.jpg"/>
      <Carousel.Caption>
        <h3>马3的名字</h3>
        <p>马3的介绍</p>
      </Carousel.Caption>
    </Carousel.Item>

    </Carousel>

     </Row>
     </Grid>

)

render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
         <Route path="/about" component={About}/>
         <Route path="/contact" component={Contact}/>
    </Route>
  </Router>
), document.getElementById('index'));

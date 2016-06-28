import React from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute, Link, IndexLink, browserHistory } from 'react-router'
import Home  from "./Home.jsx"
import NavigationBar  from "./NavigationBar.jsx"
import About  from "./About.jsx"
import Contact  from "./Contact.jsx"
import Schedule  from "./Schedule.jsx"
import HorseBox from "./HorseBox.jsx"



render((
  <Router history={browserHistory}>
    <Route path="/" component={NavigationBar}>
      <IndexRoute component={Home}/>
         <Route path="/about" component={About}/>
        <Route path="/contact" component={Contact}/>
    <Route path="/schedule" component={Schedule}/>
      <Route path="/horsebox" component={HorseBox}/>
    </Route>
  </Router>
), document.getElementById('index'));

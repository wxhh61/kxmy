import React from 'react'
import { PanelGroup, Panel, ListGroup, ListGroupItem, Grid, Row, Col, Clearfix} from 'react-bootstrap';
import {Link } from 'react-router'

export default React.createClass({
  render() {
    return (

<Grid>
  <Row className="show-grid">
    <Col xsOffset={2} sm={6} md={8}>
    <PanelGroup  accordion>
      <Panel header="2016-6" eventKey="1"  bsStyle="warning" >

        <ListGroup >
          <ListGroupItem>Item 1</ListGroupItem>
          <ListGroupItem>Item 2</ListGroupItem>
          <ListGroupItem>&hellip;</ListGroupItem>
        </ListGroup>
      </Panel>
      <Panel header="Panel 2" eventKey="2"  bsStyle="warning"  >
        <ListGroup fill>
          <ListGroupItem>Item 1</ListGroupItem>
          <ListGroupItem>Item 2</ListGroupItem>
          <ListGroupItem>&hellip;</ListGroupItem>
        </ListGroup>
      </Panel>

      <Panel header="Panel 2" eventKey="2"  bsStyle="warning"  >
        <ListGroup fill>
          <ListGroupItem>Item 1</ListGroupItem>
          <ListGroupItem>Item 2</ListGroupItem>
          <ListGroupItem>&hellip;</ListGroupItem>
        </ListGroup>
      </Panel>

      <Panel header="Panel 2" eventKey="2"  bsStyle="warning"  >
        <ListGroup fill>
          <ListGroupItem>Item 1</ListGroupItem>
          <ListGroupItem>Item 2</ListGroupItem>
          <ListGroupItem>&hellip;</ListGroupItem>
        </ListGroup>
      </Panel>
    </PanelGroup>
        </Col>
  </Row>
</Grid>
    );
  }
})

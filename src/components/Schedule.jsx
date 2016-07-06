import React from 'react'
import { PanelGroup, Panel, ListGroup, ListGroupItem, Grid, Row, Col, Clearfix, ControlLabel,Tooltip} from 'react-bootstrap';
import {Link } from 'react-router'

export default React.createClass({
  render() {
    return (

<Grid>
  <Row className="show-grid">
        <Col xsOffset={2} sm={6} md={8}>
        <ControlLabel>某某活动详细安排</ControlLabel>


    <PanelGroup  accordion>
      <Panel header="2016-6-1" eventKey="1"  bsStyle="warning" >

        <ListGroup >
          <ListGroupItem>上午:看马</ListGroupItem>
          <ListGroupItem>下午:看马</ListGroupItem>
        </ListGroup>
      </Panel>
      <Panel header="2016-6-2" eventKey="2"  bsStyle="warning"  >
        <ListGroup fill>
        <ListGroupItem>上午:看马</ListGroupItem>
        <ListGroupItem>下午:看马</ListGroupItem>
        </ListGroup>
      </Panel>

      <Panel header="2016-6-3" eventKey="3"  bsStyle="warning"  >
        <ListGroup fill>
        <ListGroupItem>上午:看马</ListGroupItem>
          <ListGroupItem>下午:看马</ListGroupItem>
        </ListGroup>
      </Panel>

      <Panel header="2016-6-4" eventKey="4"  bsStyle="warning"  >
        <ListGroup fill>
        <ListGroupItem>上午:看马</ListGroupItem>
          <ListGroupItem>下午:看马</ListGroupItem>
        </ListGroup>
      </Panel>
    </PanelGroup>
        </Col>

        <Col sm={2} md={2}>
               <Tooltip placement="right" className="in" id="tooltip-right">
     点击日期获得当日详细行程
    </Tooltip>
        </Col>
  </Row>
</Grid>
    );
  }
})

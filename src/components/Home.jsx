import React from 'react'
import {Grid, Row, Carousel} from 'react-bootstrap';

export default React.createClass({
  render() {
    return  (
          <Grid>
    <Row className="show-grid">
    <Carousel>
    <Carousel.Item>
    <img width={900} height={500} text-align="center"  alt="900x500" src= { require("../public/horse.jpg")} />
      <Carousel.Caption>
        <h3>马1的名字</h3>
        <p>马1的介绍</p>
      </Carousel.Caption>
    </Carousel.Item>

        <Carousel.Item>
    <img width={900} height={500} text-align="center"  alt="900x500" src= { require("../public/horse.jpg")} />
      <Carousel.Caption>
        <h3>马2的名字</h3>
        <p>马2的介绍</p>
      </Carousel.Caption>
    </Carousel.Item>

       <Carousel.Item>
    <img width={900} height={500} text-align="center"  alt="900x500" src= { require("../public/horse.jpg")} />
      <Carousel.Caption>
        <h3>马3的名字</h3>
        <p>马3的介绍</p>
      </Carousel.Caption>
    </Carousel.Item>

    </Carousel>

    </Row>


    </Grid>



    );
  }
})

import React from "react";
import { Carousel } from "react-bootstrap";

const Banner = () => {
  return (
    <div className="mt-5 mb-3">
      <Carousel className="" variant="light">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://static.fibre2fashion.com/articleresources/images/63/6294/chinas-textile.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h5>First slide label</h5>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://static.fibre2fashion.com/articleresources/images/40/3994/chinese-apparel-industry-repositioning-itself.jpg"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h5>Second slide label</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://static.fibre2fashion.com/articleresources/images/88/8705/garment-industry-big_Big.jpg"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h5>Third slide label</h5>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Banner;

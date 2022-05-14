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
            <h5>Best Technology</h5>
            <p>We have the best technology of textile machines.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://static.fibre2fashion.com/articleresources/images/40/3994/chinese-apparel-industry-repositioning-itself.jpg"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h5>Strong Build Quality</h5>
            <p>Our Textile Machines have strong build quality.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://static.fibre2fashion.com/articleresources/images/88/8705/garment-industry-big_Big.jpg"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h5>Well Finishing</h5>
            <p>Our Machines are well finished.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Banner;

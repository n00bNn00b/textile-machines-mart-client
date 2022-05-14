import React from "react";
import {
  Button,
  Card,
  Container,
  ListGroup,
  ListGroupItem,
} from "react-bootstrap";
import { Link } from "react-router-dom";

const FeaturedItem = ({ featured }) => {
  const { _id, name, price, img, description, supplier, quantity } = featured;
  return (
    <Container id="featured" className="mb-5">
      <Card style={{ width: "18rem" }}>
        <Card.Img
          style={{ height: "180px", width: "285px" }}
          variant="top"
          src={img}
        />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>Description: {description}</Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroupItem>Supplier's Name: {supplier} </ListGroupItem>
          <ListGroupItem>Quanity: {quantity}</ListGroupItem>
          <ListGroupItem>Price: ${price} </ListGroupItem>
        </ListGroup>
        <Card.Body>
          <Button
            as={Link}
            to={`/updateItem/${_id}`}
            style={{ backgroundColor: "rgb(70 129 104)" }}
            className="d-block mx-auto border-0"
          >
            Update
          </Button>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default FeaturedItem;

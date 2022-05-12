import React from "react";
import {
  Button,
  Card,
  Container,
  ListGroup,
  ListGroupItem,
} from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../../firebase.init";

const FeaturedItem = ({ featured }) => {
  const [user] = useAuthState(auth);
  const { name, price, img, description, supplier, quantity } = featured;
  return (
    <Container>
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
          {user && (
            <Button
              as={Link}
              to="/manageInventory"
              style={{ backgroundColor: "rgb(70 129 104)" }}
              className="d-block mx-auto border-0"
            >
              Manage
            </Button>
          )}
        </Card.Body>
      </Card>
    </Container>
  );
};

export default FeaturedItem;
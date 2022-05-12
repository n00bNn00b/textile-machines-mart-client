import React from "react";
import {
  Button,
  Card,
  Container,
  ListGroup,
  ListGroupItem,
} from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useParams } from "react-router-dom";
import auth from "../../firebase.init";

const Product = ({ product }) => {
  const { id } = useParams();
  const [user] = useAuthState(auth);
  const { _id, name, supplier, price, quantity, description, img } = product;
  return (
    <Container>
      <Card style={{ width: "18rem" }}>
        <Card.Img
          style={{ height: "180px", width: "285px" }}
          variant="top"
          src={img}
        />
        <Card.Body>
          <Card.Title>Product Name: {name}</Card.Title>
          <Card.Text>Short Description: {description}</Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroupItem>Supplier's Name: {supplier}</ListGroupItem>
          <ListGroupItem>Quantity: {quantity}</ListGroupItem>
          <ListGroupItem>Price: ${price}</ListGroupItem>
        </ListGroup>
        <Card.Body>
          {user && (
            <Button
              as={Link}
              to={`/updateItem/${_id}`}
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

export default Product;

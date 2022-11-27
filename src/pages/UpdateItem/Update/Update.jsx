import axios from "axios";
import React, { useState } from "react";
import {
  Button,
  Card,
  Container,
  Form,
  ListGroup,
  ListGroupItem,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const Update = ({ singleItem }) => {
  const { _id, name, quantity, description, supplier, price, img } = singleItem;
  const [itemQuantity, setItemQuantity] = useState(parseInt(quantity));

  // delivery handler
  const deliverHandler = () => {
    if (itemQuantity === 0) {
      toast("Stock Out!");
    } else if (itemQuantity > 0) {
      setItemQuantity(parseInt(itemQuantity - 1));
    }
    axios
      .put(
        `https://textile-machines-mart-server-production.up.railway.app/product/${_id}`,
        {
          quantity: parseInt(itemQuantity - 1),
        }
      )
      .then((res) => console.log(res));
    toast("item is on the way to be delivered");
  };

  // restock handler
  const restockHandler = (e) => {
    e.preventDefault();
    const restock = parseInt(e.target.restock.value);
    if (restock === 0 || restock <= 0) {
      toast("Please input valid number!");
    } else {
      const updatedQuantity = parseInt(restock + itemQuantity);
      setItemQuantity(parseInt(updatedQuantity));
      axios
        .put(
          `https://textile-machines-mart-server-production.up.railway.app/product/${_id}`,
          {
            quantity: parseInt(updatedQuantity),
          }
        )
        .then((res) => console.log(res));
      e.target.reset();
      toast(restock + " item restocked.");
    }
  };
  return (
    <Container className="my-5">
      <h2 className="text-center py-5">Update Item</h2>

      <Card className="d-block mx-auto" style={{ width: "20rem" }}>
        <Card.Img className="p-2" height="250px" variant="top" src={img} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>Short Description: {description}</Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroupItem>Supplier: {supplier} </ListGroupItem>
          <ListGroupItem>Quantity: {itemQuantity}</ListGroupItem>
          <ListGroupItem>Price: ${price} </ListGroupItem>
        </ListGroup>
        <Card.Body>
          <Button
            onClick={deliverHandler}
            className="d-block mx-auto border-0"
            style={{ backgroundColor: "rgb(70 129 104)" }}
          >
            Deliver
          </Button>
        </Card.Body>
        <Card.Body>
          <Form onSubmit={restockHandler}>
            <Form.Group className="mb-3" controlId="restock">
              <Form.Control type="number" placeholder="Enter number" />
            </Form.Group>
            <Button
              type="submit"
              className="d-block mx-auto border-0 mt-2"
              style={{ backgroundColor: "rgb(70 129 104)" }}
            >
              Restock
            </Button>
          </Form>
        </Card.Body>
      </Card>
      <Button
        as={Link}
        to="/manageInventory"
        className="d-block mx-auto border-0 my-2 w-25 mb-5"
        style={{ backgroundColor: "rgb(70 129 104)" }}
      >
        Manage Inventory
      </Button>
    </Container>
  );
};

export default Update;

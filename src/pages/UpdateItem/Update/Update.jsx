import React, { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { toast } from "react-toastify";

const Update = ({ singleItem }) => {
  const { name, quantity } = singleItem;
  const [itemQuantity, setItemQuantity] = useState(quantity);

  // delivery handler
  const deliverHandler = () => {
    if (itemQuantity === 0) {
      toast("Stock Out!");
    } else if (itemQuantity > 0) {
      setItemQuantity(itemQuantity - 1);
    }
  };

  // restock handler
  const restockHandler = (e) => {
    e.preventDefault();
    const restock = parseInt(e.target.restock.value);
    if (restock === 0 || restock <= 0) {
      toast("Please input valid number!");
    } else {
      setItemQuantity(parseInt(restock + itemQuantity));
    }
  };
  return (
    <Container>
      <h2>Manage Inventory</h2>
      name: {name}
      <p>Quantity: {itemQuantity} </p>
      <button onClick={deliverHandler}>Deliver</button>
      <br />
      <Form onSubmit={restockHandler}>
        <Form.Group className="mb-3" controlId="restock">
          <Form.Control type="number" placeholder="number" />
          <Button type="submit">Restock</Button>
        </Form.Group>
      </Form>
    </Container>
  );
};

export default Update;

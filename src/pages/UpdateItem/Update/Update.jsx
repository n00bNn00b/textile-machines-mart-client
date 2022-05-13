import axios from "axios";
import React, { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { toast } from "react-toastify";

const Update = ({ singleItem }) => {
  const { _id, name, quantity } = singleItem;
  const [itemQuantity, setItemQuantity] = useState(quantity);

  // delivery handler
  const deliverHandler = () => {
    if (itemQuantity === 0) {
      toast("Stock Out!");
    } else if (itemQuantity > 0) {
      setItemQuantity(itemQuantity - 1);
    }
    axios
      .put(`http://localhost:5000/product/${_id}`, {
        quantity: itemQuantity - 1,
      })
      .then((res) => console.log(res));
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
    axios
      .put(`http://localhost:5000/product/${_id}`, {
        quantity: restock + itemQuantity,
      })
      .then((res) => console.log(res));
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

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
import { toast } from "react-toastify";

const MyItem = ({ userItem }) => {
  const { _id, name, img, description, price, supplier, quantity } = userItem;
  //  quantity state
  const [productQuantity, setProductQuantity] = useState(quantity);

  // deliver button handler
  const handleDeliver = (e) => {
    e.preventDefault();
    const deliverCount = e.target.deliverCounter.value;

    if (productQuantity < 1) {
      toast("Please restock few more items.");
    } else if (productQuantity >= deliverCount) {
      const remaining = parseInt(productQuantity - deliverCount);
      setProductQuantity(remaining);
      axios
        .put(`http://localhost:5000/product/${_id}`, {
          quantity: productQuantity - deliverCount,
        })
        .then((res) => console.log(res));
      toast(deliverCount + " " + name + " is on delivery!");
    } else if (deliverCount === 0) {
      toast("please input item more than 0.");
    } else {
      toast("Sorry! you do not have sufficient product to deliver.");
    }
    e.target.reset();
  };

  // restock handler
  const restockHandler = (e) => {
    e.preventDefault();
    const restock = parseInt(e.target.restock.value);
    setProductQuantity(restock + productQuantity);
    console.log(restock);
    if (restock === 0 || restock <= 0) {
      toast("Please enter valid number of product");
    } else {
      axios
        .put(`http://localhost:5000/product/${_id}`, {
          quantity: productQuantity + restock,
        })
        .then((res) => console.log(res));
    }
    e.target.reset();
  };

  // delete button handler
  const deleteHandler = () => {
    axios
      .delete(`http://localhost:5000/product/${_id}`)
      .then((res) => console.log(res));
  };
  return (
    <Container className="row">
      <div className="col">
        <Card className="d-block mx-auto mt-3" style={{ width: "18rem" }}>
          <Card.Img variant="top" src={img} />
          <Card.Body>
            <Card.Title>Product Name: {name} </Card.Title>
            <Card.Text>{description}</Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroupItem>Supplier's Name: {supplier}</ListGroupItem>
            <ListGroupItem>Quantity: {productQuantity} </ListGroupItem>
            <ListGroupItem>Price: ${price}</ListGroupItem>
          </ListGroup>
          <Card.Body>
            <Form onSubmit={handleDeliver}>
              <Form.Group className="mb-3" controlId="deliverCounter">
                <Form.Control
                  type="number"
                  placeholder="Quantity of product to deliver"
                  required
                />
              </Form.Group>
              <Button
                type="submit"
                style={{ backgroundColor: "rgb(70 129 104)" }}
                className="d-flex my-2 mx-auto border-0"
              >
                Deliver Product
              </Button>
            </Form>

            <Form onSubmit={restockHandler}>
              <Form.Group className="mb-3" controlId="restock">
                <Form.Control
                  type="number"
                  placeholder="Quantity of product to restock"
                  required
                />
              </Form.Group>
              <Button
                type="submit"
                style={{ backgroundColor: "rgb(70 129 104)" }}
                className="d-flex my-2 mx-auto border-0"
              >
                Restock Product
              </Button>
            </Form>

            <Button
              onClick={deleteHandler}
              className="d-flex mx-auto bg-danger border-0"
            >
              Delete Product
            </Button>
          </Card.Body>
        </Card>
      </div>
    </Container>
  );
};

export default MyItem;

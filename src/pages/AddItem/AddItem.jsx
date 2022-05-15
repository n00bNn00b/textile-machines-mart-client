import axios from "axios";
import React from "react";
import { Button, Form } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import auth from "../../firebase.init";

const AddItem = () => {
  const [user] = useAuthState(auth);
  // console.log(user);
  const email = user.email;
  const handleAddItem = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const price = e.target.price.value;
    const img = e.target.img.value;
    const description = e.target.description.value;
    const supplier = e.target.supplier.value;
    const quantity = e.target.quantity.value;
    e.target.reset();
    // console.log(name, price, img, description, supplier, quantity);
    const url = `http://localhost:5000/products`;
    axios
      .post(url, {
        name,
        supplier,
        price,
        quantity,
        description,
        img,
        email,
      })
      .then((res) => console.log("post data: ", res))
      .catch((err) => console.log(err));
    toast("Item Added Successfully!");
  };

  return (
    <div className="container w-50">
      <h2 className="text-center mt-5 py-5">Add Item</h2>
      <Form onSubmit={handleAddItem}>
        <Form.Group className="mb-3" controlId="name">
          <Form.Label>Item Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="i.e: Double Needle Single Stitch Machine"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="price">
          <Form.Label>Price (USD)</Form.Label>
          <Form.Control type="number" placeholder="i.e.: 100" required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="img">
          <Form.Label>Image URL</Form.Label>
          <Form.Control
            type="text"
            placeholder="i.e.: https://something.com/image.jpg"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="description">
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            type="text"
            placeholder="Short description of product..."
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="supplier">
          <Form.Label>Supplier's Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Company or individual. i.e.: JUKI or Felicia Herman"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="quantity">
          <Form.Label>Quantity</Form.Label>
          <Form.Control type="number" placeholder="i.e.: 10" required />
        </Form.Group>

        <Button
          className="border-0 d-block mx-auto mt-4"
          style={{ backgroundColor: "rgb(70 129 104)" }}
          type="submit"
        >
          Add Item
        </Button>
      </Form>
    </div>
  );
};

export default AddItem;

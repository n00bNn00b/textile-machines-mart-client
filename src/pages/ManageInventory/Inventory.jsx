import axios from "axios";
import { useState } from "react";
import { Button, Container, Modal, Table } from "react-bootstrap";
import { toast } from "react-toastify";

const Inventory = ({ inventory }) => {
  const [show, setShow] = useState(false);
  const { _id, name, img, description, supplier, quantity, price } = inventory;

  // delete handler
  const deleteHandler = () => {
    setShow(true);
  };
  // delete confirmation
  const deleteConfirm = () => {
    axios
      .delete(
        `https://textile-machines-mart-server.onrender.com/product/${_id}`
      )
      .then((res) => console.log(res));
    toast(name + " has been deleted successfully!");
    setShow(false);
  };
  //delte ignore
  const noDeleteHandler = () => {
    setShow(false);
  };
  return (
    <Container className="pt-3 pb-t mb-5">
      <Table striped bordered hover className="mt-2">
        <thead>
          <tr>
            <th>Image</th>
            <th>Item Name</th>
            <th>Short Description</th>
            <th>Supplier's Name</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td width="100px">
              <img width="100px" src={img} alt="textile-machine" />
            </td>
            <td>{name}</td>
            <td>{description}</td>
            <td>{supplier}</td>
            <td>{quantity}</td>
            <td>{price}</td>
            <td>
              <Button
                onClick={deleteHandler}
                className="bg-danger border-0  rounded-pill d-block mx-auto me-0"
              >
                <img
                  src="https://www.svgrepo.com/show/378902/trash-bin.svg"
                  alt=""
                />
              </Button>
              <Modal
                show={show}
                onHide={() => setShow(false)}
                dialogClassName="modal-90w"
                aria-labelledby="example-custom-modal-styling-title"
              >
                <Modal.Header closeButton>
                  <Modal.Title id="example-custom-modal-styling-title">
                    Are You Sure to Remove this item?
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <Button
                    onClick={deleteConfirm}
                    className="mx-5 bg-danger border-0"
                  >
                    Yes
                  </Button>
                  <Button
                    className="border-0"
                    style={{ backgroundColor: "rgb(70 129 104)" }}
                    onClick={noDeleteHandler}
                  >
                    No
                  </Button>
                </Modal.Body>
              </Modal>
            </td>
          </tr>
        </tbody>
      </Table>
    </Container>
  );
};

export default Inventory;
